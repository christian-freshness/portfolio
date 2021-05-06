export default function Services() {
  return (
    <div id="services" className=" mt-5">
      <div className="container mb-16 px-4 pt-3">
        <h4 className="text-center heading">Services</h4>
        <h2 className="text-center">What Can I Do For You?</h2>
        <p className="text-center">SKILLS AND OFFER.</p>
      </div>
      <div className="container xl:px-24">
        <div className="flex flex-wrap justify-around">
          <div className="services-items shadow ">
            <img src="images/data analysis 3.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">DATA ANALYSIS</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              A very professional Data scientist familiar with Python, also with skills in exploratory data analysis(EDA).
            </p>
          </div>
          <div className="services-items shadow ">
            <img src="images/ml3.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">MACHINE LEARNING</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              I have a good experience in coding machine learning pipelines and algorithms.
            </p>
          </div>
          <div className="services-items shadow ">
            <img src="images/tensorflow2.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">TENSORFLOW</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              I have a good knowledge and experience using Tensorflow and its 
              important tools and libraries.
            </p>
          </div>
          <div
            className="services-items shadow "
            data-wow-duration="0.8"
            data-wow-delay="0.3s"
          >
            <img src="images/sklearn2.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">SCIKIT LEARN</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              I also come with sound knowledge and experience in scikit learn module and its
              various classification and regression algorithms.
            </p>
          </div>
          <div
            className="services-items shadow "
            data-wow-duration="0.8"
            data-wow-delay="0.3s"
          >
            <img src="images/django4.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">BACK-END DEV WITH DJANGO</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              i have a good knowledge and experience in Back-end developing using django.
            </p>
          </div>
          <div
            className="services-items shadow "
            data-wow-duration="0.8"
            data-wow-delay="0.3s"
          >
            <img src="images/Group.png" className="mb-4 mt-2"></img>
            <h4 className="mb-2">LEARNING CULTURE</h4>
            <div className="line mb-4"></div>
            <p className="text-center">
              I never settle for less. I'm always looking to learn new
              technologies and quickly too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
