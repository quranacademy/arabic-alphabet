import { useState } from 'react'
import ReactHowler from 'react-howler'

import { Layout } from '~/components'
import { letters } from './letters'

import styles from './Alphabet.module.scss'

const Alphabet = () => {
    const [playingLetterAudioPath, setPlayingLetterAudioPath] = useState<string | null>(null)

    return (
        <Layout>
            <div className={ styles.header }>
                <h1 className={ styles.title }>Арабский алфавит</h1>
            </div>
            <div className={ styles.content } dir="rtl">
                {
                    letters.map(letter => (
                        <div key={ letter.arabic } >
                            <button
                                className={ styles.letter }
                                onClick={ ()=>setPlayingLetterAudioPath(`/audio/letters/${letter.file}`) }
                            >
                                <div className={ styles.letterButton }>
                                    <div className={ styles.letterArabic }>{ letter.arabic }</div>
                                    <div className={ styles.letterName }>{ letter.name }</div>
                                </div>
                            </button>
                        </div>
                    ))
                }
            </div>
            {
                playingLetterAudioPath !== null &&
                <ReactHowler src={playingLetterAudioPath} />
            }
        </Layout>
    )
}

export { Alphabet }
