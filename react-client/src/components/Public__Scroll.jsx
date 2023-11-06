import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Public__Scroll() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="./styles/public.css" />
        <title>Welcome to TicTechGo</title>
      </Helmet>
      
      <div className="public">
        <header>
          <h1>
            <span>TicTechGo</span>
            <p>Workflow Management Software</p>
          </h1>

          <div className="header-links">
            <button className="btn learn">
              <Link to='#' className="header-link">Learn More</Link>
            </button>
            <button className="btn login">
              <Link to='#' className="header-link">Login</Link>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Public__Scroll;
