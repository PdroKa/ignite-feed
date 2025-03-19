import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Kauan Reis"
            content="Antes superava o pecado pela graça, agora preciso superar o pecado pela raça"
          />
          <Post
            author="Isabela"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa, esse delectus quam necessitatibus aliquam, quaerat animi cum labore alias doloribus quas corporis unde nulla a ducimus deserunt dolorum repudiandae!"
          />
        </main>
      </div>
    </div>
  )
}

