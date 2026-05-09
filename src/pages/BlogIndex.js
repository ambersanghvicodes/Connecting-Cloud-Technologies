import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import API from "../helpers/api";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import "../styles/blogs.scss";
import Loading from "./Loading";

import { blogData } from "./BlogData";


const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 p-5`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.p`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
//eslint-disable-next-line
export default ({
  headingText = "Blog Posts",
  posts = blogData,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    {
      console.log("INNNN");
    }
    getData();
  }, []);
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  const getData = async () => {
    console.log("IN");
    // const response = await API.get("/api_view/blogs/");
    // const data = await response.data;
    setData(posts);
    setLoading(false);
    console.log("data");
  };
  const getDiv = (description) => {
    return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
  };
  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <AnimationRevealPage>
      <Header />
      <Container>
        <HeadingRow>
          <Heading>{headingText}</Heading>
          {console.log(data)}
          {console.log(loading)}
        </HeadingRow>
        <div className="band">
          {data.map((post, index) => {
            return (
              <div className={index === 0 ? "item-1" : `item-${index + 1}`}>
                <a href={`/blogs/${post.slug}/`} className="card">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage:
                        `url(${post.imageSrc})`,
                    }}
                  ></div>
                  <article>
                    <h1 style={{ fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: post.title }} />
                    <span>{post.author}</span>
                    {/* <span className="date">{post.date_time.split('T')[0]}</span> */}
                  </article>
                </a>
              </div>
            );
          })}
        </div>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Travel Guide",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
});
