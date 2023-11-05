import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Public() {
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
            <button className="btn btn-warning">
              <Link className="header-link" to='/#learn-more'>Learn More</Link>
            </button>

            <button className="btn btn-secondary">
              <Link className="header-link" to='/login'>Login</Link>
            </button>
            
            
          </div>

        </header>
        <section className="public__top">
          <h2 className="public-headline">
            Headquartered in Seattle
          </h2>
          <p>
            On the shores of Puget Sound and tucked between the Olympic & 
            Cascade mountain ranges, 
            TicTechGo provides a one stop shop for all your
            workflow management needs.
          </p>

          <p>
            Whether your business is a small snowboard shop
            or an enterprise-level boat repair service,
            TicTechGo is here to help your business efficiently
            delegate and manage crucial tasks.
          </p>
        </section>
        <Link to='/#learn-more'>
          <footer className="next-page">
            <FontAwesomeIcon icon={faChevronDown} />
          </footer>
        </Link>
        
        
        {/* Learn more chevron at bottom of page pointing down to next section */}

        {/* <section className="cta">
          <form action="" className="cta-form">
            <h2>Get Started</h2>
            <p>Contact us for a quote</p>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" />
          </form>
        </section> */}

        {/* <footer>
          <Link to="/login">Login</Link>
        </footer> */}
      </div>
    </>
  );
}

export default Public;
