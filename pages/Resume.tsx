import React from "react";

export default function Resume() {
  return (
    <div className="container-fluid my-16">
      <h4 className="heading text-center">Resume</h4>
      <h2 className="text-center mb-12">My Credentials</h2>
      <p className="text-center">
        Here are detailed information about my credentials and my current and
        past work experience.
      </p>
      <div id="experience">
        <h3 className="heading text-center mb-4">Work Experience</h3>
        <div className="experience-holder">
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Data Scientist</h4>
              <p>Jan 2020-present</p>
            </div>
            <div className="exp-middle">
              <img src="images/bi_briefcase.png" />
            </div>
            <div className="exp-right">
              <h4>SELF TAUGHT</h4>
              <div className="line mb-4"></div>
              <p>
                I ventured into the dimension of Data Science shortly after
                starting my national youth Service. I've used alot of online
                resources and hands on projects to be the Data scientist/backend developer
                i am today. Some of the resources are: ZerotoMastery, Hamoye Ai,
                W3schools, Youtube videos, Udemy Courses etc.
              </p>
            </div>
          </div>
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Hamoye Ai Intern</h4>
              <p>June 2020 - Dec 2020</p>
            </div>
            <div className="exp-middle">
              <img src="images/bi_briefcase.png" />
            </div>
            <div className="exp-right">
              <h4>Hamoye Ai</h4>
              <div className="line mb-4"></div>
              <p>
                Six months on a rigorous, fast paced and project based
                internship to improve on existing skills and learn more. I developed
                and worked on several data and machine learning models.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="experience">
        <h3 className="text-center heading mb-4">Education</h3>
        <div className="experience-holder">
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Bachelor Degree</h4>
              <p>September 2013-October 2018</p>
            </div>
            <div className="exp-middle">
              <img src="images/fa-solid_graduation-cap.png" />
            </div>
            <div className="exp-right">
              <h4>University of Benin.</h4>
              <div className="line mb-4"></div>
              <p>Bachelor in Engineering (B.Eng) Petroleum Engineering.</p>
            </div>
          </div>
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Introduction to Python for Machine Learning</h4>
              <p>july 2020</p>
            </div>
            <div className="exp-middle">
              <img src="images/fa-solid_graduation-cap.png" />
            </div>
            <div className="exp-right">
              <h4>Hamoye.com</h4>
              <div className="line mb-4"></div>
              <p>
                You can view the certificate{" "}
                <a
                  target="blank"
                  href="/certificate-CHRISTIAN+AJULOR-Introduction+to+Python+for+Machine+Learning.pdf"
                >
                  here.
                </a>{" "}
                I learnt about the integral basics of Python
              </p>
            </div>
          </div>
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Machine Learning: Regression - Predicting Energy Efficiency of Buildings</h4>
              <p>August 2020</p>
            </div>
            <div className="exp-middle">
              <img src="images/fa-solid_graduation-cap.png" />
            </div>
            <div className="exp-right">
              <h4>Hamoye.com</h4>
              <div className="line mb-4"></div>
              <p>
                In this course, i developed a multivariate multiple regression model to study the 
                effect of eight input variables on two output variables, which are the heating load 
                and the cooling load, of residential buildings.{" "}
                <a
                  target="blank"
                  href="/certificate-CHRISTIAN+AJULOR-Machine+Learning_+Regression+-+Predicting+Energy+Efficiency+of+Buildings.pdf"
                >
                  here
                </a>
              </p>
            </div>
          </div>
          <div className="exp-item container">
            <div className="exp-left">
              <h4>Machine Learning: Classification - Managing the Quality Metric of Global Ecological Footprint</h4>
              <p>August 2020</p>
            </div>
            <div className="exp-middle">
              <img src="images/fa-solid_graduation-cap.png" />
            </div>
            <div className="exp-right">
              <h4>Hamoye.com</h4>
              <div className="line mb-4"></div>
              <p>
                In this course, i used the data to classify and predict the quality metrics (qascore) 
                of the ecological footprint data for the different countries. This data includes total 
                and per capita national biocapacity, the ecological footprint of consumption, the ecological 
                footprint of production and total area in hectares.{" "}
                <a
                  target="blank"
                  href="/certificate-CHRISTIAN+AJULOR-Machine+Learning_+Classification+-+Managing+the+Quality+Metric+of+Global+Ecological+Footprint.pdf"
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
