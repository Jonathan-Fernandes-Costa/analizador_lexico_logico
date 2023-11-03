/* eslint-disable react/no-unescaped-entities */
function Descricao() {
  const string = "<->"
  return (
    <div className="mt-3 p-5  w-100% text-lg flex flex-col text-star rounded-md font-bold bg-white shadow-md">
      <h2>Descrição: </h2>
      <p>Um analisador léxico, ou scanner, é um programa que implementa um autômato finito, reconhecendo (ou não) strings como símbolos válidos de uma linguagem.</p>
      <p>Esse analisador léxico serve para identificar <strong>operações lógicas</strong></p>
      <br />
      <h2>Dicionário:</h2>
      <p> + para OU</p>
      <p>* para AND</p>
      <p>True para Verdadeiro </p>
      <p>False para Falso</p>
      <p>-&gt; para Implica</p>
      <p>{string} para "Se e só se"</p>
      <p>  ¬ para "não"</p>
      <p>Comentário: //</p>
    </div>
  )
}

export default Descricao