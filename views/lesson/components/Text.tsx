import { FC } from 'react'

import { TBlockText } from '~/views/lesson/types'

import style from './Text.module.css'

const Text: FC<TBlockText['data']> = ({content}) => {
    return (
        <>
            {
                content.split(`\n\n`).map(paragraphContent => (
                    <p className={ style.content }>{ paragraphContent }</p>
                ))
            }
        </>
    )
}

export { Text }
