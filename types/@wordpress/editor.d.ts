// Type definitions for @wordpress/editor 9.0.6
// Project: https://github.com/WordPress/gutenberg
// Definitions by: Daniel Mejta <https://github.com/mejta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ToolbarButton } from '@wordpress/components';

export const InspectorControls: React.ComponentType;

export interface RichTextProps {
    readonly value: string;
    readonly onChange: (value: string) => void;
    readonly tagName?: string;
    readonly placeholder?: string;
    readonly multiline?: boolean | string;
    readonly onReplace?: (blocks: any[]) => void;
    readonly onMerge?: (forward: boolean) => void;
    readonly onRemove?: (forward: boolean) => void;
    readonly formattingControls?: ('bold' | 'italic' | 'strikethrough' | 'link')[];
    readonly isSelected?: boolean;
    readonly keepPlaceholderOnFocus?: boolean;
    readonly autocompleters?: any[];
    readonly className?: string;
}

declare class RichText extends React.Component<RichTextProps> {
    static readonly Content: React.ComponentType;
}

export type Media = { length:number }

declare class MediaUploadCheck extends React.Component {}

export interface MediaUploadProps {
    readonly allowedTypes?: string[];
    readonly multiple?: boolean;
    readonly value?: number | number[];
    readonly onSelect: (media: Media) => any;
    readonly title?: string;
    readonly modalClass?: string;
    readonly render: (props: { open: Function }) => JSX.Element | JSX.Element[];
}

declare class MediaUpload extends React.Component<MediaUploadProps> {}

declare class BlockControls extends React.Component {}

export interface InnerBlocksProps {
    readonly allowedBlocks?: string[];
    readonly template?: any[][];
    readonly templateInsertUpdatesSelection?: boolean;
    readonly templateLock?: string | boolean;
}

declare class InnerBlocks extends React.Component<InnerBlocksProps> {
    static readonly Content: React.ComponentType;
}

export interface URLInputProps {
    readonly value: string;
    readonly onChange: (url: string, post?: any) => void;
    readonly autofocus?: boolean;
}

declare class URLInput extends React.Component<URLInputProps> {}

export interface URLInputButtonProps {
    readonly url: string;
    readonly onChange: (url: string, post?: any) => void;
}

declare class URLInputButton extends React.Component<URLInputButtonProps> {}

export interface PlainTextProps {
    readonly value: string;
    readonly onChange: Function;
    readonly className?: string;
    readonly [prop: string]: any;
}

declare class PlainText extends React.Component<PlainTextProps> {}

export interface BlockAlignmentToolbarProps {
    isCollapsed?: boolean;
    value: string;
    onChange: Function;
    controls?: string[];
    wideControlsEnabled?: boolean;
}

declare class BlockAlignmentToolbar extends React.Component<BlockAlignmentToolbarProps> {}

export namespace RichTextToolbarButton {
    interface Props extends ToolbarButton.Props {
        name?: never;
        shortcutCharacter?: string;
        shortcutType?:
            | 'primary'
            | 'primaryShift'
            | 'primaryAlt'
            | 'secondary'
            | 'access'
            | 'ctrl'
            | 'alt'
            | 'ctrlShift'
            | 'shift'
            | 'shiftAlt';
    }
}
export const RichTextToolbarButton: React.ComponentType<RichTextToolbarButton.Props>;
