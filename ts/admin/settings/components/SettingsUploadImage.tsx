import * as React from 'react'
import { PropsWithChildren } from '@types/@wordpress/element'
import { __ } from '@types/@wordpress/i18n'
import { IconButton, Placeholder } from '@types/@wordpress/components'
import { MediaInfo, ImageProps } from 'global'
import { settingStyles } from '../styles/settings'
import { Card, Row, Col, CardBody } from 'reactstrap'
import classnames = require('classnames')

/**
 * SettingsUploadImage Component
 *
 * @export
 * @param {PropsWithChildren<ImageProps>} props
 * @returns {JSX.Element}
 */
export function SettingsUploadImage (props: PropsWithChildren<ImageProps>): JSX.Element {
  const { media, onDelete, onClick, label } = props
  const NoImage = () => <Placeholder icon="format-image" style={settingStyles.placeholder}/>
  const createSrcSet = (image: MediaInfo): string => Object.values(image.sizes).map(src => src.url).join(', ')

  return (
        <Card className={classnames('border-0', 'flex-fill', 'flex-grow-1', 'justify-content-center', 'align-items-center')}>
            <Row noGutters={true} className="w-md-75">
                <Col>{media ? <img srcSet={createSrcSet(media)}/> : <NoImage />}</Col>
                <Col>
                    <CardBody>
                        <IconButton isPrimary={true} icon="upload" onClick={onClick}>{__(`Upload ${label}`)}</IconButton>
                        <IconButton isDefault={true} disabled={!media} icon="trash" onClick={onDelete}>{__(`Delete ${label}`)}</IconButton>
                    </CardBody>
                </Col>
            </Row>
        </Card>
  )
}
