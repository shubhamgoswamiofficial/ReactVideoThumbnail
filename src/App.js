import React, { Component } from 'react';
import './App.css';

class App extends Component {


videoUpload(event){

var reader = new FileReader();
reader.onload = function () {
    var output = document.getElementById('video');
    output.src = reader.result;
};
reader.readAsDataURL(event.target.files[0]);
}



  render() {
    return (
      <div className="App">
      <center>
        <header className="App-header">


<input id="abc" type="file"  onChange={(event)=>this.videoUpload(event)}/>
<video id="video" width="520" height="440" ></video>


        </header>
        </center>

      </div>
    );
  }
}

export default App;
