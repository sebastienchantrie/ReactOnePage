import  React, { Component } from 'react';

class ThreeSection extends Component {
    render () {
        return (
            <section className="Three">
                <h2 class="h2three">Adipiscing amet consequat</h2>
                <hr/>
                <p className="pthree">Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                <div className="row">
                <div class="card col-lg-3 cardfirst">
                <img class="card-img-top" src="../img/pic1.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Magna feugiat lorem</h5>
                <p class="card-text">Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <a href="#" class="btn btncard">More</a>
                </div>
                </div>


                <div class="card col-lg-3">
                <img class="card-img-top" src="../img/pic2.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Magna feugiat lorem</h5>
                <p class="card-text">Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <a href="#" class="btn btncard ">More</a>
                </div>
                </div>


                <div class="card col-lg-3">
                <img class="card-img-top" src="../img/pic3.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Magna feugiat lorem</h5>
                <p class="card-text">Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                <a href="#" class="btn btncard ">More</a>
                </div>
                </div>
                </div>
            </section>
        )
    }
}
export default ThreeSection;