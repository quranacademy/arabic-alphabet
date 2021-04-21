import { TBlock, TBlockType } from './types'
import { arabicCharacters } from "~/views/lesson/arabicCharacters";

export const content: TBlock[] = [
    {
        type: TBlockType.TEXT,
        data: {
            content: 'Все буквы в арабском алфавите пишутся справа налево. Всего в арабском алфавите 28 букв. Все эти буквы обозначают огласные звуки (например, “б”, “т”, “р” и т. д). Нажмите на кнопку, чтобы посмотреть все буквы алфавита.',
        },
    },
    {
        type: TBlockType.BUTTON,
        data: {
            label: 'Алфавит',
            url: '/alphabet',
        },
    },
    {
        type: TBlockType.TEXT,
        data: {
            content: 'В последующих уроках мы разберем каждую из них, если пожелает Аллах.\n\nНекоторые звуки буквы в арабском языке произносятся не так как в русском. Самостоятельно научиться произносить их довольно сложно, поэтому мы настоятельно рекомендуем научиться правильно их произносить у живого учителя.\n\nДавайте для примера возьмем вторую букву алфавита:'
        },
    },
    {
        type: TBlockType.LETTERS,
        data: {
            letters: [
                {
                    arabic: arabicCharacters.ba,
                    transliteration: 'ба',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
            ]
        },
    },
    {
        type: TBlockType.TEXT,
        data: {
            content: 'Эта буква, как и все буквы алфавита имеет своё название и называется “ба”. В тексте “ба” читается как “б”. Это чем-то похоже на то, как в древнеславянском алфавите буквы “а”, “б”, “в” имели названия “аз”, “буки”, “веди” и т. д.\n\nТакже, нужно знать, что слова не могут строиться только из гласных букв. К примеру, слова “машина” или “алфавит” без гласных будут звучать как “мшн” или “лфвт”. Точно так же и арабском. Гласных в арабском языке всего три: “а”, “и”, “у”. Они пишутся над буквами и выглядят вот так:',
        },
    },
    {
        type: TBlockType.TITLE,
        data: {
            content: 'Буква "Алиф"',
        },
    },
    {
        type: TBlockType.TEXT,
        data: {
            content: 'Особенностью данной буквы является то, что она не имеет звука без наличия огласовки над ней. Если буквы “ба”, “та”, “са” имеют звуки “б”, “т”, “с”, то у алифа такого звука нет. Давайте посмотрим, как читается буква алиф с огласовками: ',
        },
    },
    {
        type: TBlockType.LETTERS,
        data: {
            letters: [
                {
                    arabic: arabicCharacters.alif,
                    transliteration: 'А',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
                {
                    arabic: arabicCharacters.alif,
                    transliteration: 'И',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
                {
                    arabic: arabicCharacters.alif,
                    transliteration: 'У',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
            ]
        },
    },
    {
        type: TBlockType.TEXT,
        data: {
            content: 'Еще одна особенность буквы алиф – это то, что у нее одинаковые варианты написания в обособленном варианте и начальном, а также в серединном и конечном. Пример:',
        },
    },
    {
        type: TBlockType.LETTERS,
        data: {
            letters: [
                {
                    arabic: arabicCharacters.alif,
                    transliteration: 'К',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
                {
                    arabic: arabicCharacters.alif,
                    transliteration: 'С',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
                {
                    arabic: arabicCharacters.alif,
                    transliteration: 'Н',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
                {
                    arabic: arabicCharacters.alif,
                    transliteration: 'О',
                    highlightTransliteration: true,
                    harakah: 'َ',
                },
            ]
        },
    },
    {
        type: TBlockType.ORDERED_LIST,
        data: {
            items: [
                '<li><span>О</span> – Обособленный</li>',
                '<li><span>Н</span> – Начальный</li>',
                '<li><span>С</span> – Серединный</li>',
                '<li><span>К</span> – Конечный</li>',
            ],
        },
    },
    {
        type: TBlockType.BUTTONS,
        data: {
            buttons: [
                {
                    label: 'Домашнее задание',
                    url: '/homework',
                    color: '#FFB74D',
                },
                {
                    label: 'Упражнения',
                    url: '/practice',
                    color: '#FFB74D',
                },
                {
                    label: 'Начать тест',
                    url: '/test',
                    color: '#77B5FE',
                },
            ],
        },
    },
]
