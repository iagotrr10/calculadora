import { useState } from "react"
//hook do react para mudanças de estado
import "./style.scss"

export default function App(){
  //VARIAVEL DE ESTADO
  //primeiroValor é a varial de estado
  //setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] =useState();
  const [segundoValor, setSegundoValor] =useState();

  //arrow function () => {}
    //função especial
  const capturandoPrimeiroValor = (e) => {
    setSegundoValor(Number(e.target.value))
  }

  const capturandoSegundoValor  = (e) => {
    setSegundoValor(Number(e.targaet.value))
  }
  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="Insira um número" />
      <input onChange={capturandoSegundoValor} type="number" placeholder="Insira um número" />

      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}