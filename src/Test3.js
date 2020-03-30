import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faServer, faShoppingCart, faTools} from '@fortawesome/free-solid-svg-icons'

class Test3 extends Component {
  render() {
    return (
      <div className="card pb-3">
        
        <h3 className="m-4">Dashboard</h3>

        <section className="container-fluid">
          <div className="row justify-content-around">

            <div className="col-lg-3 col-sm-6 my-1">
              
              <section className="card bg-primary container-fluid">
                <div className="row">

                  <div className="col-3 p-2">
                    <FontAwesomeIcon icon={faComments} style={{fontSize: 50, color: 'white'}}></FontAwesomeIcon>
                  </div>
                  <div className="col-9 px-2 text-right">
                    <h1 className="" style={{color: 'white'}}>200</h1>
                    <div style={{fontSize: 12, color: 'white'}}> New Comments!</div>
                  </div>

                </div>
              </section>
              <section className="card bg-primary" style={{fontSize: 12, color: 'white'}}>View Details</section>
            </div>
            
            <div className="col-lg-3 col-sm-6 my-1">
              
              <section className="container-fluid card bg-success">
                <div className="row">

                  <div className="col-3 p-2">
                    <FontAwesomeIcon icon={faServer} style={{fontSize: 50, color: 'white'}}></FontAwesomeIcon>
                  </div>
                  <div className="col-9 px-2 text-right">
                    <h1 className="" style={{color: 'white'}}>200</h1>
                    <div style={{fontSize: 12, color: 'white'}}> New Tasks!</div>
                  </div>

                </div>
              </section>
              <section className="card bg-success" style={{fontSize: 12, color: 'white'}}>View Details</section>
            </div>
            
            <div className="col-lg-3 col-sm-6 my-1">
              
              <section className="container-fluid card bg-warning">
                <div className="row">

                  <div className="col-3 p-2">
                    <FontAwesomeIcon icon={faShoppingCart} style={{fontSize: 50, color: 'white'}}></FontAwesomeIcon>
                  </div>
                  <div className="col-9 px-2 text-right">
                    <h1 className="" style={{color: 'white'}}>200</h1>
                    <div style={{fontSize: 12, color: 'white'}}> New Orders!</div>
                  </div>

                </div>
              </section>
              <section className="card bg-warning" style={{fontSize: 12, color: 'white'}}>View Details</section>
            </div>
            
            <div className="col-lg-3 col-sm-6 my-1">
              
              <section className="container-fluid card bg-danger">
                <div className="row">

                  <div className="col-3 p-2">
                    <FontAwesomeIcon icon={faTools} style={{fontSize: 50, color: 'white'}}></FontAwesomeIcon>
                  </div>
                  <div className="col-9 px-2 text-right">
                    <h1 className="" style={{color: 'white'}}>200</h1>
                    <div style={{fontSize: 12, color: 'white'}}> Support Tickets!</div>
                  </div>

                </div>
              </section>
              <section className="card bg-danger" style={{fontSize: 12, color: 'white'}}>View Details</section>
            </div>
            
          </div>
        </section>




      </div>
     );
  }
}

export default Test3;
