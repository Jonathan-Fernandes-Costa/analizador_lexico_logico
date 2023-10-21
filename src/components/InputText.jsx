/* eslint-disable react/prop-types */
function InputText(props) {
    return (
        <div className="flex flex-col mt-10 text-lg p-4 w-1/2 justify-center rounded-md font-bold bg-white shadow-md">

            <label className="w-100%">Digite o código a ser analisado:</label>
            <textarea className="bg-gray-400 rounded-md mt-2 text-white p-2"
                value={props.inputText}
                onChange={e => props.setInputText(e.target.value)}
            />

            
        </div>
    )
}

export default InputText