import React, { Component } from 'react';
import Table from '../components/Table';
class Packages extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      <Table />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Packages;