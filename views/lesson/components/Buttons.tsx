import { FC } from 'react'

import { Button } from "~/views/lesson/components/Button";

import { TBlockButtons } from "~/views/lesson/types"

import style from './Buttons.module.css'

const Buttons: FC<TBlockButtons['data']> = ({buttons}) => {
    return (
        <div className={ style.buttons }>
            {
                buttons.map(button => (
                    <Button label={ button.label } url={ button.url } color={ button.color }/>
                ))
            }
        </div>
    )
}

export { Buttons }
