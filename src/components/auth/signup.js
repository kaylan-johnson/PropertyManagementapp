import React, { Component } from 'react';

import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';


class Signup extends Component {
    render() {
       return (
       <div>
           signup form
       </div>
       );
    }
}

export default addHeaderBorder(addTitle(Signup, 'Create Account')); 

