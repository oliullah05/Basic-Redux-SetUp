
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"


function App() {
  const {count} = useAppSelector((state)=>state.counter)
  const dispatch = useAppDispatch()
  return (

      <div className="flex justify-center items-center h-screen ">
      <button onClick={()=>dispatch(incrementByValue(5))} className="px-4 py-4 bg-green-500 rounded-lg mx-5">increment By 5</button>
      <button onClick={()=>dispatch(increment())} className="px-4 py-4 bg-green-500 rounded-lg mx-5">increment</button>
      <h1 className="text-3xl ">{count}</h1>
      <button onClick={()=>dispatch(decrement())} className="px-4 py-4 bg-green-500 rounded-lg mx-5">decrement</button>
    </div>
  )
}

export default App
