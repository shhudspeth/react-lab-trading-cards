"use strict";

function Homepage() {
  return (
    
    <div>
      <h4> Welcome to our Trading Cards Website</h4>
      <a href="/cards"> Check out my Cards! </a> <br></br>
      <img src="/static/img/balloonicorn.jpg" href="/cards"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
