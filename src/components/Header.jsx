import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/ContextProvider'

export default function Header() {
    const { text } = useContext(MyContext);

  return (
    <header>

     <Link to="/">{text}</Link>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
    </header>
  )
}
