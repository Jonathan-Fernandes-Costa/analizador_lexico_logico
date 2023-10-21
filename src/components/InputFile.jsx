/* eslint-disable react/prop-types */
function InputFile(props) {
    return (
        <div className=" ml-5 flex flex-col mt-10 text-lg p-4 w-1/2 rounded-md font-bold bg-white shadow-md">
            <label>Ou selecione um arquivo (.txt):</label>
            <input className="mt-2" type="file" accept=".txt" onChange={props.handle} />
        </div>
    )
}

export default InputFile