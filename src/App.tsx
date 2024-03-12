// import { createSignal } from 'solid-js'
// import solidLogo from './assets/solid.svg'
// import viteLogo from '/vite.svg'
import type { Component } from "solid-js";
// import { SearchInput } from './components/search'
// import MyComponent  from './components/animate';
// import TestForm from "./components/testForm";
import { CanvasLineChart } from "./components/chart";
import './App.css'

export const Greeting: Component<{name: string}> = (props) => {
  return(
    <p class=" text-[#000000] text-[1.5625rem] font-poppins font-medium">Hello {props.name}!</p>
  );
}

function App() {

  return (
    <div class="flex flex-col gap-[30px]">
      <div class="bg-[#ffffff] w-[364px] h-[180px] rounded-[10px] p-[18px]">
        <div class="pl-[2px] pl-[5px] flex text-[13px] gap-[12px] align-middle items-center">
          <span class="text-[#41475b] font-medium">Connect gross volume</span>
          <div class="bg-[#e3e8ee] text-[#41475b] font-medium px-[4px] rounded-[5px]">0.0%</div>
        </div>
        <div class="pl-[2px] pl-[5px] flex w-full justify-between items-center">
          <span class="text-[#1a2036] text-[16px] font-medium">$0.00</span>
          <span class="text-[#777f91] text-[13px] font-medium">$0.00</span>
        </div>
        <div class="h-[75%]">
          <CanvasLineChart xAxisData={[0,0]} xAxisLabels={["Nov 17","Today"]} beginAtZero={false}/>
        </div>
      </div>

      <div class="bg-[#ffffff] w-[364px] h-[180px] rounded-[10px] p-[18px]">
        <div class="pl-[2px] pl-[5px] flex text-[13px] gap-[12px] align-middle items-center">
          <span class="text-[#41475b] font-medium">Connect gross volume</span>
          <div class="bg-[#e3e8ee] text-[#41475b] font-medium px-[4px] rounded-[5px]">0.0%</div>
        </div>
        <div class="pl-[2px] pl-[5px] flex w-full justify-between items-center">
          <span class="text-[#1a2036] text-[16px] font-medium">$0.00</span>
          <span class="text-[#777f91] text-[13px] font-medium">$0.00</span>
        </div>
        <div class="h-[75%]">
          <CanvasLineChart xAxisData={[3,1]} xAxisLabels={["Nov 17","Today"]} beginAtZero={false}/>
        </div>
      </div>

      <div class="bg-[#ffffff] w-[364px] h-[180px] rounded-[10px] p-[18px]">
        <div class="pl-[2px] pl-[5px] flex text-[13px] gap-[12px] align-middle items-center">
          <span class="text-[#41475b] font-medium">Connect gross volume</span>
          <div class="bg-[#e3e8ee] text-[#41475b] font-medium px-[4px] rounded-[5px]">0.0%</div>
        </div>
        <div class="pl-[2px] pl-[5px] flex w-full justify-between items-center">
          <span class="text-[#1a2036] text-[16px] font-medium">$0.00</span>
          <span class="text-[#777f91] text-[13px] font-medium">$0.00</span>
        </div>
        <div class="h-[75%]">
          <CanvasLineChart xAxisData={[1,2]} xAxisLabels={["Nov 17","Today"]} beginAtZero={false}/>
        </div>
      </div>
      
    </div>
  )
}

export default App
