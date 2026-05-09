import React, { Component } from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components";
import "../styles/table.css";
import "../styles/CCLandingPage.css";
import "../styles/ServicePage.css";
import "../styles/warm-filter.css";
import Hero from "components/hero/BackgroundAsImage.js";
// import LandingPageHero from "components/hero/LandingPageHero.js";
import MainFeature from "components/features/ThreeColSimple.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import FR1 from "images/fr-1-2.jpg";
import FR2 from "images/fr-2-2.jpg";
import SalesforceLogo from "../images/logo/salesforce.png";
import SAPLogo from "../images/logo/sap.png";

import { SFS, SAP } from "../helpers/Services.js";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import "../styles/alp.css";

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default class CCLandingPage extends Component {
  render() {
    const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

    return (
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            backgroundColor: "#1e7cd9",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <Hero
            subheading="Welcome to"
            subheading1="CONNECTING CLOUD TECHNOLOGIES"
            heading="Consulting for Every Business"
            buttonText="BOOK A DEMO"
            bgImgURL="../../images/bg/hero-bg.jpg"
          />
          {/* <div class="custom-shape-divider-bottom-1642574667">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
        </div>
        <MainFeature />
        <div
          className="spg-container sfs-main"
          style={{
            // backgroundColor: "#000000",
            // backgroundImage: "linear-gradient(147deg, #000000 0%, #04619f 74%)",
            // backgroundImage: `url("https://image.freepik.com/free-photo/hand-holding-lightbulb-with-cloud-computing-technology-icons-such-as-laptop-computer-graph-cloud-technology-management-big-data-include-business-strategy_50039-1535.jpg?w=826")`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "cover",
          }}
        >
          {/* <OpacityOverlay /> */}
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
                        className="warm-filter-img"
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
          className="spg-container sap-main"
          style={{
            // backgroundImage: `url('https://image.freepik.com/free-photo/businessman-holding-virtual-infographic-with-human-icons-human-development-recruitment-concept_50039-2612.jpg?w=900')`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            height: "140vh",
          }}
        >
          {/* <OpacityOverlay /> */}
          <div className="spg-inner" style={{ height: "140vh" }}>
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
                        className="img-sap-bg"
                          src={
                            item.image
                            // "https://image.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg?w=740"
                            // 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"'
                          }
                          style={{
                            // backgroundImage: `url('https://image.freepik.com/free-photo/businessman-holding-virtual-infographic-with-human-icons-human-development-recruitment-concept_50039-2612.jpg?w=900')`,
                            height : '100%',
                            width : '100%'
                            // height: "140vh",
                          }}
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
        {/* <Container>
          <h5 className="subheading">Technical Services</h5>
          <h1 className="head">CPQ</h1>
          <center className="table-head">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>SAP CPQ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>✔️ User Managment</td>
                </tr>
                <tr>
                  <td>✔️ Simple Product</td>
                </tr>
                <tr>
                  <td>✔️ Complex Configurable Product Management</td>
                </tr>
                <tr>
                  <td>✔️ Pricing Configuration & Management</td>
                </tr>
                <tr>
                  <td>✔️ Discount and Promotions</td>
                </tr>
                <tr>
                  <td>✔️ Approvals</td>
                </tr>
                <tr>
                  <td>✔️ Workflow</td>
                </tr>
                <tr>
                  <td>✔️ Quote Proposals & Document Generation</td>
                </tr>
                <tr>
                  <td>✔️ Guided Selling</td>
                </tr>
                <tr>
                  <td>✔️ Customer Master Data Replication & Management</td>
                </tr>
                <tr>
                  <td>✔️ Sales Order Generation</td>
                </tr>
              </tbody>
            </table>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>INTEGRATION WITH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>✔️ Salesforce</td>
                </tr>
                <tr>
                  <td>✔️ SAP Commerce Cloud</td>
                </tr>
                <tr>
                  <td>✔️ SAP Cloud for Customer</td>
                </tr>
                <tr>
                  <td>✔️ SAP S4 HANA</td>
                </tr>
                <tr>
                  <td>✔️ SAP ECC</td>
                </tr>
                <tr>
                  <td>✔️ SAP Subscription billing</td>
                </tr>
                <tr>
                  <td>✔️ SAP Variant Configuration</td>
                </tr>
                <tr>
                  <td>✔️ SAP CPI</td>
                </tr>
                <tr>
                  <td>✔️ DocuSign</td>
                </tr>
                <tr>
                  <td>✔️ AdobeSign</td>
                </tr>
                <tr>
                  <td>✔️ CLM</td>
                </tr>
              </tbody>
            </table>
          </center>
          <DecoratorBlob />
        </Container>
        <Container>
          <ContentWithPaddingXl>
            <div className="tic">
              Features of CPQ
              <div className="tiw">
                <img className="ti1" src={FR1} alt={"feature"} />
                <img className="ti2" src={FR2} alt={"feature"} />
              </div>
            </div>
            <DecoratorBlob />
          </ContentWithPaddingXl>
        </Container> */}
        <Footer />
      </div>
    );
  }
}
