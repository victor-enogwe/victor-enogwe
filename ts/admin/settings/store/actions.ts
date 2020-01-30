import { MediaInfo, GenericAction, MenuTabNames, ApiStatus, EnogweState } from 'global'
import { State } from './state'

export const ACTIVATE_MAINTENENCE_MODE = 'ACTIVATE_MAINTENENCE_MODE'
export const DEACTIVATE_MAINTENENCE_MODE = 'DEACTIVATE_MAINTENENCE_MODE'
export const ACTIVATE_SIDEBAR_MENU = 'ACTIVATE_SIDEBAR_MENU'
export const UPLOAD_LOGO = 'UPLOAD_LOGO'
export const UPLOAD_FAVICON = 'UPLOAD_FAVICON'
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE'
export const DELETE_LOGO = 'DELETE_LOGO'
export const DELETE_FAVICON = 'DELETE_FAVICON'
export const DELETE_PICTURE = 'DELETE_PICTURE'
export const FETCH_SETTINGS_CLOSED = 'FETCH_SETTINGS_CLOSED'
export const FETCH_SETTINGS_STALE = 'FETCH_SETTINGS_STALE'
export const FETCH_SETTINGS_LOADING = 'FETCH_SETTINGS_LOADING'
export const FETCH_SETTINGS_ERROR = 'FETCH_SETTINGS_ERROR'
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS'
export const FETCH_SETTINGS_NETWORK = 'FETCH_SETTINGS_NETWORK'
export const REFRESH_STATE = 'REFRESH_STATE'

/**
 * Create an Action
 * generic action creator
 *
 * @template T
 * @param {GenericAction<T>} action
 * @returns {GenericAction<T>}
 */
function createAction<T> (action: GenericAction<T>): GenericAction<T> {
  return action
}

/**
 * Create an action of type Asset
 * generic asset action creator
 *
 * @param {string} type
 * @returns
 */
function assetAction (type: string) {
  return createAction.bind<null, GenericAction<MediaInfo | {}>, GenericAction<MediaInfo | {}>>(null, { type, data: {} })
}

export const actions = {
  activateMaintenanceMode: createAction.bind<null, GenericAction<boolean>, GenericAction<boolean>>(null, {
    type: ACTIVATE_MAINTENENCE_MODE, data: true
  }),
  activateSidebarMenu: createAction.bind<null, GenericAction<MenuTabNames>, GenericAction<MenuTabNames>>(null, {
    type: ACTIVATE_SIDEBAR_MENU, data: 'Layouts'
  }),
  uploadLogo: assetAction(UPLOAD_LOGO),
  uploadFavicon: assetAction(UPLOAD_FAVICON),
  uploadPicture: assetAction(UPLOAD_PICTURE),
  deleteLogo: assetAction(DELETE_LOGO),
  deleteFavicon: assetAction(DELETE_FAVICON),
  deletePicture: assetAction(DELETE_PICTURE),
  deActivateMaintenanceMode: createAction.bind<null, GenericAction<boolean>, GenericAction<boolean>>(null, {
    type: ACTIVATE_MAINTENENCE_MODE, data: false
  }),
  fetchSettingsClosed: createAction.bind<null, GenericAction<ApiStatus>, GenericAction<ApiStatus>>(null, {
    type: FETCH_SETTINGS_CLOSED, data: 'closed'
  }),
  fetchSettingsStale: createAction.bind<null, GenericAction<ApiStatus>, GenericAction<ApiStatus>>(null, {
    type: FETCH_SETTINGS_STALE, data: 'stale'
  }),
  fetchSettingsLoading: createAction.bind<null, GenericAction<ApiStatus>, GenericAction<ApiStatus>>(null, {
    type: FETCH_SETTINGS_LOADING, data: 'loading'
  }),
  fetchSettingsError: createAction.bind<null, GenericAction<ApiStatus>, GenericAction<ApiStatus>>(null, {
    type: FETCH_SETTINGS_ERROR, data: 'error'
  }),
  fetchSettingsSuccess: createAction.bind<null, GenericAction<ApiStatus>, GenericAction<ApiStatus>>(null, {
    type: FETCH_SETTINGS_SUCCESS, data: 'success'
  }),
  fetchSettingsNetwork: createAction.bind<null, GenericAction<ApiStatus>, GenericAction<ApiStatus>>(null, {
    type: FETCH_SETTINGS_NETWORK, data: 'network'
  }),
  refreshState: createAction.bind<null, GenericAction<EnogweState.Settings>, GenericAction<EnogweState.Settings>>(null, {
    type: REFRESH_STATE, data: State
  })
}
