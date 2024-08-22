import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//run
// function MyApp(){
//         return (
//           <div>
//             <h1>CUSTOM APP!!</h1>
//           </div>
//         )
// }

// give errors
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   childern: 'Click me to Visit google'
// }

// variable 
const anotherUser = "React Study"
// syntax in react as below
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  anotherUser  // inject var at last
)

//run
// const anotherElement  = (
//   <a href = "https://google.com" target='_blank'>Visit google</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
 
  //MyApp()
  reactElement
  //anotherElement
  //<App/>
  
)
