export enum TBlockType {
    TEXT = 'text',
    TITLE = 'title',
    BUTTON = 'button',
    ALBUTTON = 'alButton',
    LETTERS = 'letters',
    ORDERED_LIST = 'ordered-list',
    BUTTONS = 'buttons',
}

export type TBlockText = {
    type: TBlockType.TEXT
    data: {
        content: string
    }
}

export type TBlockTitle = {
    type: TBlockType.TITLE
    data: {
        content: string
    }
}

export type TBlockButtonAl = {
    type: TBlockType.ALBUTTON
    data: {
        label: string
        url: string
    }
}

export type TBlockLetters = {
    type: TBlockType.LETTERS
    data: {
        letters: TLetter[]
    }
}

export type TLetter = {
    arabic: string
    transliteration: string
    highlightTransliteration: boolean
    harakah: string
    audioUrl?: string
}

export type TBlockOrderedList = {
    type: TBlockType.ORDERED_LIST
    data: {
        items: string[]
    }
}

export type TButton = {
    label: string
    url: string
    color: string
}

export type TBlockButton = {
    type: TBlockType.BUTTON
    data: TButton
}

export type TBlockButtons = {
    type: TBlockType.BUTTONS
    data: {
        buttons: TButton[]
    }
}

export type TBlock =
    TBlockText | TBlockButtonAl | TBlockLetters
    | TBlockOrderedList | TBlockTitle | TBlockButtons | TBlockButton
