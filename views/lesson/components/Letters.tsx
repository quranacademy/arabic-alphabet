import { FC } from 'react'

import { Letter } from "~/views/lesson/components/Letter";

import { TBlockLetters } from "~/views/lesson/types"

import style from './Letters.module.css'

const Letters: FC<TBlockLetters['data']> = ({ letters }) => {
    return (
        <div className={ style.letters }>
            {
                letters.map(letter => (
                    <Letter
                        arabic={ letter['arabic'] }
                        transliteration={ letter['transliteration'] }
                        highlightTransliteration={ letter['highlightTransliteration'] }
                        harakah={ letter['harakah'] }
                    />
                ))
            }
        </div>
    )
}

export { Letters }
