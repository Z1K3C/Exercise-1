import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faComment , faEnvelope, faServer, faUpload, faBolt, faExclamationTriangle, faShoppingCart, faMoneyBillAlt, faBell} from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

class Test5 extends Component {
  render() {
    return (
      <div className="card p-3 flex-fill">

        <section className="card">
          <div className="card-header px-2 py-0">

            <section className="row align-items-center justify-content-between">
              <div className="col-9">
                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                {" Notification Panel"}
              </div>
              <div className="col-3 text-right">
                <button className="btn"><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></button>
              </div>
            </section>

          </div>

          <div className="card-body " style={{minHeight: '40vh'}}>
            
            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                  {" New Comments"}
                </div>
                <div className="col-5 text-right">
                  {"4 minutes ago"}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  {" 3 New followers"}
                </div>
                <div className="col-5 text-right">
                  {"12 minutes ago"}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  {" Message sent"}
                </div>
                <div className="col-5 text-right">
                  {"27 minutes ago"}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
                  {" New task"}
                </div>
                <div className="col-5 text-right">
                  {"43 minutes ago"}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                  {" Server Rebooted"}
                </div>
                <div className="col-5 text-right">
                  {"11:32 a.m."}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
                  {" Server Crashed!"}
                </div>
                <div className="col-5 text-right">
                  {"11:13 a.m."}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-8 pl-2">
                  <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                  {" Server not responding"}
                </div>
                <div className="col-4 text-right">
                  {"10:57 a.m."}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  {" New order placed"}
                </div>
                <div className="col-5 text-right">
                  {" 9:49 a.m."}
                </div>               
              </div>
            </section>

            <section className="card container-fluid py-2">
              <div className="row justify-content-between">
                <div className="col-7 pl-2">
                  <FontAwesomeIcon icon={faMoneyBillAlt}></FontAwesomeIcon>
                  {" Payment Received"}
                </div>
                <div className="col-5 text-right">
                  {"Yesterday"}
                </div>               
              </div>
            </section>

          </div>

          <div className="card-footer">

            <section className="row">
                <div className="col-12 d-flex flex-column ">
                  <button className="btn btn-secondary flex-fill">View all alerts</button>
                </div>
              </section>
          
          </div>

        </section>



      </div>
     );
  }
}

export default Test5;
