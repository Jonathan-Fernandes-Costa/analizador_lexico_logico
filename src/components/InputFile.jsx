/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
function InputFile(props) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        if (props.handle) {
            props.handle(selectedFile);
        }
    }

    const removeFile = () => {
        setFile(null);
        if (props.handle) {
            props.handle(null);
        }
    }

    return (
        <div className="ml-5 flex flex-col mt-10 text-lg p-4 w-1/2 rounded-md font-bold bg-white shadow-md">
            <label>Ou selecione um arquivo (.txt):</label>
            {!file && (
                <div className='mt-4 custom-file-upload sm:w-auto md:w-2/3 lg:w-2/4'>
                    <label htmlFor="fileInput">
                        Adicionar Arquivo
                    </label>
                </div>
            )}
            <div className='flex'>
                <input id="fileInput" type="file" accept=".txt" className="hidden mt-2" onChange={handleFileChange} />
                {file && (
                    <div className="mt-2 flex items-center">
                        <span>{file.name}</span>
                        <button onClick={removeFile} className="ml-2 px-4 py-1 rounded bg-red-500 text-white">
                            <AiOutlineCloseCircle />
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}

export default InputFile;