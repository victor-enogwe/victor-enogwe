import * as React from 'react'
import { useContext } from '@wordpress/element'
import { Dashicon } from '@wordpress/components'
import { settingsStore } from '../store'
import { ACTIVATE_SIDEBAR_MENU } from '../store/actions'
import { SidebarProps, Tab, GenericAction, MenuTabNames } from 'global'
import { StateContext } from './SettingsApp'
import { Nav, NavItem, NavLink } from 'reactstrap'

/**
 * SettingsSidebar Component
 *
 * @export
 * @param {SidebarProps} props
 * @returns {JSX.Element}
 */
export function SettingsSidebar (props: SidebarProps): JSX.Element {
    const maintenance = useContext(StateContext).maintenance
    const tabs: Tab[] = props.tabNames.map(name => ({ name, className: name, title: name, icon: props.tabIcons[name] }))
    const disabled = (tab: Tab) => tab.title === 'Maintenance' && !maintenance
    const isActive = (tab: Tab) => props.activeSidebarMenu === tab.title
    const activateMenu = (tab: Tab) => () => settingsStore.dispatch<GenericAction<MenuTabNames>>({
        type: ACTIVATE_SIDEBAR_MENU, data: tab.name
    })
    const Tabs = tabs.map((tab, index) => (
        <NavItem key={`settings_sidebar_${index}`}>
            <NavLink
                className={tab.className}
                onClick={activateMenu(tab)}
                label={tab.title}
                disabled={disabled(tab)}
                active={isActive(tab)}
            >
                <Dashicon icon={tab.icon}/> {tab.title}
            </NavLink>
        </NavItem>
    ))

    return <Nav pills={true} vertical={true} navbar={true}>{Tabs}</Nav>
}
