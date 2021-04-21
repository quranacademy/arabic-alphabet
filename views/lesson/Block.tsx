import { FC } from 'react'

import { Text } from './components/Text'
import { ButtonAl } from './components/ButtonAl';
import { Letters } from "~/views/lesson/components/Letters";
import { Title } from "~/views/lesson/components/Title";
import { OrderedList } from "~/views/lesson/components/OrderedList";

import { TBlock, TBlockType } from './types'

import style from './Block.module.css'

interface BlockProps {
    block: TBlock
}

const Block: FC<BlockProps> = ({ block }) => {
    return (
        <>
            { block.type === TBlockType.TEXT && <Text content={ block.data.content } /> }
            { block.type === TBlockType.ALBUTTON && <ButtonAl label={ block.data.label } url={ block.data.url } /> }
            { block.type === TBlockType.LETTERS && <Letters letters={ block.data.letters } /> }
            { block.type === TBlockType.TITLE && <Title content={ block.data.content } /> }
            { block.type === TBlockType.ORDERED_LIST && <OrderedList items={ block.data.items }/> }
        </>
    )
}

export { Block }
