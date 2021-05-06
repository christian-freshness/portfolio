import React from "react";

export default function Portfolio() {
  return (
    <div className="container my-16">
      <h4 className="text-center mb-4 heading">Portfolio</h4>
      <h1 className="text-center mb-5">Check Out Some of My Works</h1>
      <div className=" mb-5">
        <div className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/2 md:order-1">
            <a href="https://github.com/christian-freshness/Dog-Breed-identification/blob/main/Dog_vision.ipynb" target="blank">
              <div className="portfolio portfolio1 shadow">
                <img src="images/dog-vision2.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 md:order-12 md:ml-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Dog Breed Identification</h4>
            <h5 className="mb-3">DEEP LEARNING CLASSIFICATION USING TENSORFLOW</h5>
            <p>
              This is a project i did which was a competiton hosted by {" "}
              <a href="https://www.kaggle.com/c/dog-breed-identification" target="/blank"> 
                <button className="btn2"> kaggle.</button>
              </a>.
              it involves using deep learning model to predict and determine the Breed
              of a dog in a picture, i made use of tensorflow and Keras, numpy, pandas and other libraries.
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 md:order-12"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/ML-projects/blob/main/HEART%20DISEASE%20CLASSIFICATION.ipynb" target="blank">
              <div className="portfolio portfolio2 shadow">
                <img src="images/heart-diseasease-full-analysis-saved-with-code2.png" width="100%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text text-md-right md:w-1/2 md:order-1 mr-12"
            data-wow-duration="0.7s"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Predicting Heart Disease using Machine Learning</h4>
            <h5 className="mb-3">MACHINE LEARNING CLASSIFICATION | SCIKIT LEARN</h5>
            <p>
              This is a personal project i did which entails the classification of heart Disease 
              (if a patient has heart disease or not). The project involves binary classification 
              (a sample can only be one of two things). Which involves using a number of different features 
              (pieces of information) about a person to predict whether they have heart disease or not.
              The data was gotten from  {" "}
              <a href="https://archive.ics.uci.edu/ml/datasets.php" target="/blank">
                <button className="btn2"> Cleveland Database </button>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className=" mb-5">
        <div className="flex mb-12 flex-col md:flex-row">
          <div
            className="w-full md:w-1/2"
            data-wow-duration="1s"
            data-wow-delay="0.6s"
          >
            <a href="https://github.com/christian-freshness/bulldozer-price-prediction-competition/blob/main/AUCTION%20SALE%20PRICE%20PREDICTION%20OF%20BULLDOZERS.ipynb" target="blank">
              <div className="portfolio portfolio3 shadow">
                <img src="images/bulldozer2.jpeg" width="90%"></img>
              </div>
            </a>
          </div>
          <div
            className="w-full portfolio-text md:w-1/2 wow fadeInUp md:ml-12"
            data-wow-duration="0.7"
            data-wow-delay="0.6s"
          >
            <h4 className="my-2">Blue Book for Bulldozers</h4>
            <h5 className="mb-3">MACHINE LEARNING REGRESSION | SCIKIT LEARN</h5>
            <p>
            This project entails predicting future auction sale price for a piece of heavy equipment 
            to create a "blue book" for bulldozers. The data and evaluation metrics used is 
            root mean squared log error (RMSLE), which was the instructions given on kaggle.
            The data was gotten from {" "}
              <a href="https://www.kaggle.com/c/bluebook-for-bulldozers/overview" target="/blank">
                <button className="btn2"> Kaggle. </button>
              </a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
