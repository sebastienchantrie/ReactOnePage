import  React, { Component } from 'react';

class FourSection extends Component {
    render () {
        return (
                <div className="jumbotron">
                    <h2 className="display-4 titlefour">Ipsum feugiat consequat?</h2>
                    <hr/>
                    <p>Sed lacus nascetur ac ante amet sapien.</p>
                    <p className="lead row">
                        <a className="btn btn-lg btnactive offset-4" href="#" role="button">Sign up</a>
                        <a className="btn btn-lg btnnormal" href="#" role="button">Learn more</a>
                    </p>
                </div>
        )
    }
}
export default FourSection;