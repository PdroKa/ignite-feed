import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'
//aauthor:{avatar_url:"", name:"", role:""}

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Kauan",
        role: "Assistente de TI"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design / doctorcare' },
      ],
      publishedAt: new Date('2025-03-24 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/pdroka.png",
        name: "Reis",
        role: "Assistente de TI"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design / doctorcare' },
      ],
      publishedAt: new Date('2025-03-25 08:00:00')
    }
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

