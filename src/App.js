// import "./css/style.css";
import './App.css';
import logo from "./images/logo_d.svg";
import agent1 from "./images/agent-1 (1).svg";
import agent2 from "./images/agent-2-seo.svg";
import agent3 from "./images/agent-2-buzz.svg";
import agent4 from "./images/agent-2-bid.svg";
import agent5 from "./images/agent-4-bg (1).svg";
import agent6 from "./images/agent-4-client-1.jpg";
import agent7 from "./images/agent-4-client-2.jpg";
import agent8 from "./images/agent-4-client-3.jpg";
import agent9 from "./images/agent-5-profile.jpg";
import agent10 from "./images/agent-5-videos.jpg";
import agent11 from "./images/agent-6.svg";
import agent12 from "./images/mb-9-homing.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          href="https://use.fontawesome.com/releases/v5.0.4/css/all.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
        ></link>
        <link rel="stylesheet" href="index.css" />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <header>
          <div className="header">
            {/* left */}
            <div className="header-left">
              <div className="btn-menu">
                <i class="bx bx-menu"></i>
              </div>
              <div className="logo">
                <a>
                  <img src={logo} />
                </a>
              </div>
              <div className="nav">
                <a>
                  <span>Buy</span>
                </a>
                <a>
                  <span>RENT</span>
                </a>
                <a>
                  <span>SELL</span>
                </a>
                <a>
                  <span>AGENTS</span>
                </a>
              </div>
              <div className="search-area">
                <div className="e_bc">
                  <input
                    type="text"
                    className="search__input"
                    placeholder="Address, City, Zip"
                  />
                  <button type="submit" className="search__btn">
                    <i className="fas fa-search search__icon"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="header-right">
              <div className="header-right-icon">
                <div className="icon-area">
                  <a className="header-right__icon market-boss">
                    <i className="bi bi-star-fill">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </i>
                  </a>
                  <a className="header-right__icon schedule-tour">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-house-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                        />
                      </svg>
                    </i>
                  </a>
                  <a className="header-right__icon messages">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chat-square-quote-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 0 1-.612.01.405.405 0 0 1-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 0 1-.613.01.405.405 0 0 1-.011-.59c.42-.416.672-.831.81-1.22z"
                        />
                      </svg>
                    </i>
                  </a>
                  <a className="header-right__icon notifications">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-bell-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                      </svg>
                    </i>
                  </a>
                  <a className="header-right__icon my-team">
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
              <div className="header-right-login">
                <div className="login-area">
                  <button className="btn btn-login">Log In</button>
                  <button className="btn btn-signup">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="firts-title " className="space__top">
          <div className="container">
            <div className="row">
              <div>
                <div className="firts-title__text">
                  <div className="top-title">
                    <h1>
                      Turn your
                      <strong>
                        &nbsp;‘Coming Soon’
                        <span className="text-under"></span>
                      </strong>
                      &nbsp;listings into lead magnets
                      <span className="text-under"></span>
                    </h1>
                    <p>Double-end more deals</p>
                    <p>Connect with more buyers</p>
                    <p>Get more listings</p>
                    <h5>
                      All ‘Coming Soon’ inquiries are delivered to you directly
                    </h5>
                    <button
                      type="button"
                      className="ant-btn button ant-btn-primary ant-btn-lg"
                    >
                      <span>Add your ‘Coming Soon’ listing</span>
                    </button>
                  </div>

                  <div className="firts-title__image">
                    <img src={agent1} alt="Top" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="benifit">
          <div className="container">
            <div className="row">
              <h2 className="text-center">
                Optimize the sale for your sellers
              </h2>
              <div className="benifit-icon">
                <div className="1" style={{ padding: "16px" }}>
                  <div>
                    <img src={agent2} alt="seo" />
                    <p>Gauge demand with powerful analytics</p>
                  </div>
                </div>
                <div className="2" style={{ padding: "16px" }}>
                  <div>
                    <img src={agent3} alt="buzz" />
                    <p>Generate buzz – Bring your listing to market, twice!</p>
                  </div>
                </div>
                <div className="3" style={{ padding: "16px" }}>
                  <div>
                    <img src={agent4} alt="buzz" />
                    <p>Best way to orchestrate a bidding war!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="premarket">
          <div className="container">
            <div className="off-set4">
              <div className="benifit__text">
                <h2>
                  <span className="rect-bg"></span>Add your ‘Coming Soon’
                  listing to
                  <strong>
                    &nbsp; Homing<span className="text-under"></span>
                  </strong>
                </h2>
              </div>
              <div className="benifit__step">
                <div className="step">
                  <span>1</span>
                  <p>
                    <b>Create a Homing account</b>
                  </p>
                  <a href="#">
                    <button
                      type="button"
                      className="ant-btn button ant-btn-primary"
                    >
                      Create an account
                    </button>
                  </a>
                </div>
                <div className="step">
                  <span>2</span>
                  <p>
                    <b>Upload photos and a virtual tour </b>(or have us create
                    them for you)
                  </p>
                </div>
                <div className="step">
                  <span>3</span>
                  <p>
                    <b>Sponsor a prize pool for maximum attention </b>(optional)
                  </p>
                </div>
                <div className="step">
                  <span>4</span>
                  <p>
                    <b>Respond to inquiries from buyers </b>(all leads routed
                    directly to you)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients">
          <div className="container">
            <div className="row">
              <div className="clients__team">
                <div className="col">
                  <div className="images text-center">
                    <img src={agent5} alt="background client" />
                    <div className="clients">
                      <div className="child-1">
                        <img src={agent6} alt="client-1" />
                      </div>
                      <div className="child-2">
                        <img src={agent7} alt="client-1" />
                      </div>
                      <div className="child-3">
                        <img src={agent8} alt="client-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="clients_text">
                    <h2>
                      Win new clients by simply providing
                      <strong>
                        &nbsp;excellent service
                        <span className="text-under"></span>
                      </strong>
                    </h2>
                    <h3>Homing delivers opportunities to grow your business</h3>
                    <h5>
                      Demonstrate your expertise, answer questions and respond
                      to showing requests from buyers and sellers not yet
                      working with an agent.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="profile">
          <div className="container">
            <div className="profile__block">
              <div className="row profile__display">
                <div className="col">
                  <div className="profile__text">
                    <h2>
                      Your
                      <strong>
                        <span className="text-under"></span> Homing Profile{" "}
                      </strong>
                      is a collection of your best work!
                    </h2>
                    <div className="content">
                      <p>Share your past successes</p>
                      <p>Deliver content to prospects</p>
                      <p>Share your expertise and market info</p>
                      <p>Gain followers for your social media channels</p>
                      <p>Completely free...</p>
                    </div>
                    <p>
                      <b>Create your account for free</b>
                    </p>
                    <a href="/users/create_account">
                      <button
                        type="button"
                        className="ant-btn button ant-btn-primary ant-btn-lg"
                      >
                        <span>Create Account</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <div className="images">
                    <div className="profile__block___images1">
                      <img src={agent9} alt="profile" />
                    </div>
                    <div className="profile__block___images2">
                      <img src={agent10} atl="video" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="collaborate">
          <div className="container">
            <div className="collaborate_block">
              <div className="row">
                <div className="col">
                  <div className="collaborate__block__images">
                    <img src={agent11} alt="collaboration" />
                  </div>
                </div>
                <div className="col right">
                  <div className="collaborate__text">
                    <h2 style={{ lineHeight: "53px" }}>
                      Nurture existing
                      <span className="text-under"></span> relationships
                    </h2>
                    <h5 style={{ fontWeight: "300" }}>
                      Invite your clients to collaborate at Homing
                    </h5>
                    <h5 style={{ fontWeight: "300" }}>
                      Homing’s technology makes collaboration efficient and fun!
                    </h5>
                    <div className="list">
                      <div className="icon"></div>

                      <h5 style={{ lineHeight: "53px", fontWeight: "300" }}>
                        When your client accepts your invitation to collaborate
                        at Homing
                      </h5>
                      <div className="item">
                        <div className="icon"></div>
                        <p>
                          All showing requests and all live chat inquiries will
                          go directly to you.
                        </p>
                      </div>
                      <div className="item">
                        <div className="icon"></div>
                        <p>
                          You will be a member of all of their saved searches
                          and aware of their activity.
                        </p>
                      </div>
                      <div className="item">
                        <div className="icon"></div>
                        <p>
                          Your clients will see your suggestions for lenders,
                          inspectors, title and escrow.
                        </p>
                      </div>
                      <div className="item">
                        <div className="icon"></div>
                        <p>
                          Your clients will see your suggestions for lenders,
                          inspectors, title and escrow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="marketplace">
          <div className="container">
            <div className="marketplace__text">
              <h2>
                <strong>The Homing Marketplace</strong>
              </h2>
              <h5 style={{ fontWeight: "200" }}>
                Together, we can change the industry by showing consumers that
                you are invaluable. We are looking for a limited number of
                really outstanding agents in southern California.
              </h5>
            </div>
            <div className="marketplace__icon">
              <div className="row minimize__screen">
                <div className="col">
                  <img src={agent12} alt="homing" />
                </div>
                <div className="col change__right">
                  <div className="marketplace__icon__block">
                    <div className="row minimize__screen ">
                      <div className="col move__box">
                        <a href="#">
                          <div
                            className="box false"
                            style={{ backgroundColor: "rgb(164, 196, 34)" }}
                          >
                            <h3>Buyers</h3>
                            <span>Learn more</span>
                            <div className="text-opacity">Buyers</div>
                          </div>
                        </a>
                      </div>
                      <div className="col move__box">
                        <a href="#">
                          <div
                            className="box false"
                            style={{ backgroundColor: "rgb(133, 81, 219)" }}
                          >
                            <h3>Sellers</h3>
                            <span>Learn more</span>
                            <div className="text-opacity">Sellers</div>
                          </div>
                        </a>
                      </div>
                      <div className="col move__box">
                        <a href="#">
                          <div
                            className="box false"
                            style={{ backgroundColor: "rgb(255, 175, 35)" }}
                          >
                            <h3>Real Estate Super Fans</h3>
                            <span>Learn more</span>
                            <div className="text-opacity">Fans</div>
                          </div>
                        </a>
                      </div>
                      <div className="col move__box">
                        <a href="#">
                          <div
                            className="box false"
                            style={{ backgroundColor: "rgb(253, 137, 129)" }}
                          >
                            <h3>Agents And Service Providers</h3>
                            <span>Learn more</span>
                            <div className="text-opacity">Agents</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup text-center">
              <h3 style={{ marginTop: "5%", fontWeight: "700" }}>
                Let‘s get started, Create an account today!
              </h3>

              <a href="/users/create_account">
                <button
                  type="button"
                  className="ant-btn button ant-btn-primary ant-btn-lg"
                >
                  <span>Create Account</span>
                </button>
              </a>
            </div>
          </div>
        </section>
        <footer id="footer" className="_2M_ce49">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="list">
                  <a href="#">Buy</a>
                  <a href="/sell">Sell</a>
                  <a href="#">Agents</a>
                  <a href="#">About us</a>
                  <a href="#">Contact Us</a>
                  <a href="#">FAQs</a>
                  <a href="#">Support Live Chat</a>
                  <a href="#">Market Boss</a>
                  <div className="socials">
                    <a
                      href="https://www.facebook.com/Homing-714622522233812/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a
                      href="https://twitter.com/homing_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/homing-li/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://www.pinterest.com/homingapp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-pinterest-square"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer__block2">
                  <p>
                    Updated Jun 2020: By searching, you agree to the
                    <a href="/public/content/terms_of_use">
                      &nbsp;Terms of Use
                    </a>
                    &nbsp;and
                    <a href="/public/content/policy">&nbsp;Privacy policy</a>.
                  </p>
                  <div>
                    <span>
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 17.5 16.4"
                        >
                          <path d="M17.2,7.4l-1.3-1.3c0,0,0,0,0,0l-5.3-5.3c-1.1-1-2.8-1.1-3.8,0L0.2,7.4c-0.3,0.3-0.3,0.8,0,1.1  c0.3,0.3,0.8,0.3,1.1,0v6.1c0,1,0.8,1.8,1.8,1.8h3.5h4.2h3.5c1,0,1.8-0.8,1.8-1.8V8.5c0.1,0.1,0.3,0.2,0.5,0.2c0,0,0,0,0,0l0.2,0  l0,0c0.1,0,0.3-0.1,0.4-0.2C17.5,8.2,17.5,7.7,17.2,7.4z M7.7,10.6h2c0.2,0,0.4,0.2,0.4,0.4v3.9H7.4l0-3.9  C7.4,10.7,7.5,10.6,7.7,10.6z M9.7,9h-2c-1,0-1.9,0.9-1.9,1.9v3.9H3.1c-0.1,0-0.2-0.1-0.2-0.2V6.9l5-5c0.4-0.4,1.2-0.4,1.6,0l5,5  v7.7c0,0.1-0.1,0.2-0.2,0.2h-2.7v-3.9C11.6,9.9,10.8,9,9.7,9z"></path>
                        </svg>
                      </i>
                      &nbsp;California DRE #02090119
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}

export default App;
