import * as React from 'react'
import { useContext } from '@wordpress/element'
import { PanelBody, Panel, PanelRow } from '@wordpress/components'
import { UPLOAD_LOGO, UPLOAD_FAVICON, UPLOAD_PICTURE, DELETE_FAVICON, DELETE_PICTURE, DELETE_LOGO } from '../store/actions'
import { StateContext } from './SettingsApp'
import { SettingsUploadImage } from './SettingsUploadImage'
import { settingStyles } from '../styles/settings'
import { handleMediaUpload, handleMediaDelete } from '../store/effects'

/**
 * SettingsAssetPage Componennt
 *
 * @export
 * @returns {JSX.Element}
 */
export function SettingsAssetsPage (): JSX.Element {
    const { assets } = useContext(StateContext)
    const logo = assets && assets.logo
    const favicon = assets && assets.favicon
    const picture = assets && assets.picture

    return (
        <div style={settingStyles.assetPage}>
            <Panel>
                <PanelBody initialOpen={true} title="LOGO">
                    <PanelRow>
                        <SettingsUploadImage
                            label="Logo"
                            onClick={handleMediaUpload(UPLOAD_LOGO)}
                            onDelete={handleMediaDelete(DELETE_LOGO)}
                            media={logo}
                        />
                    </PanelRow>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody initialOpen={false} title="FAVICON">
                    <PanelRow>
                        <SettingsUploadImage
                            label="Favicon"
                            onClick={handleMediaUpload(UPLOAD_FAVICON)}
                            onDelete={handleMediaDelete(DELETE_FAVICON)}
                            media={favicon}
                        />
                    </PanelRow>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody initialOpen={false} title="PROFILE PICTURE">
                    <PanelRow>
                        <SettingsUploadImage
                            label="Picture"
                            onClick={handleMediaUpload(UPLOAD_PICTURE)}
                            onDelete={handleMediaDelete(DELETE_PICTURE)}
                            media={picture}
                        />
                    </PanelRow>
                </PanelBody>
            </Panel>
        </div>
    )
}
