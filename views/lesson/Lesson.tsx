import { Layout } from '~/components'
import { Block } from './Block'

import { content } from './lessonData'

import styles from './Lesson.module.scss'

const Lesson = () => {
    return (
        <Layout>
            {
                content.map((block, index) => (
                    <Block key={ index } block={ block } />
                ))
            }
        </Layout>
    )
}

export { Lesson }
