import * as React from 'react'
import { __ } from '@types/@wordpress/i18n'
import classnames from 'classnames'
import { PropsWithoutRef, useContext } from '@types/@wordpress/element'
import { Button, ToggleControl } from '@types/@wordpress/components'
import { SettingsPages, SettingsPageProps } from '@types/global'
import { SettingsLayoutPage } from './SettingsLayoutPage'
import { SettingsAssetsPage } from './SettingsAssetsPage'
import { StateContext } from './SettingsApp'
import { settingsStore } from '../store'
import { saveSettings, toggleMaintenance } from '../store/effects'
import { Col, CardHeader, CardBody, CardTitle } from 'reactstrap'

/**
 * SettingsPage Component
 *
 * @export
 * @param {PropsWithoutRef<SettingsPageProps>} props
 * @returns {JSX.Element}
 */
export function SettingsPage (props: PropsWithoutRef<SettingsPageProps>): JSX.Element {
  const { maintenance: { active }, api: { settings: loading } } = useContext(StateContext)
  const isBusy = loading === 'loading'
  const setState = () => saveSettings(settingsStore.getState())
  const pages: SettingsPages = {
    Assets: <SettingsAssetsPage />,
    Layouts:  <SettingsLayoutPage />
  }
  const Page = pages[props.page]

  return (
        <Col md="9" className={classnames('card', 'p-0', 'border-left-0')}>
            <CardHeader className={classnames('d-flex', 'justify-content-between', 'align-items-center')}>
                <CardTitle className={classnames('d-none', 'd-md-block', 'mb-n1')}>{props.page}</CardTitle>
                <div className="mb-n3">
                    <ToggleControl label={__('Maintenance', 'enogwe')} checked={active} onChange={toggleMaintenance}/>
                </div>
                <Button
                    isBusy={isBusy}
                    disabled={isBusy}
                    isPrimary={true}
                    label={__('Save  Settings', 'enogwe')}
                    onClick={setState}
                >
                    Save Settings
                </Button>
            </CardHeader>
            <CardBody>{Page}</CardBody>
        </Col>
  )
}
