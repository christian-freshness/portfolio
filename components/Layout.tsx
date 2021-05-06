import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
// import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import {
  faHome,
  faEye,
  faAddressBook,
  faBriefcase,
  faUser,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const router = useRouter();

  const handlenav = () => {
    setClicked(!clicked);
  };

  return (
    <div className="overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/sf/sfDisplay.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <header className="w-full">
        <div className="nav-head">
          <div className="container">
            <nav className="flex items-center justify-between md:px-5 px-2 container">
              <div>
                <Link href="/">
                  <a className="Name logo">
                    A<span>C.</span>
                  </a>
                </Link>
              </div>

              <div className="big-nav">
                <ul className="md:flex" data-wow-duration="1s">
                  <li className="nav-item ml-4">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="nav-item ml-4">
                    <Link href="/About">About</Link>
                  </li>
                  <li className="nav-item ml-4">
                    <Link href="/Portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item ml-4">
                    <Link href="/Resume">Resume</Link>
                  </li>
                  <li className="nav-item ml-4">
                    <Link href="/Services">Service</Link>
                  </li>
                  <li className="nav-item ml-4">
                    <Link href="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <button className="md:hidden" onClick={handlenav}>
                <span className="hand">
                  {clicked ? (
                    <img src="images/icons8-delete-30.png"></img>
                  ) : (
                    <img src="images/hamburger.png"></img>
                  )}
                </span>
              </button>
            </nav>
            {clicked && (
              <div className="mobile-nav pb-2">
                <ul>
                  <li className="nav-item">
                    <Link href="/">
                      <FontAwesomeIcon icon={faHome} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/About">
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Portfolio">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Resume">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Services">
                      <FontAwesomeIcon icon={faTasks} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Contact">
                      <FontAwesomeIcon icon={faAddressBook} />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      {children}
      <footer className={`${router.pathname == "/" && "hidden"}`}>
        <div className="container mt-4">
          <div className="footer-flex">
            <div className="sm:order-12 w-1/2 sm:w-full">
              <div className="icon-holder1 flex">
                <a href="https://facebook.com/ajulor.christian" target="_blank">
                  <img src="images/bx_bxl-facebook.png"></img>
                </a>
                <a href="https://sandbox.com" target="_blank">
                  <img src="images/cib_codesandbox.png"></img>
                </a>
                <a href="https://github.com/christian-freshness" target="_blank">
                  <img src="images/ant-design_github-outlined.png"></img>
                </a>
                <a href="https://twitter.com/AjulorC" target="_blank">
                  <img src="images/ant-design_twitter-outlined.png"></img>
                </a>
                <a href="https://behance.com" target="_blank">
                  <img src="images/ant-design_behance-outlined.png"></img>
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-full sm:order-1 ">
              <p>
                <span>&copy; Ajulor Christian</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
