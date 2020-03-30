import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Test1 from './Test1.js';
import Test2 from './Test2.js';
import Test3 from './Test3.js';
import Test4 from './Test4.js';
import Test5 from './Test5.js';
import Test6 from './Test6.js';
import Test7 from './Test7.js';
import * as serviceWorker from './serviceWorker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <section className="row mx-0">
            <div className="col-12 px-0"> <Test1/> </div>
          </section>

          <section className="row mx-0">

            <div className="col-2 px-0 d-flex flex-column"> 
               <Test2/> 
            </div>

            <div className="col-10 px-0"> 
              <Test3/>        
              <section className="row mx-0 ">
                <div className="col-lg-8 px-0 d-flex flex-column"> <Test4/> </div>
                <div className="col-lg-4 px-0 d-flex flex-column"> <Test5/> </div>
              </section>
              <section className="row mx-0">
                <div className="col-4 px-0"> <Test6/> </div>
                <div className="col-8 px-0 "> <Test7/> </div>
              </section>  
            </div>

          </section>

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
