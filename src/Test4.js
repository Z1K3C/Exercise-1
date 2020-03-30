import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faEllipsisV} from '@fortawesome/free-solid-svg-icons'

class Test4 extends Component {
  render() {
    return (
      <div className="card p-3 flex-fill">
        
        <section className="card">
          <div className="card-header px-2 py-0">

            <section className="row align-items-center justify-content-between">
              <div className="col-9">
                <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                {" Area Chart Example"}
              </div>
              <div className="col-3 text-right">
                <button className="btn"><FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon></button>
              </div>
            </section>

          </div>

          <div className="card-body " style={{minHeight: '60vh'}}>
            GRAFICON
          </div>
          
        </section>

      </div>
     );
  }
}

export default Test4;
