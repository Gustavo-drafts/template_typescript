import { useEffect, useState } from 'react'
import style from './styles.module.css'

type UserType = {
  blog: string
  name: string
  avatar_url: string
}

export function UseEffect() {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(10)

  const [user, setUser] = useState<UserType>()

  // useEffect caso de uso - 1 

  /*
  useEffect(() => {
    console.table(`Renderizou useEffect`)
  })
*/

  // useEffect caso de uso (array de dependências) - 2 

  /*
  useEffect(() => {
    console.table(`Setou o 'count' para: ${count}`)
  }, [count])
*/

  // useEffect caso de uso (array vazio) - 3 

  /*
  useEffect(() => {
    console.log(`Só renderiza uma vez (Repete)`)
  }, [])
*/

  // useEffect caso de uso (clean up function) - 4 

  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`o state foi alterado ${count} vezes(Parou !)`)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [count])
*/

  // useEffect OBTENDO DADOS DE API - 5 

  useEffect(() => {
    fetch('http://api.github.com/users/gutoo01')
      .then((res) => res.json())
      .then((json) => setUser(json))
  }, []);

  return (
    <div className={style.container}>
      <strong>Test useEffect</strong>
      <div className={style.content}>

        <div className={style.renderizer}>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Renderizar
          </button>
          <p>{count}</p>
        </div>

        <div className={style.renderizer}>
          <button onClick={() => setCountB((prevCount) => prevCount + 1)}>
            Renderizar B
          </button>
          <p>{countB}</p>
        </div>
        {user && (
          <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} />
            <p>{user.blog}</p>
          </div>
        )}
      </div>

    </div>
  )
}