import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";

import About from "../Animations/about.json";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default (AboutUs) => { //eslint-disable-line
  document.title = "Connecting Cloud | About Us"
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Connecting Cloud Technologies</Subheading>}
        // heading="Sales is tough make Quoting easy with us."
        buttonRounded={false}
        primaryButtonText="Contact US"
        primaryButtonUrl ='/contactus'
        animationData={About}
        description={
          // "We are extremely focused on creating Customer Experience Solutions for our customers using SAP CX, Salesforce and Microsoft solutions. Our core expertise and experience lie in providing technology, digital transformation for an intelligent enterprise and business strategy consulting service deploying efficient solutions using these platforms. We exist to create and deliver value for our customers, our employees and our partners. We can be the best partner for you in making your business process seamless and quicker."
          "Connecting Cloud Technologies is a global leader in providing Consulting & Services to the customer to improve their Sales efficiency, productivity and performance to achieve their vision. The company Connecting cloud Technologies started in the year 2021 with a vision to help customers to spot on with their performance, productivity and efficiecy.We at Connecting Cloud Technologies believe that with technology we can do wonders, we have consultant across the globe in India, Germany, Malaysia, United Kingdom who can help implement and guide the customers achieve their vision."
        }
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      {/* <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the desgin space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        animationData={Multitask}
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      /> */}
      {/* <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
