/* eslint-disable react/prop-types */
import '../index.css'
function Button(props) {
  return (
    <div className="mt-3 mb-3 text-lg inline-flex text-center rounded-md font-bold bg-white shadow-md">
        <button className='rainbow-text p-5' onClick={props.handle}>Analisar</button>
    </div>
  )
}

export default Button