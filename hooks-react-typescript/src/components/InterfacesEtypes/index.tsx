import { useState } from 'react'
import styles from './styles.module.css'


/**  TRABALHANDO COM INTERFACES
 * 

interface IAnimal {
  nome: string
  tipo: 'terrestre' | 'aquatico'
  animalRugir(volume: number): void
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  animalRugir: (volume) => (`${volume}`)
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
  animalRugir: (volume) => (`${volume}`)
}

animal.animalRugir(23)
felino.animalRugir(13)

*/


/** TRABALHANDO COM TYPE

 * /
interface PecasCarro {
  rodas: number
  tinta: string
  vidros?: 6 | 4
  motor: '2cv' | '4cv'  
}

interface PecasKombi extends PecasCarro {
  portas: 3 | 4 | 2
}

type Onibus = PecasCarro & PecasKombi


const SuperCarro: Onibus = {
  rodas: 8,
  tinta: 'vermelho',
  motor: '4cv',
  portas: 4,
}
console.log(SuperCarro)
*/


export function InterfacesEtypes() {


  return (
    <>
      <div className={styles.container}>

        <h1>Opa</h1>

          <input onChange={() => { }} />

        <button onClick={() => { }}>click-me</button>
      </div>
    </>
  )
}