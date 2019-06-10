import { MenuTabNames, TabIcons } from 'global'

export const tabNames: MenuTabNames[] = ['Assets', 'Layouts', 'Typography', 'Socials', 'Integrations', 'Maintenance', 'Documentation']
export const tabIcons: TabIcons = {
    Assets: 'images-alt2',
    Layouts: 'editor-kitchensink',
    Typography: 'editor-spellcheck',
    Socials: 'networking',
    Integrations: 'universal-access-alt',
    Maintenance: 'backup',
    Documentation: 'book-alt'
}
export const defaultMediaConfig = {
    title: 'Select or Upload Media',
    button: { text: 'Use this media' },
    multiple: false,
    library: { type: ['image'] }
}
