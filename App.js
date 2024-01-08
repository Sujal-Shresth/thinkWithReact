// REACT 2 | CHECK N CHECK
const container1 = document.getElementById("react-container1");

ReactDOM.render("Hello! Welcome to React", container1);

// REACT 3 | IS IT A FUNCTION
const container2 = document.getElementById("react-container2");

function Container() {

  return React.createElement(
    `div`,
    null,
    `Hey Kalvians! Welcome to React Learning`,
    React.createElement(`div`, null, `Let's rock and roll`)
  );
}

ReactDOM.render(Container(), container2);

// REACT 4 | NOW IT'S CLASS TIME
const container3 = document.getElementById("react-container3");

class ReactContainer extends React.Component {
  render() {
    return React.createElement(
      `div`,
      null,
      `Hey Kalvians`,
      React.createElement(`div`, null, `Let's rock and roll with classes`)
    );
  }
}

ReactDOM.render(React.createElement(ReactContainer), container3);

// part II - Use JSX and babel compiler
const container4 = document.getElementById("react-container4");

class ReactContainer2 extends React.Component {
  render() {
    return (
      <div>
        Hello! Welcome to Kalvium
        <div>This is babel</div>
      </div>
    );
  }
}

// Direclty pass the component to render
ReactDOM.render(<ReactContainer2 />, container4);
