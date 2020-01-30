import { registerStore } from '@wordpress/data'
import { actions } from './actions'
import { reducer } from './reducers'

export const settingsStore = registerStore('enogwe/settings', { reducer, actions })
