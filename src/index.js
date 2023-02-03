import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class GameShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mine: '',
      user: ''
    };
    this.HandleGun = this.HandleGun.bind(this);
    this.HandleSnake = this.HandleSnake.bind(this);
    this.HandleWater = this.HandleWater.bind(this);
  };
  HandleSnake(){
    let random = Math.floor(Math.random()* 3);
    let swg = ["Snake", "Water", "Gun"][random];
    this.setState({ mine: swg});
    if(swg === "Snake"){
      this.setState({user: 'LOL 2 snakes match is tie'})
    }
    else if(swg=== "Water"){
      this.setState({user: 'You won against my water'})
    }
    else if(swg=== "Gun"){
      this.setState({user: 'You lose, mine is Gun'})
    }
  };
  HandleWater(){
    let random = Math.floor(Math.random()* 3);
    let swg = ["Snake", "Water", "Gun"][random];
    this.setState({ mine: swg});
    if(swg === "Water"){
      this.setState({user: "LOL same(water-water) match is tie"}) 
     }
     else if(swg === "Gun"){
      this.setState({user: "You won against my gun"})
     }
     else if(swg === "Snake"){
      this.setState({user: "You lose, mine is snake"}) 
     }
  };
  HandleGun(){
    let random = Math.floor(Math.random()* 3);
    let swg = ["Snake", "Water", "Gun"][random];
    this.setState({ mine: swg});
    if(swg === "Gun"){
      this.setState({user:"LOL 2 Guns match is tie"})
     }
     else if(swg === "Snake"){
      this.setState({user:"You won the snake is down"})
     }
     else if(swg === "Water"){
      this.setState({user:"You lose, mine is water"})
     }
  };
  render(){
    return(
      <div className="container">
      <h3>Snake Water Gun </h3>
      <p> 
          <p> Abhishek :
          <span id="comp">{this.state.mine}</span></p>
          <p>V/S</p>
          <p><i id="name">{this.props.name}:</i><span id="user">{this.state.user}</span></p>
      </p>
      <span id="result"></span>
      <p className="container2">
          <button className="btn" onClick={this.HandleSnake}>Snake</button>
          <button className="btn" onClick={this.HandleWater}>Water</button>
          <button className="btn" onClick={this.HandleGun}>Gun</button>
      </p>
  </div>
    )
  };
};
class App extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    return(
      <>
        <GameShow name ={User}/>
      </>
    )
  }
}
let User = prompt("what's your name?");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
