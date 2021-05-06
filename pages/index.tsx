import Layout from "../components/Layout";
// import { motion } from "framer-motion";
import Link from "next/link";

const IndexPage = () => (
  <Layout title="Christian">
    <div className="mainn">
      <div className="hero-text ">
        <h4
          className="text-center"
          data-wow-duration="0.5"
          data-wow-delay="0.6s"
        >
          Hello
        </h4>
        <h1
          className="text-center element mb-3 px-3"
          data-wow-duration="0.5"
          data-wow-delay="1.2s"
        >
          I’m Christian
        </h1>
        <p
          className="text-center front mb-2 "
          data-wow-duration="0.5"
          data-wow-delay="1.2s"
        >
          Data Scientist & Backend Engineer
        </p>
        <div className=" text-center mt-2 mb-5 ">
          <button
            className="btn more"
            style={{ background: "transparent", height: "50px" }}
          >
            <Link href="/About">
              <a>MORE ABOUT ME</a>
            </Link>
          </button>
        </div>
      </div>
      <div className="flex absolute left-1/2 transform -translate-x-1/2 icon-holder text-center">
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
  </Layout>
);

export default IndexPage;
