import * as React from 'react'
import { useEffect, createContext, useState } from '@wordpress/element'
import { Settings } from './Settings'
import { settingsStore } from '../store'
import { State } from '../store/state'
import { getSettings } from '../store/effects'
import { Spinner } from '@wordpress/components'
import { Container } from 'reactstrap'

export const StateContext = createContext(State)

/**
 * App Component
 *
 * @returns {JSX.Element}
 */
function App (): JSX.Element {
  const [state, setState] = useState(State)

  useEffect(() => {
    const storeSubscription = settingsStore.subscribe(() => setState({ ...state, ...settingsStore.getState() }))
    return storeSubscription
  })

  return (
        <StateContext.Provider value={state}>
            {state.api.settings === 'loading' && <Spinner/>}
            <Container>
                <Settings page={state.sidebar.activeSidebarMenu}/>
            </Container>
        </StateContext.Provider>
  )
}
/**
 *  SettingsApp Compoent
 *
 * @export
 * @returns {JSX.Element}
 */
export function SettingsApp (): JSX.Element {
  useEffect(() => {
    getSettings().catch(error => error)
  })

  return <App/>
}
