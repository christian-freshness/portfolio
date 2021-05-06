import React from "react";

export default function Contact() {
  return (
    <div>
      <div id="contact" className="pb-3 mt-16 pt-3">
        <div
          className="container mb-5 px-5 wow fadeInUp"
          data-wow-duration="0.5"
          data-wow-delay="0.3s"
        >
          <h4 className="text-center heading">Contact</h4>
          <h2 className="text-center">I'd Love To Hear From You.</h2>
          <p className="text-center">
            i'm always open to discussing about data science or partnership.
          </p>
        </div>
        <form
          className="container flex flex-col justify-center items-center px-5 wow fadeInUp mb-5"
          data-wow-duration="0.5"
          data-wow-delay="0.4s"
          action="mailto:christianajulor@gmail.com?subject=Getting in touch with christian from Website"
          method="post"
          encType="text/plain"
        >
          <input type="text" placeholder="Name" name="name" id="name"></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            id="subject"
          ></input>
          <textarea
            placeholder="Message"
            name="message"
            id="message"
          ></textarea>
          <button className="submit btn btn-block">Contact Me</button>
        </form>
      </div>
      <div className="reach-me container my-16">
        <div className="flex flex-wrap milestone-flex justify-between">
          <div
            className="reach-me-item wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <a
              href="https://wa.me/+2348134190172"
              target="blank"
              className="flex items-center justify-center flex-col"
            >
              <img
                src="images/whatsapp-logo-png-hd-2.png"
                width="50px"
                className="mb-4 mt-2"
              ></img>
              <p className="mb-2">WHATSAPP ME</p>
              <p>Click to send me a Whatsapp message</p>
            </a>
          </div>
          <div
            className="reach-me-item wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay="0.3s"
          >
            <a
              href="mailto:christianajulor@gmail.com?subject=Getting in touch with christian from Website"
              className="flex items-center justify-center flex-col"
            >
              <img src="images/carbon_email.png" className="mb-4 mt-2"></img>
              <p className="mb-2">EMAIL ME AT</p>
              <p className="text-center">Click to Email me</p>
            </a>
          </div>
          <div
            className="reach-me-item wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.3s"
          >
            <img src="images/ic_round-call.png" className="mb-4 mt-2"></img>
            <p className="mb-2">CALL ME AT</p>
            <p className="text-center">
              Phone: (+234) 8134190172 Mobile:(+234) 8134190172
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
