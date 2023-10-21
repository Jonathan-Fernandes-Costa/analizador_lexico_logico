/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function Analise(props) {
    const tokens = JSON.parse(props.result);
  
    return (
      <div className="mt-8 flex flex-wrap w-10/12 mx-auto bg-white shadow-md rounded-md p-3">
        {tokens && tokens.map((token, index) => (
          <div key={index} className="m-1 p-2 bg-gray-200 rounded-md">
            <strong>Token: </strong>'{token.token}' <strong> Lexema: </strong>'{token.value}'
          </div>
        ))}
      </div>
    )
  }
export default Analise