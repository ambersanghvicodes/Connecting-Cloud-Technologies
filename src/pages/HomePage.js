import React from "react";
import tw from "twin.macro";
import "../styles/home.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature from "components/features/ThreeColSimple.js";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import "../styles/table.css";
import Footer from "components/footers/MiniCenteredFooter.js";

import Header, {
  NavLink,
  NavLinks,
  // PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../components/headers/light.js";

import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import Growth from "images/growth.png";
import Customer from "images/customer.png";
import Billing from "images/billing.png";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import FR1 from "images/fr-1-2.jpg";
import FR2 from "images/fr-2-2.jpg";
import  AnimationRevealPage from "helpers/AnimationRevealPage.js";

const Heading = styled.h1`
  ${tw`text-4xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block `}
  }
`;

const Heading1 = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;

const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const StyledHeader = styled(Header)`
  ${tw`max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;
const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    z-index: -1;
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 `}
  }
`;
const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-12  h-12`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;
const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;
export default function HomePage({
  cards = [
    {
      imageSrc: Growth,
      title: "CRM",
      description:
        "Build healthy pipeline, increase sales productivity and improve your customers' buying experience.",
      url: "/",
    },
    {
      imageSrc: Customer,
      title: "CPQ",
      description:
        "Manage high volumes of complex quotes quickly, accurately and simply across your business.",
      url: "",
    },
    {
      imageSrc: Billing,
      title: "Billing",
      description:
        "Make generating recurring and usage-based billing data easy to understand, monitor and analyse.",
      url: "/",
    },
  ],
  linkText = "",
  heading = "Quote-to-Cash Solution Portfolio",
  subheading = "Services",
  description = "",
  imageContainerCss = null,
  imageCss = null,
}) {
  const navLinks = [
    <NavLinks key={1}>
      <Link to="/blogs">
        <NavLink>Blogs</NavLink>
      </Link>
      <Link to="/aboutus">
        <NavLink>About</NavLink>
      </Link>
      {/* <NavLink href="#">SAP SERVICES</NavLink> */}
      {/* <NavLink href="#">Locations</NavLink> */}
      {/* <NavLink href="/pricing">Pricing</NavLink> */}
      <Link to="/contactus">
        <NavLink>Contact Us</NavLink>
      </Link>
      <Link to="/sapscripts">
        <NavLink>Script Workbench</NavLink>
      </Link>
    </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">Hire Us</PrimaryLink>
    // </NavLinks>,
  ];
  return (
    <AnimationRevealPage>
      <div className="hero">
        <StyledHeader links={navLinks} />
        <Heading>
          <SlantedBackground>
            <div>
              <div className="slanted_home"></div>
              <div className="h_home">EMPOWER YOUR SALES.</div>
            </div>
          </SlantedBackground>
          <br />
          <br />
          <br />
          <span className="sh_home">
            Start your Configure, Price, Quote journey at predictable time and
            cost with Connecting Cloud.
          </span>
          <br />
        </Heading>
        <Link to="contactus">
          <PrimaryAction>
            Contact US{" "}
            <span role="img" aria-label="contact">
              ☎️
            </span>
          </PrimaryAction>
        </Link>
      </div>
      <div className="home-qcs">
        {subheading && (
          <Subheading>
            <span className="subheading_home">{subheading}</span>
          </Subheading>
        )}
        {heading && (
          <Heading1>
            <span className="heading_home">{heading}</span>
          </Heading1>
        )}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {linkText && (
                  <span className="link">
                    <span>{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </div>
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
      {/* <DecoratorBlob /> */}
      <div className="tic" style={{ marginTop: "5rem" }}>
        <span style={{ textAlign: "center" }}>Features of CPQ</span>
        <div className="tiw">
          <img className="ti1" src={FR1} alt={"feature"} />
          <img className="ti2" src={FR2} alt={"feature"} />
        </div>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
}
