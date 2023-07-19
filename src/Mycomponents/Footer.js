import React from 'react'

export const Footer = () => {
  let footerstyle = {
    position: "absolute",
    top : "150vh",
    width: "100%",
    border : "5px solid red"
  }
  return (

    <footer className='bg-dark text-light py-3' style={footerstyle}>
      <p className = "text-center">
      copyright &copy; MyTodolist.com
      </p>
    </footer>
  )
}
