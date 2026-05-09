import React, { Component } from "react";
import API from "../helpers/api";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import "../styles/blog_detail.css";
import Loading from "./Loading";
import MetaTags from "react-meta-tags";
import { blogData } from "./BlogData";

export default class BlogDetail extends Component {
  state = {
    loading: true,
    posts: blogData,
    blog: [],
  };
  componentDidMount = () => {
    console.log(this.props.match.params.title);
    const { title } = this.props.match.params;
    // API.get(`/api_view/blogs/${title}/`)
    //   .then((res) =>
    //     this.setState({
    //       blog: res.data,
    //       loading: false,
    //     })
    //   )
    //   .catch((err) => console.error(err.data));
    const blog = this.state.posts.filter((post) => post.slug === title)[0];
    console.log("blog", blog);
    this.setState({
      blog: blog,
      loading: false,
    });
  };
  render() {
    const blog = this.state.blog;
    return this.state.loading ? (
      <>
        <Loading />
      </>
    ) : this.state.blog ? (
      <div>
        <Header />
        <MetaTags>
          {console.log("blog1", blog)}
          <title>{blog.title}</title>
          <meta name="description" content={blog.description} />
          <meta name="keywords" content={blog.tags} />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <div className="blog-head">
          <div className="blog-container">
            <div>
              <h1 className="blog-title">{blog.title}</h1>
              <h1 className="blog-subheading">{blog.subheading}</h1>
              <img src={blog.imageSrc} alt={blog.title} className="blog-image" />

              <div className="blog-details">
                {/* <div className="blog-author">
                  <span style={{ fontWeight: "bold" }}>Author :</span>{" "}
                  {blog.author}
                </div> */}
                {/* <div className="blog-tag">
                  <span style={{ fontWeight: "bold" }}>Category :</span>{" "}
                  {blog.tags}
                </div> */}
                {/* <div className="blog-date">
                  <span style={{ fontWeight: "bold" }}>Date: </span>
                  {blog.date_time.split("T")[0]}
                </div> */}
              </div>

              {console.log(blog)}
            </div>
            <div className="blog-container">
              <p
                dangerouslySetInnerHTML={{ __html: blog.description }}
                style={{ color: "black" }}
                className="nd-para"
              />
            </div>
          </div>
        </div>{" "}
        <Footer />
      </div>
    ) : (
      <></>
    );
  }
}
