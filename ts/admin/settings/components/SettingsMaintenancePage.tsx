import * as React from 'react'
import { useContext } from '@wordpress/element'
import { Fragment } from '@wordpress/element'
import { StateContext } from './SettingsApp';

export const SettingsMaintenancePage = () => {
    const settings = useContext(StateContext).maintenance

    return (<Fragment>

    </Fragment>)
}
