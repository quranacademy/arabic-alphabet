import { FC } from 'react'

import { TBlockButtonAl } from '~/views/lesson/types';

import style from './ButtonAl.module.css'

const ButtonAl: FC<TBlockButtonAl['data']> = ({ label, url,  }) => {
    return <a className={style.button} href={ url }>{ label }</a>
}

export { ButtonAl }
