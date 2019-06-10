// Type definitions for @wordpress/block-editor
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/editor
// Definitions by: Derek P Sifford <https://github.com/dsifford>

import { ToolbarButton } from '@wordpress/components';
import { Component, ComponentType, CSSProperties, HTMLProps } from 'react';

export namespace AlignmentToolbar {
    interface Props {
        isCollapsed?: boolean;
        value?: 'left' | 'right' | 'center';
        onChange(nextAlign: 'left' | 'right' | 'center'): void;
    }
}
export const AlignmentToolbar: ComponentType<AlignmentToolbar.Props>;

export const BlockControls: ComponentType;

export const BlockFormatControls: ComponentType;

export namespace NavigableToolbar {
    interface Props extends HTMLProps<HTMLElement> {
        /**
         * Make the toolbar get focus as soon as it mounted.
         */
        focusOnMount?: boolean;
    }
}
export const NavigableToolbar: ComponentType<NavigableToolbar.Props>;

export namespace RichText {
    interface Props {
        value: string;
        tagName?: string;
        placeholder?: string;
        multiline?: boolean | string;
        formattingControls?: string[];
        isSelected?: boolean;
        keepPlaceholderOnFocus?: boolean;
        autocompleters?: any[];
        style?: CSSProperties;
        wrapperClassName?: string;
        className?: string;
        inlineToolbar?: boolean;
        onChange(value: string): void;
        onTagNameChange?(tagName: string): void;
        onReplace?(blocks: any[]): void;
        onMerge?(forward: boolean): void;
        onRemove?(forward: boolean): void;
    }
}
export class RichText extends Component<RichText.Props> {
    static Content<T extends keyof HTMLElementTagNameMap = 'div'>(
        props: {
            value: string | string[];
            children?: never;
            tagName?: T;
            multiline?: true | 'p' | 'li';
        } & HTMLProps<T>,
    ): JSX.Element;
    static isEmpty(value: string): boolean;
}

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
export const RichTextToolbarButton: ComponentType<RichTextToolbarButton.Props>;

export type Media = { length:number }

type Mime = 'image' | 'audio' | 'text' | 'audio/mpeg' | 'image/gif'
export namespace MediaUpload {
    interface Props {
        allowedTypes?: Mime | Mime[]
        multiple?: boolean
        vaue?: number | number[]
        onSelect: (media: Media) => any
        title?: string
        modalClass?: string
        addToGallery?: boolean
        gallery?: boolean
        render: Function
    }
}

export const  MediaUpload: ComponentType<MediaUpload.Props>;

export namespace MediaUploadCheck {
    interface Props {

    }
}

export  const MediaUploadCheck: ComponentType<MediaUploadCheck.Props>;
