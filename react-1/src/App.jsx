import { useState } from "react";
import './App.css';
function App() {
  const [counter,setCounter]=useState({
    Score: 76,
    Wicket: 2,
    Ball: 50,
    final:8.2
  })
  const handler=(value,type)=>{
    if(type==="o"){
      var run=counter.Score+value;
      if(run>100){
        const h1=document.createElement("h1");
        h1.textContent="India Won";
        h1.classList.add("status");
        const app=document.querySelector(".App");
        app.append(h1);
        return
        
      }
      setCounter({...counter,Score:run})
    }
    if(type==="f"){
      var run=counter.Score+value;
      if(run>101){
        const h1=document.createElement("h1");
        h1.textContent="India Won";
        h1.classList.add("status");
        const app=document.querySelector(".App");
        app.append(h1);
        return
        
      }
      setCounter({...counter,Score:counter.Score+value})
    }
    if(type==="s"){
      var run=counter.Score+value;
      if(run>101){
        const h1=document.createElement("h1");
        h1.textContent="India Won";
        h1.classList.add("status");
        const app=document.querySelector(".App");
        app.append(h1);
        return
        
      }
      setCounter({...counter,Score:counter.Score+value})
    }
    if(type==="w"){
      var run=counter.Score+value;
      if(run>101){
        
        return
        
      }
      var total =counter.Wicket+value
      if(total>12){
        total=12
      }
      setCounter({...counter,Wicket:total})
    }
    if(type==="b"){
      var run=counter.Score+value;
      if(run>101){
        return
        
      }
      const total=counter.Ball+value;
      var over=Math.floor(total/6);
      var ball=(total%6)/10;
      var final=over+ball
      console.log(over+ball)
      console.log(total)
      setCounter({...counter,Ball:total,final:final})
    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              counter.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              counter.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              counter.final

            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>handler(1,"o")}>Add 1</button>
        <button className="addScore4" onClick={()=>handler(4,"f")}>Add 4</button>
        <button className="addScore6" onClick={()=>handler(6,"s")}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button  onClick={()=>handler(1,"w")}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handler(1,"b")}>Add 1</button>
      </div>
            
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
