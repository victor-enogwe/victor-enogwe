import { IconButton } from '@wordpress/components'
import { PropsWithChildren } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import classnames from 'classnames'
import { SettingsPageProps } from 'global'
import * as React from 'react'
import { CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'
import { tabIcons, tabNames } from '../constants'
import { SettingsPage } from './SettingsPage'
import { SettingsSidebar } from './SettingsSIdebar'

/**
 * Settings Component
 *
 * @export
 * @param {PropsWithChildren<SettingsPageProps>} props
 * @returns {JSX.Element}
 */
export function Settings(props: PropsWithChildren<SettingsPageProps>): JSX.Element {
    return (
        <Row noGutters={true} className={classnames('flex-fill', 'flex-grow-1')}>
            <Col md="3" className={classnames('card', 'p-0', 'border-0', 'bg-light', 'd-none', 'd-md-block')}>
                <CardHeader>
                    <CardTitle className={classnames('d-flex', 'mb-0')}>
                        <IconButton
                            isLink={true}
                            // onClick={expandMenu}
                            isSmall={true}
                            icon="menu"
                            size={29}
                            className={classnames('border-0', 'shadow-none')}
                        />
                        {__('Theme Settings')}
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <SettingsSidebar tabNames={tabNames} tabIcons={tabIcons} activeSidebarMenu={props.page} />
                </CardBody>
            </Col>
            <SettingsPage page={props.page} />
        </Row>
    )
}
