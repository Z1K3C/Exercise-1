import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartBar, faTable, faEdit, faWrench, faSitemap, faClone} from '@fortawesome/free-solid-svg-icons'

class Test2 extends Component {
  render() {
    return (
      <div className="card flex-fill"> 

        <section className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex flex-column p-0">
                          
              <button className="btn btn-secondary rounded-0 flex-fill text-left" style={{backgroundColor: ""}}>
                <FontAwesomeIcon icon={faHome} style={{color: 'black'}}></FontAwesomeIcon>{" Dashboard"}
              </button>
              <button className="btn btn-secondary rounded-0 flex-fill text-left" style={{backgroundColor: ""}}>
                <FontAwesomeIcon icon={faChartBar} style={{color: 'black'}}></FontAwesomeIcon>{" Charts"}
              </button>
              <button className="btn btn-secondary rounded-0 flex-fill text-left" style={{backgroundColor: ""}}>
                <FontAwesomeIcon icon={faTable} style={{color: 'black'}}></FontAwesomeIcon>{" Tables"}
              </button>
              <button className="btn btn-secondary rounded-0 flex-fill text-left" style={{backgroundColor: ""}}>
                <FontAwesomeIcon icon={faEdit} style={{color: 'black'}}></FontAwesomeIcon>{" Forms"} 
              </button>
              <button className="btn btn-secondary rounded-0 flex-fill text-left" style={{backgroundColor: ""}}>
                <FontAwesomeIcon icon={faWrench} style={{color: 'black'}}></FontAwesomeIcon>{" UI Elements"}
              </button>
              <button className="btn btn-secondary rounded-0 flex-fill text-left" style={{backgroundColor: ""}}>
                <FontAwesomeIcon icon={faSitemap} style={{color: 'black'}}></FontAwesomeIcon>{" Multi-level Dropdown"}
              </button>
              <button className="btn btn-secondary rounded-0 flex-fill text-left" style={{backgroundColor: ""}}>
                <FontAwesomeIcon icon={faClone} style={{color: 'black'}}></FontAwesomeIcon>{" Sample Pages"}
              </button>

              
            </div>
            
          </div>
        </section>
              



      </div>
     );
  }
}

export default Test2;
