import  React, { Component } from 'react';

class ThreeSection extends Component {
    render () {
        return (
            <section className="Three">
                <h2 className="h2three">Adipiscing amet consequat</h2>
                <hr/>
                <p className="pthree">Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                <div className="row">
                <div className="card col-lg-3 cardfirst">
                <img className="card-img-top" src="../img/pic1.jpg" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Magna feugiat lorem</h5>
                <p className="card-text">Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <a href="#" className="btn btncard">More</a>
                </div>
                </div>


                <div className="card col-lg-3">
                <img className="card-img-top" src="../img/pic2.jpg" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Magna feugiat lorem</h5>
                <p className="card-text">Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <a href="#" className="btn btncard ">More</a>
                </div>
                </div>


                <div className="card col-lg-3">
                <img className="card-img-top" src="../img/pic3.jpg" alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Magna feugiat lorem</h5>
                <p className="card-text">Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <a href="#" className="btn btncard ">More</a>
                </div>
                </div>
                </div>
            </section>
        )
    }
}
export default ThreeSection;