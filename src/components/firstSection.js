import React, { Component } from 'react';
import img from '../img/sitereact.jpg'

class FirstSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-11 col-sm-11 col-md-11 col-lg-5 offset-1 mt-5 mb-5">
                    <h2 className='mt-5'>Lorem ipsum dolor adipiscing <br/>
								amet dolor consequat</h2>
                                <p className='mt-3 txtfirst'>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing.
                                A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non.
                                Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                </div>
                <div className="offset-1 col-11 col-sm-11 col-md-11 col-lg-5 mb-5 mt-5 text-center">
                <img className='img-fluid mt-5 ' src={img} alt=""/>
                </div>
            </div>
        );
    }
}

export default FirstSection;