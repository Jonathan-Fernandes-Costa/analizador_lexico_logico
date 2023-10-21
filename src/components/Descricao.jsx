function Descricao() {
  return (
    <div className="mt-3 p-5  w-100% text-lg flex flex-col text-star rounded-md font-bold bg-white shadow-md">
        <h2>Descrição: </h2>
        <p>Um analisador léxico, ou scanner, é um programa que implementa um autômato finito, reconhecendo (ou não) strings como símbolos válidos de uma linguagem.</p>
        <p>Esse analisador léxico serve para identificar <strong>operações lógicas</strong></p>
        <br/>
        <h2>Dicionário:</h2>
        <p>AND: ^ OR: v  NOT: !</p>
        <p>TRUE: True, FALSE: False</p>
        <p>Comentário: //</p>
    </div>
  )
}

export default Descricao