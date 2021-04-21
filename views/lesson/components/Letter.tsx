import { FC, useCallback } from 'react'

import { TLetter } from '../types';

import style from './Letter.module.css'

const Letter: FC<TLetter> = ({
    arabic,
    audioUrl,
    harakah,
    highlightTransliteration,
    transliteration,
}) => {
    const handleClick = useCallback(() => {

    }, [])

    const Component = audioUrl !== undefined ? (props) => <button onClick={ handleClick } { ...props } /> : 'div'

    return (
        <Component className={ style.letter }>
            <div className={ style.arabic }>
                <span>{ arabic }</span>
                <span>{ harakah }</span>
            </div>
            <div className={ style.transliteration }>{ transliteration }</div>
        </Component>
    )
}

export { Letter }
