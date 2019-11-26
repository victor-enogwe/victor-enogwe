import { registerStore } from '@types/@wordpress/data'
import { reducer } from './reducers'
import { actions } from './actions'

export const settingsStore = registerStore('enogwe/settings', { reducer, actions })
