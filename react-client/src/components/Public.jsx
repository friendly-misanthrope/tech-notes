import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Public() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="./styles/public.css" />
        <title>Welcome to TicTechGo</title>
      </Helmet>
      <section className="public">
        <header>
          <h1>
            Welcome to <span>TicTechGo</span>
          </h1>
        </header>
        <main className="public__main">
          <h2 className="public-headline">
            Headquartered In Beautiful Seattle, WA
          </h2>
          <p>
            Tucked between the Olympic and Cascade mountain ranges on the shores
            of Puget Sound, TicTechGo provides a one-stop shop for all your
            workflow management needs.
          </p>

          <p>
            Whether your business is a small ski/snowboard shop or a large
            enterprise repair service, TicTechGo is here to help you efficiently
            delegate and manage tasks crucial to operational productivity.
          </p>
          {/* <address className='public__addr'>
          <p>TicTechGo</p>
          <p>4269 Foo Street</p>
          <p>Seattle, WA 98101</p>
          
          
          <a href="tel:+1206-555-4269">Phone</a>
          <a href="https://www.tictechgo.com">Website</a>
        </address> */}
        </main>
        <footer>
          <Link to="/login">Login</Link>
        </footer>
      </section>
    </>
  );
}

export default Public;
