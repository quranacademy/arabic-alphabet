import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Layout.module.scss'

interface LayoutProps {
    title?: string
}

const Layout: FC<LayoutProps> = ({
    children,
    title,
}) => {
    return (
        <>
            <Head>
                <title>{ title ?? 'Арабский алфавит' }</title>
                <link rel="shortcut icon" href="/images/favicons/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/images/favicons/android-chrome-192x192.png" sizes="192x192" />
                <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="/images/favicons/favicon-16x16.png" sizes="16x16" />
                <link rel="apple-touch-icon" sizes="57x57" href="/images/favicons/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/images/favicons/apple-touch-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/images/favicons/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/images/favicons/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/images/favicons/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/images/favicons/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/images/favicons/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/images/favicons/apple-touch-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon-180x180.png" />
                <link rel="manifest" href="/images/favicons/manifest.json"  />
            </Head>

            <section className={ styles.root }>
                <div className={ styles.sidebar }>
                    <div className={ styles.logo }>
                        <Image className={ styles.logoImage } src="/images/logo.png" alt="" width="100" height="100" />
                        <div className={ styles.logoText }>Арабский <br /> алфавит</div>
                    </div>
                    <div className={ styles.buttons }>
                        <Link href="/courses">
                            <a className={ styles.button }>Уроки</a>
                        </Link>
                        <Link href="/alphabet">
                            <a className={ styles.button }>Алфавит</a>
                        </Link>
                        <Link href="/quran">
                            <a className={ styles.button }>Коран</a>
                        </Link>
                        <Link href="/about">
                            <a className={ styles.button }>О нас</a>
                        </Link>
                    </div>
                </div>
                <div className={ styles.content }>
                    { children }
                </div>
            </section>
        </>
    )
}

export { Layout }
