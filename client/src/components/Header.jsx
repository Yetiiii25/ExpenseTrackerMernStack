import React from 'react'
import DarkMode from "../components/DarkMode";

function Header() {
  return (
    <div className="logo">
     <DarkMode />
    <h2>Expense Tracker</h2>
    </div>
  )
}

export default Header