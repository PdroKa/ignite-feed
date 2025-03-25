import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Pdroka.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kauan Reis</strong>
                            <time title='20 de Março de 2025' dateTime="Publicado: 2025-05-20 14:33:00">
                                Cerca de 1h atras
                            </time>
                        </div>

                        <button title='Deletar commentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Conteudo do comentario</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}