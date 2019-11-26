import { Panel, PanelBody, PanelRow } from '@wordpress/components'
import { useContext } from '@wordpress/element'
import * as React from 'react'
import { DELETE_FAVICON, DELETE_LOGO, DELETE_PICTURE, UPLOAD_FAVICON, UPLOAD_LOGO, UPLOAD_PICTURE } from '../store/actions'
import { handleMediaDelete, handleMediaUpload } from '../store/effects'
import { settingStyles } from '../styles/settings'
import { StateContext } from './SettingsApp'
import { SettingsUploadImage } from './SettingsUploadImage'

/**
 * SettingsAssetPage Componennt
 *
 * @export
 * @returns {JSX.Element}
 */
export function SettingsAssetsPage(): JSX.Element {
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
