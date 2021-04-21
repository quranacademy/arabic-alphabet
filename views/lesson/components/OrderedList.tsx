import { FC } from 'react'

import { TBlockOrderedList } from '~/views/lesson/types'

import style from './OrderedList.module.css'

const OrderedList: FC<TBlockOrderedList['data']> = ({items}) => {
    return (
        <ol>
            { items }
        </ol>
    )
}

export { OrderedList }
