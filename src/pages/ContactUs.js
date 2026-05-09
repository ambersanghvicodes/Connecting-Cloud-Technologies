import React, { Component } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { ContactUsForm } from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import "../styles/contactUs.css";
import Form2 from "../components/forms/Form2.js";

import { ReactComponent as LinkedInIcon } from "../images/linkedin-icon.svg";

// import ContactDetails from "components/cards/ThreeColContactDetails.js";
import LocAdd from "../logo/loc-add.png";
export default class ContactUs extends Component {
  render() {
    document.title = "Connecting Cloud | Contact Us";
    // const Address = tw.span`leading-relaxed`;
    // const AddressLine = tw.span`block`;
    // const Email = tw.span`text-sm mt-6 block text-gray-500`;
    // const Phone = tw.span`text-sm mt-0 block text-gray-500`;
    const SocialLinksContainer = tw.div`mt-4`;
    const SocialLink = styled.a`
      ${tw`cursor-pointer inline-block text-blue-800 hover:text-gray-500 transition duration-300 mx-4`}
      svg {
        ${tw`w-5 h-5`}
      }
    `;
    return (
      <div>
        <Header />
        <div
          style={{
            height: "40vh",
            width: "100vw",
            background:
              'url("https://dss.mo.gov/dss_map/img/contact-us-banner.png")',
            // backgroundColor : 'red',
            backgroundPosition: "center",
            // backgroundRepeat : 'no-repeat',
            backgroundSize: "cover",
          }}
        ></div>
        <center>
          <div className="contact-us-container">
            <div className="contact-us-left">
              <center>
                <img className="loc-add" alt="loc-logo" src={LocAdd} />
              </center>
              <br />
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                INDIA
              </div>
              <div style={{ textAlign: "center", paddingTop: "1.2rem" }}>
                RZD 208/C1, Gali no 12, Raj Nagar 2,
                <br /> Palam, New Delhi 110077, India.
              </div>{" "}
              <br />
              <br />
              <div
                style={{
                  fontSize: "1rem",
                  paddingTop: "1.3rem",
                  color: "royalblue",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                info@connectingcloud.co
              </div>
              <SocialLinksContainer>
                <SocialLink
                  target="blank"
                  href="https://www.linkedin.com/company/connectingcloud/"
                >
                  <LinkedInIcon />
                </SocialLink>
              </SocialLinksContainer>
            </div>
            <div className="contact-us-right"><Form2/></div>
          </div>
        </center>
        {/* <ContactUsForm /> */}
        {/* <ContactDetails
          cards={[
            {
              title: "New York",
              description: (
                <>
                  <Address>
                    <AddressLine>40 Gates Court</AddressLine>
                    <AddressLine>Endicott, NY 13760</AddressLine>
                  </Address>
                  <Email>contact@treact.com</Email>
                  <Phone>+1 (203) 991-6988</Phone>
                </>
              ),
            },
            {
              title: "Illinois",
              description: (
                <>
                  <Address>
                    <AddressLine>602 Annadale Drive</AddressLine>
                    <AddressLine>Dekalb, IL 60115</AddressLine>
                  </Address>
                  <Email>contact@treact.com</Email>
                  <Phone>+1 (203) 991-6988</Phone>
                </>
              ),
            },
            {
              title: "California",
              description: (
                <>
                  <Address>
                    <AddressLine>96 NE. Delaware Lane</AddressLine>
                    <AddressLine>Sacramento, CA 95820</AddressLine>
                  </Address>
                  <Email>contact@treact.com</Email>
                  <Phone>+1 (203) 991-6988</Phone>
                </>
              ),
            },
            {
              title: "Tennessee",
              description: (
                <>
                  <Address>
                    <AddressLine>74 Peachtree Ave.</AddressLine>
                    <AddressLine>Dyersburg, TN 38024</AddressLine>
                  </Address>
                  <Email>contact@treact.com</Email>
                  <Phone>+1 (203) 991-6988</Phone>
                </>
              ),
            },
            {
              title: "New Jersey",
              description: (
                <>
                  <Address>
                    <AddressLine>8355 Summer Street</AddressLine>
                    <AddressLine>Manchester, NJ 08759</AddressLine>
                  </Address>
                  <Email>contact@treact.com</Email>
                  <Phone>+1 (203) 991-6988</Phone>
                </>
              ),
            },
            {
              title: "Ohio",
              description: (
                <>
                  <Address>
                    <AddressLine>7713 Snake Hill Ave.</AddressLine>
                    <AddressLine>Piqua, OH 45356</AddressLine>
                  </Address>
                  <Email>contact@treact.com</Email>
                  <Phone>+1 (203) 991-6988</Phone>
                </>
              ),
            },
          ]}
        /> */}
        <Footer />
      </div>
    );
  }
}

// const ContactUs => {
//   return (

//   );
// };
