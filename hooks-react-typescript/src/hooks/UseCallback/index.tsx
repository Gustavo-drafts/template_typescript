import React, { useCallback, useState } from 'react'
import styles from './styles.module.css'

export function UseCallback() {
  const [user, setUser] = useState({ name: '' })

  // function updateName() {
  //   setUser({ name: 'Juca' })
  // }
  // console.log(user)


  const updateName = useCallback(() => {

    // O retorno por padrão fica salvo na memória (cache)
    // setUser({ name: 'Juca - Salvo em Memória' })
    console.log(user)
  }, [user])



  return (
    <> 
      <h1>Praticando hook useCallback</h1>
      
      <button onClick={updateName}>Test</button>
    </>
  )
}