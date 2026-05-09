import React, { useState } from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import BackdropFilter from "react-backdrop-filter";
import Dropdown from "../Navbar/Dropdown";
import "../Navbar/Navbar.css";
import Header, {
  NavLink,
  NavLinks,
  // PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import BG1 from "../../images/bg/bg-i.jpg";
import BG2 from "../../images/bg/hero-bg.jpg";
import BG3 from "../../images/bg/hero-bg-1.jpg";
import "../../styles/bas.css";
// import BackgroundImage from "../../images/background2.jpg";
// import growthData from "../../Animations/growth.json";
import Navbar from "./../Navbar/Navbar";

// eslint-disable-next-line
export default (props) => {
  const StyledHeader = styled(Header)`
    ${tw`pt-8 max-w-none`}
    ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
      ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
    }
    ${NavToggle}.closed {
      ${tw`text-gray-100 hover:text-primary-500`}
    }
  `;
  const Container = styled.div`
    ${tw`relative  bg-center bg-cover h-full`}
    background-image: url(${BG1});
  `;
  // https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80
  // const HeroBG = styled.div`
  //   ${tw`absolute z-0 -mx-8 -mt-8 bg-center bg-cover opacity-50`}
  //   background-image: url("../../images/bg/hero-bg.jpg");
  // `;

  const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;

  const HeroContainer = tw.div`z-20 relative max-w-screen-xl mx-auto`;
  const HeroContainer1 = tw.div`z-20 relative pt-8`;
  const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
  const LeftColumn = tw.div`flex w-full   items-center block`;
  // const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

  const Heading = styled.h1`
    ${tw`text-4xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
    span {
      ${tw`inline-block  mt-2`}
    }
  `;
  const Heading1 = styled.h1`
    ${tw`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-56 pt-4 sm:mt-0`}
    span {
      ${tw`inline-block mt-2`}
    }
  `;

  const SlantedBackground = styled.span`
    ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
    &::before {
      content: "";
      ${tw`absolute inset-0 bg-gray-100 transform blur-xl -skew-x-12 -z-10`}
    }
  `;

  // const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

  const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded  transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const navLinks = [
    <NavLinks key={1}>
      <Link to="/blogs">
        <NavLink>Blogs</NavLink>
      </Link>
      <Link to="/aboutus">
        <NavLink>About</NavLink>
      </Link>
      <Link to="/services">
        <NavLink onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link to="/" className="" onClick={closeMobileMenu}>
            Services <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown page="home" />}
        </NavLink>
      </Link>
      {/* <NavLink href="#">SAP SERVICES</NavLink> */}
      {/* <NavLink href="#">Locations</NavLink> */}
      {/* <NavLink href="/pricing">Pricing</NavLink> */}
      <Link to="/contactus">
        <NavLink>Contact Us</NavLink>
      </Link>
      {/* <Link to="/scripts">
        <NavLink>Scripts</NavLink>
      </Link> */}
    </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">Hire Us</PrimaryLink>
    // </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />

      {/* <img
        className="ti1"
        src={BG2}
        alt={"feature"}
        style={{
          position: "absolute",
          height: "100%",
          opacity: "0.75",
          transform: "rotate(180deg)",
        }}
      /> */}
      {/* <HeroContainer1>
        <Navbar />
      </HeroContainer1> */}
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            {/* <Notification>
              We have now launched operations in Europe.
            </Notification> */}
            <BackdropFilter
              filter={"blur(5px) sepia(30%)"}
              className="blur-bg"
              html2canvasOpts={{
                allowTaint: true,
              }}
            >
              <button className="hero-blur-subheading">
                {props.subheading}{" "}
                <span className="hero-blur-subheading1">
                  {props.subheading1}
                </span>
              </button>
            </BackdropFilter>
            <Heading1 style={{ color: "#fff6f5" }}>{props.heading}</Heading1>
            {/* <Heading>
              <SlantedBackground>
                <span style={{ color: "#0000fe" }}>EMPOWER YOUR SALES.</span>
              </SlantedBackground>
              <br />
              <span>Heading Goes Here.</span>
              <span
                style={{
                  fontSize: "1.6rem",
                  lineHeight: "2.5rem",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Start your Configure, Price, Quote journey at predictable time
                and cost with Connecting Cloud.
              </span>
              <br />
            </Heading> */}
            <Link to="contactus" >
              <PrimaryAction className="btn-shadow">
                {props.buttonText}{" "}
                {/* <span role="img" aria-label="contact">
                  ☎️
                </span> */}
              </PrimaryAction>
            </Link>
          </LeftColumn>
          {/* <RightColumn>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: growthData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={400}
              width={610}
            />
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn> */}
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
