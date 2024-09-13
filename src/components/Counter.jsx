import { useState } from "react"



function Counter() {

    const [counter, setCounter] = useState(10)

    const counterPlus = () => {
        setCounter(counter + 1)
    }
    const counterMinus = () => {
        setCounter(counter - 1)
    }

  return (
    <>
    <div className="bg-slate-200 w-full py-12 rounded-lg my-6">
        <div className="w-full"> 
            <span className="text-2xl block font-medium uppercase py-2">Conter One </span>
            <span className="text-black text-3xl font-bold"> {counter} </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 py-2 mt-6">
            <button onClick={counterPlus} className="text-2xl pb-2 pt-1 px-6 bg-green-400 text-white rounded-md transition-colors duration-300 hover:bg-green-800">Counter + </button>
            <button onClick={counterMinus} className="text-2xl pb-2 pt-1 px-6 bg-green-400 text-white rounded-md transition-colors duration-300 hover:bg-green-800">Counter - </button>
        </div>
    </div>
    </>
  )
}

export default Counter