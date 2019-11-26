import { EnogweState, GenericAction, MediaInfo, MediaProps } from 'global'
import WPAPI from '@types/wpapi/superagent'
import { settingsStore } from '.'
import { defaultMediaConfig } from '../constants'
import { actions, ACTIVATE_MAINTENENCE_MODE, DEACTIVATE_MAINTENENCE_MODE, REFRESH_STATE } from './actions'

const { protocol, hostname, port } = window.location
const baseUrl = `${protocol}//${hostname}${port ? `:${port}` : ''}`
const endpoint = `${baseUrl}/wp-json/enogwe/v1`
const wp = new WPAPI({ endpoint })

/**
 * Get Theme Settings
 * retrieves theme settings from api
 *
 * @export
 * @returns {Promise<void>}
 */
export async function getSettings (): Promise<void> {
  try {
    const { fetchSettingsLoading, fetchSettingsSuccess, fetchSettingsClosed } = actions
    settingsStore.dispatch(fetchSettingsLoading())
    const { settings: data } = await wp.root('settings').get()
    settingsStore.dispatch({ type: REFRESH_STATE, data: JSON.parse(data) })
    setTimeout(() => {
      settingsStore.dispatch(fetchSettingsSuccess())
      settingsStore.dispatch(fetchSettingsClosed()) // redux-thunk
    }, 2000)
  } catch (error) {
    setTimeout(() => settingsStore.dispatch(actions.fetchSettingsError()), 2000)
  }
}

/**
 * Save Theme Settings
 *
 * @export
 * @param {EnogweState.Settings} settings
 * @returns {Promise<void>}
 */
export async function saveSettings (settings: EnogweState.Settings): Promise<void> {
  try {
    const { fetchSettingsLoading, fetchSettingsSuccess, fetchSettingsClosed } = actions
    settingsStore.dispatch(fetchSettingsLoading())
    await wp.root('settings').auth({ nonce: window.cred.nonce }).create({ settings: JSON.stringify(settings) })
    setTimeout(() => {
      settingsStore.dispatch(fetchSettingsSuccess())
      settingsStore.dispatch(fetchSettingsClosed()) // redux-thunk
    }, 2000)
  } catch (error) {
    setTimeout(() => settingsStore.dispatch(actions.fetchSettingsError()), 2000)
  }
}

/**
 * Toggle Site Maintenance Mode
 *
 * @export
 * @param {boolean} isChecked
 * @returns
 */
export function toggleMaintenance (isChecked: boolean) {
  const deActivate = { type: DEACTIVATE_MAINTENENCE_MODE }
  const activate = { type: ACTIVATE_MAINTENENCE_MODE }
  return isChecked ? settingsStore.dispatch(activate) : settingsStore.dispatch(deActivate)
}

/**
 * Handle Media Upload
 *
 * @export
 * @param {string} action
 * @returns {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}
 */
export function handleMediaUpload (action: string): (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void {
  const WpMedia = (config: MediaProps) => window.wp.media({ ...defaultMediaConfig, ...config })
  const frame = WpMedia({ title: '', button: { text: 'Use  this image' } })
  const onSelect = () => settingsStore.dispatch({ type: action, data: frame.state().get('selection').first().toJSON() })

  frame.on('select', onSelect)

  return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => frame.open()
}

/**
 * Handle Media Delete
 *
 * @export
 * @returns
 */
export function handleMediaDelete (type: string) {
  return () => settingsStore.dispatch<GenericAction<MediaInfo | undefined>>({ type, data: undefined })
}

/**
 * menu Expanded
 *
 * @export
 */
export function menuExpanded () {

}
