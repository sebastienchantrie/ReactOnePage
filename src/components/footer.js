import  React ,{ Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <section className="footer">
                <ul className="icons row">
                    <li class="li-icons">
                        <a href="#" className="icon brands alt fab fa-twitter"></a>
                    </li>
                    <li class="li-icons">
                        <a href="#" className="icon brands alt  fab fa-facebook-f"></a>
                    </li>
                    <li class="li-icons">
                        <a href='#' className="icon brands alt fab fa-github"></a>
                    </li>
                    <li class="li-icons">
                        <a href="#" className="icon solid alt far fa-envelope"></a>
                    </li>
                </ul>
                <ul className="copyright row">
                    <li className="li-copyright">© Untitled</li>
                    <span className="li-copyright">|</span>
                    <li className="li-copyright">Design: 
                        <a className="li-link" href="http://html5up.net"> HTML5 UP</a>
                    </li>
                    <span className="li-copyright">|</span>
                    <li className="li-copyright">
                        Demo image:
                        <a className="li-link" href="http://unsplash.com"> unsplash</a>
                    </li>
                </ul>

            </section>
        )
    }
}

export default Footer;