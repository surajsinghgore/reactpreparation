import React, { useContext } from 'react'
import { MyContext } from './context/ContextProvider'
export default function Home() {
    const { text, setText } = useContext(MyContext);
  return (
    <div>
   <form>
    <input type="text" placeholder='Change Active User Name' value={text} onChange={(e)=>setText(e.target.value)}/>
   </form>
    </div>
  )
}
