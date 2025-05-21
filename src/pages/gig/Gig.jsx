import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
 
function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs"></span>
          <h1>I can teach you WebDev in 6 weeks.</h1>
          <div className="user">
            <img
              className="pp"
              src="https://i.postimg.cc/vZprf9Fg/1.png"
              alt=""
            />
            <span>Tarun Singhal</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>65</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://i.postimg.cc/nhQ7FzjH/2.png"
              alt=""
            />
            <img
              src="https://i.postimg.cc/d02yCxjp/3.png"
              alt=""
            />
            <img
              src="https://i.postimg.cc/63BGffH3/4.png"
              alt=""
            />
          </Slider>
          <h2>About Me and My Work</h2>
          <p>
          As a dedicated web developer, I specialize in creating dynamic and user-friendly websites that meet clients' needs and enhance their online presence. With expertise in front-end technologies like HTML, CSS, and JavaScript, as well as back-end skills in languages such as Java, I build and maintain robust web applications. My approach combines technical proficiency with a keen eye for design, ensuring responsive and visually appealing solutions. I am adept at leveraging modern frameworks and tools to streamline development processes and deliver high-quality results. Passionate about staying current with industry trends, I am committed to continuous learning and delivering innovative web solutions that drive user engagement and satisfaction.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://i.postimg.cc/vZprf9Fg/1.png"
                alt=""
              />
              <div className="info">
                <span>Tarun Singhal</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>65</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Delhi</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Nov 2021</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">2 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">2 days ago</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>I am Tarun and 
             I specialize in creating dynamic and user-friendly websites that meet clients' needs and enhance their online presence. 
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://i.postimg.cc/YqQGZPJ9/5.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Manav</span>
                  <div className="country">
                    <img
                      src="https://i.postimg.cc/nLSCqfQd/6.png"
                      alt=""
                    />
                    <span>Pondicherry</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>1</span>
              </div>
              <p>
              Purchased this awesome course and can surely assure you, it's worth! All the core concepts are taught well and regular exercises brings on hands-on mastery in the topics.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://i.postimg.cc/y8dKcgXH/7.png"
                  alt=""
                />
                <div className="info">
                  <span>Rajat Singh</span>
                  <div className="country">
                    <img
                      src="https://i.postimg.cc/nLSCqfQd/6.png"
                      alt=""
                    />
                    <span>Delhi</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>9</span>
              </div>
              <p>
              Great course! The instruction covers all the essential concepts in great detail, and the consistent practice exercises are instrumental in mastering the material. If you're looking for a well-rounded educational experience with plenty of practical application, this course delivers on both fronts.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://i.postimg.cc/XvB01Rz1/8.png"
                  alt=""
                />
                <div className="info">
                  <span>Garbhit Sharma</span>
                  <div className="country">
                    <img
                      src="https://i.postimg.cc/nLSCqfQd/6.png"
                      alt=""
                    />
                    <span>Uttar Pradesh</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              Pretty well-rounded course, offers everything required in the real world scenario and the exercises ensure that you learn and memorize every single concept.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Course Price</h3>
            <h2>Rs.4500</h2>
          </div>
          <p>
          I will build and maintain robust web applications on the description you will give me.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>Instant Delivery</span>
            </div>
            <div className="item">
           
             
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Robust Sites</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Threat protection</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>No plagiarism</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Unique UI</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
