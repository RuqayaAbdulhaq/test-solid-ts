import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import type { Component, JSX } from "solid-js";
// import { SearchInput } from './components/search'
// import MyComponent  from './components/animate';
import TestForm from "./components/testForm";
import './App.css'

export const Greeting: Component<{name: string}> = (props) => {
  return(
    <p class=" text-[#000000] text-[1.5625rem] font-poppins font-medium">Hello {props.name}!</p>
  );
}

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      {/* <SearchInput placeholder='Search'/>
      <Greeting name='Rouqaya'/> */}
      <TestForm/>
    </>
  )
}

export default App
