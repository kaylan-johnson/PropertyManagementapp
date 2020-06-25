import React, { Component } from 'react';
import InfoBox from "../infoBox";

class SupportRequest extends Component {
    render() {
        return (
            <div>
                support request component
               <div>
                   <div>add request</div>
                   <div className="row">
                        <div className="col-md-3">
                             <InfoBox type="pending"/>
                             <InfoBox type="in-progress"/>
                             <InfoBox type="complete"/>
                        </div>
                        <div className="col-md-9">
                            support request content component-contains ul
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default SupportRequest;