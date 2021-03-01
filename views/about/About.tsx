import { Layout } from '~/components'

import styles from './About.module.scss'

const About = () => {
    return (
        <Layout>
            <h1 className={ styles.header }>О проекте</h1>
        </Layout>
    )
}

export { About }
