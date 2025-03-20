import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/pdroka.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Kauan reis</strong>
                        <span>Web developer</span>
                    </div>
                    <time title='20 de Março de 2025' dateTime="Publicado: 2025-05-20 14:33:00">
                        Publicado ha 1h
                    </time>
                </div>
            </header>
            <div className={styles.content}>
                <p></p>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto </a>{" "}
                    <a href="#">#nlw</a>{" "}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    placeholder='Deixe um comentario'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

        </article>
    )
}