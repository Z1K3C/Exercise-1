import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faBell, faServer} from '@fortawesome/free-solid-svg-icons'

class Test1 extends Component {
  render() {
    return (
      <div className="card" > 

        <section className="container-fluid p-0" >
          <div className="row align-items-center justify-content-end m-0" style={{minHeight: "10vh"}}>

            <div className="col-5 text-left">
              {"SB Admin GO AUTOMATION Edition"}
            </div>
              
            <div className="col-7 text-right px-3">

              <div className="btn-group">
                <button className="btn  dropdown-toggle">
                  <FontAwesomeIcon icon={faEnvelope} style={{color: 'black'}}></FontAwesomeIcon>
                </button>
                <button className="btn  dropdown-toggle">
                  <FontAwesomeIcon icon={faServer} style={{color: 'black'}}></FontAwesomeIcon>
                </button>
                <button className="btn  dropdown-toggle">
                  <FontAwesomeIcon icon={faBell} style={{color: 'black'}}></FontAwesomeIcon>
                </button>
                <button className="btn  dropdown-toggle">
                  <FontAwesomeIcon icon={faUser} style={{color: 'black'}}></FontAwesomeIcon>
                </button>
              </div>

             </div>
             
            
          </div>
        </section>





      </div>
     );
  }
}
/*
              <div className="col-1 text-right px-0">
                <button className="btn btn-secondary dropdown-toggle">PERRO</button>
              </div>
*/
export default Test1;