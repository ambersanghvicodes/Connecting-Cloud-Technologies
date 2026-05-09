import React, { Component } from "react";
import tw from "twin.macro";
import Hero from "components/hero/BackgroundAsImage.js";
import SalesforceBG from "../images/bg/salesforce-bg-1.jpg";
import SalesforceLogo from "../images/logo/salesforce.png";
import SAPLogo from "../images/logo/sap.png";
import "../styles/ServicePage.css";
import "../styles/warm-filter.css";
import { SFS, SAP } from "../helpers/Services.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default class ServicePage extends Component {
  render() {
    const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

    return (
      <div>
        <div
          style={{
            position: "relative",
            // backgroundColor: "#1e7cd9",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <Hero
            subheading="Our"
            subheading1="SERVICES"
            heading="Our Services"
            buttonText="DISCOVER MORE"
            bgImgURL="../../images/bg/hero-bg.jpg"
          />
        </div>
        <div
          className="spg-container"
          style={{
            backgroundImage: `url("https://image.freepik.com/free-photo/hand-holding-lightbulb-with-cloud-computing-technology-icons-such-as-laptop-computer-graph-cloud-technology-management-big-data-include-business-strategy_50039-1535.jpg?w=826")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <OpacityOverlay />
          <div className="spg-inner">
            <div
              style={{ position: "relative", width: "100vw", height: "100vh" }}
            >
              <div className="spg-inner-flex">
                <center>
                  <img
                    className="spg-img"
                    alt="Salesforce"
                    src={SalesforceLogo}
                  />
                </center>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyItems: "center",
                  }}
                >
                  {SFS.map((item, idx) => {
                    return (
                      <div className="warm-filter" key={idx}>
                        <img
                          src={
                            item.image
                            // 'https://image.freepik.com/free-photo/hologram-projector-screen-with-cloud-system-technology_53876-108502.jpg?w=740'
                          }
                          alt="background"
                        />
                        <div className="figcaption">
                          <div>
                            <h2 className="card-header-1">{item.title}</h2>
                            <p className="card-header-2">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="spg-container"
          style={{
            backgroundImage: `url('https://image.freepik.com/free-photo/businessman-holding-virtual-infographic-with-human-icons-human-development-recruitment-concept_50039-2612.jpg?w=900')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <OpacityOverlay />
          <div className="spg-inner">
            <div
              style={{ position: "relative", width: "100vw", height: "100vh" }}
            >
              <div className="spg-inner-flex">
                <center>
                  <img className="spg-img-sap" alt="SAP" src={SAPLogo} />
                </center>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {SAP.map((item, idx) => {
                    return (
                      <div className="warm-filter" key={idx}>
                        <img
                          src={
                            "https://image.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg?w=740"
                            // 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"'
                          }
                          alt="background"
                        />
                        <div className="figcaption">
                          <div>
                            <h2 className="card-header-1">{item.title}</h2>
                            <p className="card-header-2">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="warm-filter">
            <img
              src={
                'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"'
              }
              alt="background"
            />
            <div className="figcaption">
              <div>
                <h2 className="card-header-1">{"Salesforce"}</h2>
                <p className="card-header-2">{"saknsanbd sajkas"}</p>
              </div>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}
