import { Spinner } from '@wordpress/components'
import { createContext, useEffect, useState } from '@wordpress/element'
import * as React from 'react'
import { Container } from 'reactstrap'
import { settingsStore } from '../store'
import { getSettings } from '../store/effects'
import { State } from '../store/state'
import { Settings } from './Settings'

export const StateContext = createContext(State)

/**
 * App Component
 *
 * @returns {JSX.Element}
 */
function App(): JSX.Element {
    const [state, setState] = useState(State)

    useEffect(() => {
        const storeSubscription = settingsStore.subscribe(() => setState({ ...state, ...settingsStore.getState() }))
        return storeSubscription
    })

    return (
        <StateContext.Provider value={state}>
            {state.api.settings === 'loading' && <Spinner />}
            <Container>
                <Settings page={state.sidebar.activeSidebarMenu} />
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
export function SettingsApp(): JSX.Element {
    useEffect(() => {
        getSettings().catch(error => error)
    })

    return <App />
}
