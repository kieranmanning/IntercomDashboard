import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

export function VerticalNavbar(): String {
    return (
        `&lt;nav className="navbar navbar-expand-lg navbar-light "&gt;
            &lt;ul className="navbar-nav d-flex flex-column"&gt;
                &lt;li className="nav-item"&gt;&lt;a className="nav-link" href="#"&gt;Dashboard&lt;/a&gt;&lt;/li&gt;
                &lt;li className="nav-item"&gt;&lt;a className="nav-link" href="#"&gt;My Courses&lt;/a&gt;&lt;/li&gt;
                &lt;li className="nav-item"&gt;&lt;a className="nav-link" href="#"&gt;Messages&lt;/a&gt;&lt;/li&gt;
                &lt;li className="nav-item"&gt;&lt;a className="nav-link" href="#"&gt;Reports&lt;/a&gt;&lt;/li&gt;
                &lt;li className="nav-item"&gt;&lt;a className="nav-link" href="#"&gt;Settings&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;`
    );
};

export default VerticalNavbar;