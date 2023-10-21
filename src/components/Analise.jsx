/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function Analise(props) {
    const result = props.result ? JSON.parse(props.result) : null;

    // Se o resultado for uma string, exiba como uma mensagem de erro
    if (typeof result === 'string') {
        return (
            <div className="mt-7 w-10/12 mx-auto bg-red-500 text-white shadow-md rounded-md p-3">
                Erro: {result}
            </div>
        );
    }

    // Se o resultado for um array, exiba os tokens
    if (Array.isArray(result)) {
        return (
            <div className="mt-7 flex flex-wrap w-10/12 mx-auto bg-white shadow-md rounded-md p-3">
                {result.map((token, index) => (
                    <div key={index} className="m-1 p-2 bg-gray-200 rounded-md">
                        <strong>Token: </strong>'{token.token}' <strong> Lexema: </strong>'{token.value}'
                    </div>
                ))}
            </div>
        );
    }

    // Se o resultado não for uma string nem um array, exiba uma mensagem padrão
    
}
export default Analise;
