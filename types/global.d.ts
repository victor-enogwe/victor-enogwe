export type Tab = { name: MenuTabNames, className: string, title: string, icon: string  };
export type TabIcons = { [key in MenuTabNames]: string };
export type MenuTabNames = 'Layouts' | 'Assets' | 'Typography' | 'Socials' | 'Integrations' | 'Maintenance' | 'Documentation';
export type MenuTabIcons = { [key in MenuTabNames]: string };
export type SettingsPages = { [key in MenuTabNames]?: JSX.Element }
export type ApiStatus = 'success' | 'error' | 'network' | 'stale' | 'loading' | 'closed'
export type GenericAction<T> = { type: string, data: T };
export type TypedAction<T> = { data: T };
export type SidebarProps = { tabNames: MenuTabNames[], tabIcons:  MenuTabIcons } & Sidebar;
export type SettingsPageProps = { page: MenuTabNames }
export interface Sidebar { activeSidebarMenu: MenuTabNames }
export interface  Maintenance {
    active: boolean
    capabilities?: String[]
    duration?: {
        from: Date
        to: Date
    }
}
export interface Assets {
    logo?: MediaInfo
    favicon?: MediaInfo
    picture?: MediaInfo
}
export namespace EnogweState {
    export interface Settings {
        maintenance: Maintenance
        sidebar: Sidebar
        assets?: Assets
        api: {
            settings: ApiStatus
        }
    }
}

type Accept = 'video' | 'image';
type MediaProps = {
    readonly multiple?: boolean;
    readonly title?: string;
    button: { text: string },
    library?: {
        type: Accept[] | string[]
    }
}

export type ImgSrc = {
    height: number
    orientation: "landscape" | "potrait"
    url: string
    width: number
}

export type MediaInfo = {
    alt: string
    author: number
    authorName: string
    caption: string
    item: string
    meta: string | boolean
    context: string
    date: Date
    dateFormatted: Date
    description: string
    editLink: string
    filename: string
    filesizeHumanReadable: string
    filesizeInBytes: number
    height: number
    icon: string
    id: 44
    link: string
    menuOrder: 0
    mime: Accept
    modified: Date
    name: "161107c21002-x2"
    sizes:{
        [key: string]: ImgSrc
    }
    status: string
    subtype: string
    title: string
    type: string
    uploadedTo: number | string
    url: string
    width: number
}

type Frame = {
    open: Function
    on: Function
    state: () => {
        get: (selection: string) => {
            first: () => {
                toJSON: () => MediaInfo
            }
        }
    }
}

type handleUploadArgs = { action: string, frame: Frame }

export type ImageProps = {
    label: string
    media: MediaInfo | undefined
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    onDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface EnogwePackPlugin {
    hook: 'EnogwePackPlugin'
    apply: Function
    copy: Function
    run: Function
    tap: Function
}

declare global {
    export interface Window {
        wp: {
            media: (props:  MediaProps) => Frame
        }
        cred: {
            nonce: string
        }
    }
}
