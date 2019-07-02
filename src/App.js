import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';

function App() {
  return (      
      <div className="container">
        <div className="row">
          <div className="col-6">Column number one</div>
          <div className="col-6">
            <span>
              <i className="fa fa-home"/>
            </span>
          </div>
        </div>
      </div>
    );
}

export default App;
