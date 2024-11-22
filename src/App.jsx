import { useState } from "react"
//hook do react para mudanças de estado
import "./style.scss"

export default function App(){
  //VARIAVEL DE ESTADO
  //primeiroValor é a varial de estado
  //setPrimeiroValor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] =useState();
  const [segundoValor, setSegundoValor] =useState();
  const [resultado, setResultado] =useState();

  //arrow function () => {}
    //função especial
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value))
    console.log (e.target.value)
  }

  const capturandoSegundoValor  = (e) => {
    setSegundoValor(Number(e.target.value))
  }
  //função de soma
  const soma = () => {
    setResultado(primeiroValor + segundoValor)
  }
  //função de subtração
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor)
  }
  //função de divisão
  const divisao = () => {
    setResultado(primeiroValor / segundoValor)
  }
  //função de multiplicação
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor)
  }

  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="Insira um número" />
      <input onChange={capturandoSegundoValor} type="number" placeholder="Insira um número" />

      <div>
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={divisao}>÷</button>
        <button onClick={multiplicacao}>x</button>
      </div>
      <h3>{resultado}</h3>
    </main>
  )
}