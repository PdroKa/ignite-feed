import { PencilLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=40&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src='https://github.com/diego3g.png' />

                <strong>Kauan Reis</strong>
                <span> Web developer</span>
            </div>

            <footer>

                <a href="#">
                    <PencilLine width={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}