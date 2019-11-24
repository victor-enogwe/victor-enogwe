import { combineReducers } from '@wordpress/data'
import { State } from './state'
import { MediaInfo, GenericAction, MenuTabNames, Sidebar, ApiStatus, EnogweState } from 'global'
import {
    ACTIVATE_SIDEBAR_MENU,
    UPLOAD_LOGO,
    UPLOAD_FAVICON,
    UPLOAD_PICTURE,
    DELETE_LOGO,
    DELETE_FAVICON,
    DELETE_PICTURE,
    ACTIVATE_MAINTENENCE_MODE,
    DEACTIVATE_MAINTENENCE_MODE,
    FETCH_SETTINGS_CLOSED,
    FETCH_SETTINGS_STALE,
    FETCH_SETTINGS_LOADING,
    FETCH_SETTINGS_ERROR,
    FETCH_SETTINGS_NETWORK,
    FETCH_SETTINGS_SUCCESS,
    REFRESH_STATE
} from './actions'
import { AnyAction } from 'redux'

const maintenanceReducers = {
    /**
     * Maintenance mode reducer
     * enogwe/settings.maintenance
     *
     * @param {boolean} [state=State.maintenance]
     * @param {GenericAction<boolean>} action
     * @returns {boolean}
     */
  active (state: boolean = State.maintenance.active, action: GenericAction<boolean>): boolean {
    const { type } = action
    if (![ACTIVATE_MAINTENENCE_MODE, DEACTIVATE_MAINTENENCE_MODE].includes(type)) { return state }
    return type === ACTIVATE_MAINTENENCE_MODE ? true : false
  }
}

/**
 * Sidebar reducer
 * checks current active sidebbar menu
 * enogwe/settings.sidebar
 *
 * @param {Sidebar} [state=State.sidebar]
 * @param {GenericAction<MenuTabNames>} action
 * @returns {Sidebar}
 */
function sidebar (state: Sidebar = State.sidebar, action: GenericAction<MenuTabNames>): Sidebar {
  const { type, data } = action
  return type === ACTIVATE_SIDEBAR_MENU ? { ...state, activeSidebarMenu: data } : state
}

/**
 * Assets reducer
 * theme settings assets reducer at enogwe/settings.assets
 *
 * @param {Record<string, string>} reducerTypes
 * @returns
 */
function asset (reducerTypes: Record<string, string>) {
  return (state: MediaInfo | undefined, action: GenericAction<MediaInfo>): MediaInfo | undefined => {
    const { type, data } = action
    const types = Object.values(reducerTypes)
    if (!types.includes(type)) { return state }
    const item = type.split('_')
    switch (action.type) {
    case `DELETE_${item[1]}`:
      return data
    case `UPLOAD_${item[1]}`:
      return { ...state, ...data }
    default:
      return state
    }
  }
}

/**
 * Api Settings network call reducer enogwe/settings.api.settings
 * state  of network call  to retrieve theme settings
 *
 * @param {Record<string, string>} reducerTypes
 * @returns
 */
function ApiSetting (reducerTypes: Record<string, string>) {
  return (state = State.api.settings, action: GenericAction<ApiStatus>): ApiStatus => {
    const { type } = action
    const types = Object.values(reducerTypes)
    if (!types.includes(type)) { return state }
    switch (action.type) {
    case FETCH_SETTINGS_STALE:
      return 'stale'
    case FETCH_SETTINGS_LOADING:
      return 'loading'
    case FETCH_SETTINGS_ERROR:
      return 'error'
    case FETCH_SETTINGS_NETWORK:
      return 'network'
    case FETCH_SETTINGS_SUCCESS:
      return 'success'
    default:
      return 'closed'
    }
  }
}

const maintenance = combineReducers(maintenanceReducers)

const assets = combineReducers({
  logo: asset({ UPLOAD_LOGO, DELETE_LOGO }),
  favicon: asset({ UPLOAD_FAVICON, DELETE_FAVICON }),
  picture: asset({ UPLOAD_PICTURE, DELETE_PICTURE })
})

const settings = ApiSetting({
  FETCH_SETTINGS_STALE,
  FETCH_SETTINGS_CLOSED,
  FETCH_SETTINGS_LOADING,
  FETCH_SETTINGS_ERROR,
  FETCH_SETTINGS_NETWORK,
  FETCH_SETTINGS_SUCCESS
})

const api = combineReducers({ settings })

export const rootReducers = combineReducers({
  maintenance, sidebar, assets, api
})

/**
 * reducer for enogwe app
 *
 * @export
 * @param {EnogweState.Settings} [state=State]
 * @param {(GenericAction<EnogweState.Settings> | AnyAction)} action
 * @returns {EnogweState.Settings}
 */
export function reducer (
    state: EnogweState.Settings = State, action: GenericAction<EnogweState.Settings> | AnyAction
): EnogweState.Settings {
  const { type, data } = action
  if (type === REFRESH_STATE) {
    return data ? data : state
  }
  return rootReducers(state as any, action)
}
