import { useState } from "react";
import Child from "./component/Child";
function App(){

  const [data , setData] = useState("Food is Awesome");
   
  return(
    <>
    <Child>
      <button >C</button>
      <h1>Deepanshu pandey</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates unde enim nostrum doloremque? Temporibus minima ipsam at natus, commodi quas, ipsum eaque et repellendus blanditiis, voluptatem illo enim. Consectetur aliquid molestias ratione possimus.</p>
    </Child>

    <Child>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque culpa, doloremque ipsa omnis, aspernatur libero nam eius earum explicabo magnam. Quo officiis ullam vel, sit temporibus reprehenderit molestias tempora.</p>
      </Child>

    <Child>
      <input type="text"  onChange={(e)=>{
        console.log(e.target.value);
        setData(e.target.value);

      }}/>
      <p>{data}</p>
      </Child>  
    </>


  );
}
export default App;