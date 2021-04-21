import { FC } from 'react'

import { TBlockButton } from '~/views/lesson/types';

import style from './Button.module.css'

const Button: FC<TBlockButton['data']> = ({ label, url, color }) => {
    return <a className={style.button} href={ url }>{ label }</a>
}

export { Button }
