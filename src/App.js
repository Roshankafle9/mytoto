
import { useState} from "react"



const App =()=>{
  const [number, setNumber] = useState(0);

  const incrementNumber =()=>{
    let updateNumber = number +1;
    setNumber(updateNumber);
    }

    const decrementNumber =()=>{
      if (number > 0){
      let updateNumber = number -1;
      setNumber(updateNumber);
    }
  }
    const resetNumber =()=>{
      let updateNumber = 0;
      setNumber(updateNumber);
    }

  return (
    <div className="counter_container">
      <h1> Counter App </h1>
      <p>{number}</p>
      <div className="buttons"> 
      <button onClick={incrementNumber}>increment</button>
      <button onClick={decrementNumber}>Decrement</button>
      <button onClick={resetNumber}>Reset</button>
      </div>
    </div>
  );
};


export default App;