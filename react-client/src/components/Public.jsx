import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ScrollToHashElement from "./ScrollToHashElement"

// function Public() {
//   return (
//     <>
//       <Helmet>
//         <link rel="stylesheet" href="./styles/public.css" />
//         <title>Welcome to TicTechGo</title>
//       </Helmet>
//       <div className="public">
//         <header>
//           <h1>
//             <span>TicTechGo</span>
//             <p>Workflow Management Software</p>
//           </h1>

//           <div className="header-links">
//             <button className="btn btn-warning">
//               <Link className="header-link" to="/#learn-more">
//                 Learn More
//               </Link>
//             </button>

//             <button className="btn btn-secondary">
//               <Link className="header-link" to="/login">
//                 Login
//               </Link>
//             </button>
//           </div>
//         </header>

//         <section className="scroll-container">

//           <article className="public__top">
//             <h2 className="public-headline">Headquartered in Seattle</h2>
//             <p>
//               On the shores of Puget Sound and tucked between the Olympic &
//               Cascade mountain ranges, TicTechGo provides a one stop shop for
//               all your workflow management needs.
//             </p>

//             <p>
//               Whether your business is a small snowboard shop or an
//               enterprise-level boat repair service, TicTechGo is here to help
//               your business efficiently delegate and manage crucial tasks.
//             </p>
//           </article>
//         </section> {/* Scroll container */}

        // <Link to="/#learn-more">
        //   <footer className="next-page">
        //     <FontAwesomeIcon icon={faChevronDown} />
        //   </footer>
        // </Link>

//         {/* Learn more chevron at bottom of page pointing down to next section */}

//         {/* <section className="cta">
//           <form action="" className="cta-form">
//             <h2>Get Started</h2>
//             <p>Contact us for a quote</p>
//             <label htmlFor="firstName">First Name: </label>
//             <input type="text" name="firstName" />
//           </form>
//         </section> */}

//         {/* <footer>
//           <Link to="/login">Login</Link>
//         </footer> */}
//       </div>
//     </>
//   );
// }

// export default Public;

const Public = () => {
  const { pathname } = useLocation()
  const content = (
    <>
      <Helmet>
        <link rel="stylesheet" href="./styles/public.css" />
        <title>Welcome to TicTechGo</title>
      </Helmet>
      <ScrollToHashElement />
      <div className="content-container">
        <section className="top" id="home">
          <article className="public__top">
            <h2 className="public-headline">Headquartered in Seattle</h2>
            <p>
              On the shores of Puget Sound and tucked between the Olympic &
              Cascade mountain ranges, TicTechGo provides a one stop shop for
              all your workflow management needs.
            </p>

<<<<<<< HEAD
          <p>
            Whether your business is a small ski/snowboard shop or a large
            enterprise repair service, TicTechGo is here to help you efficiently
            delegate and manage tasks crucial to operational productivity.
          </p>
        </main>
      </section>
=======
            <p>
              Whether your business is a small snowboard shop or an
              enterprise-level boat repair service, TicTechGo is here to help
              your business efficiently delegate and manage crucial tasks.
            </p>
          </article>
          {
            pathname !== '/#learn-more' ?
              <Link to="/#learn-more">
                <footer className="next-page">
                  <FontAwesomeIcon icon={faChevronDown} />
                </footer>
              </Link>
              : null
          }

        </section>
        <section className="bottom" id='learn-more'>
          <h1>Page Two</h1>
        </section>
      </div>
>>>>>>> 56e70c9416a49cf5f1a392b88e2e8d112520af23
    </>
  );
  return content;
};

export default Public;
