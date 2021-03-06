import { Layout } from '~/components';

import { letters } from './letters';

import styles from './Alphabet.module.scss'

const Alphabet = () => {
    return (
        <Layout>
            <div className={ styles.header }>
                <h1 className={ styles.title }>Арабский алфавит</h1>
            </div>
            <div className={ styles.content }>
                {
                    letters.map(letter => (
                        <button key={ letter.arabic } className={styles.letter}>
                            <div className={ styles.letterButton }>
                                <div className={ styles.letterArabic }>{ letter.arabic }</div>
                                <div className={ styles.letterTransliteration }>{ letter.name }</div>
                            </div>
                        </button>
                    ))
                }
            </div>
        </Layout>
    )
}
export { Alphabet }
