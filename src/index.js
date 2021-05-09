import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//concept 1 
/*function Basic() {
  return( 
  <div>
    <h1>Hello world</h1>
    <p> this is done by ahha</p>
    <ul>q</ul>
    <ul>ewew</ul>
    </div>


  )
}

ReactDOM.render(<Basic />, document.getElementById('root')

)*/

//concept 2 
/*function name(user) {
  return( user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Fairuz',
  lastName: 'Humaira',
};
const element= <h1>hi,{name(user)}</h1>;

ReactDOM.render(element, document.getElementById('root')

) */
//concept 3

/*function tick(){
  const element = (
    <div>
      <h1>The time is {new Date().toLocateTimeString()}.</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);*/



//concept 4

/*function welcome(props) {
  return<h1>Hello, {props.name}</h1>;
}
ReactDOM.render(<welcome/>, document.getElementById('root'));*/

//concept 5
/*class Clock extends React.Component{
  render(){
    return(
      <div>
        <h1>hello</h1>
        <h2>It is 
          {this.props.date.toLocateTimeString()}
        </h2>
      </div>
    );
  }
}
function tick(){
  ReactDOM.render(
    <Clock date={new Date()} />, document.getElementById('root')
  );
}

setInterval(tick, 1000); */ 

//difficulty in understanding this concept with props and react.component

//concept 6
/*class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
); */

//concept 7


//concept 8
/*const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
*/

//concept 9
/*class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
*/

//concept 10

//concept 11
/*function Border(props) {
  return (
    <div className={'Border Border-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <Border color="pink">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </Border>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="helloooooo!" />
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
); */

//concept 12

