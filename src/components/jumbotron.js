import React, { Component } from 'react';


class Jumbo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">

                <div className="col-12 bgimg">
                <span className="icon solid major fas fa-4x fa-cloud mb-4"></span>
                    <h1 className='mb-4'>Projet reproduire a l'identique<br/>
                    un template HTML5 !
                    </h1>
                    <p className='mb-4'>Accumsan feugiat mi commodo erat lorem ipsum, sed magna <br/>
lobortis feugiat sapien sed etiam volutpat accumsan.</p>
<ul className="action special">
    <li>
    <a href="#one" className="button scrolly mt-5">Discover</a>
    </li>
</ul>
            </div>
            </div>
        );
    }
}

export default Jumbo;