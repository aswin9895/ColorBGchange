import './App.css'
import myStyle from './btn.module.css'



function App() {
// js code
function color(clr){
  document.body.style.backgroundColor=clr
}


  return (
    // jsx code
    <>
      <h1 className='text-center text-dark fw-bolder mt-5'>Background Color Change</h1>
      <div className={myStyle.divstyle}>
        <button onClick={()=>color("red")} className={myStyle.redbtn}></button>
        <button onClick={()=>color("yellow")} className={myStyle.yellowbtn}></button>
        <button onClick={()=>color("green")} className={myStyle.greenbtn}></button>
        <button onClick={()=>color("orange")} className={myStyle.orangebtn}></button>
        <button onClick={()=>color("lightblue")} className={myStyle.bluebtn}></button>
      </div>
    </>
  )
}

export default App
