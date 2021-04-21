import { FC } from 'react'

import { TBlockTitle } from '~/views/lesson/types'

import style from './Title.module.css'

const Title: FC<TBlockTitle['data']> = ({content}) => {
    return (
        <h3 className={style.title}>
            { content }
        </h3>
    )
}

export { Title }
