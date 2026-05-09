import React, { Component } from "react";
import API from "../helpers/api";
import axios from "axios";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import "../styles/forms.css";
// import Alert from "react-bootstrap/Alert";
import Modal from "../components/modal/Modal";
import OpenModalButton from "../components/modal/OpenModalButton";
import Loading from "./Loading";
import styled from "styled-components";

export default class GPScripts extends Component {
  state = {
    isOpen: false,
    url: "",
    username: "",
    password: "",
    domain: "",
    modal_heading: "",
    loading: false,
    token: "",
    isError: false,
    errorMsg: "",
    scripts: [],
    script_type: "",
    action_type: "",
  };
  handlOpenModal(trigger, action_type = "") {
    if (action_type !== "") {
      this.setState({
        action_type: action_type,
      });
    }
    this.setState({
      isOpen: trigger,
    });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  getFiles = (data) => {
    const { action_type } = this.state;
    console.log(data);
    if (action_type === "custom_actions") {
      API.post("api_view/get_custom_actions/", data)
        .then((res) => {
          this.setState({ scripts: res.data, script_type: "custom_actions" });
          this.setLoading(false);
        })
        .catch((err) => {
          this.setState({ isError: true, errorMsg: err });
          console.log('err',err)
          this.setLoading(false);
        });
    } else if (action_type === "global_scripts") {
      API.post("api_view/get_global_scripts/", data)
        .then((res) => {
          console.log('data1',res.data)
          this.setState({ scripts: res.data, script_type: "global_scripts" });
          this.setLoading(false);
        })
        .catch((err) => {
          this.setState({ isError: true, errorMsg: err });
          this.setLoading(false);
        });
    } else if (action_type === "responsive_templates") {
      API.post("api_view/get_responsive_templates/", data)
        .then((res) => {
          this.setState({
            scripts: res.data,
            script_type: "responsive_templates",
          });
          console.log(res.data);
          this.setLoading(false);
        })
        .catch((err) => {
          this.setState({ isError: true, errorMsg: err });
          console.log(err)
          this.setLoading(false);
        });
    } else if (action_type === 'custom_calculation') {
      API.post("api_view/get_custom_calculation/", data)
        .then((res) => {
          this.setState({
            scripts: res.data,
            script_type: "custom_quote_calculations",
          });
          console.log(res.data);
          this.setLoading(false);
        })
        .catch((err) => {
          this.setState({ isError: true, errorMsg: err });
          this.setLoading(false);
        });
    }
  };
  setLoading(trigger) {
    this.setState({
      loading: trigger,
    });
  }
  setCustom = (url1) => {
    console.log(url1)
    let auth_headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.state.token,
    };
    axios
      .get(url1, { headers: auth_headers })
      .then((res) => {
        let d = res.data;
        this.getFiles(d);
      })
      .catch((err) => {
        console.log(err.data)
        this.setState({ isError: true, errorMsg: err });
        this.setLoading(false);
      });
  };
  onSubmit = (e) => {
    this.setState({isError : false, errorMsg : ''})
    e.preventDefault();
    this.handlOpenModal(false);
    this.setLoading(true);
    const { url, username, domain, password, action_type } = this.state;
    let url1 = "https://" + url + "/basic/api/token";
    let data1 =
      "grant_type=password&username=" +
      username +
      "&password=" +
      password +
      "&domain=" +
      domain;
    axios
      .post(url1, data1)
      .then((res) => {
        this.setState({
          token: res.data.access_token,
        });
        console.log(res)
        if (action_type === "custom_actions") {
          url1 = "https://" + url + "/api/script/v1/customactions?$top=100";
          this.setCustom(url1);
        } else if (action_type === "global_scripts") {
          url1 =
            "https://" + url + "/api/script/v1/globalscripts?$skip=0&$top=100";
          this.setCustom(url1);
        } else if (action_type === "responsive_templates") {
          url1 =
            "https://" +
            url +
            "/api/responsiveTemplate/v1/customResponsiveTemplates?$skip=0&$top=100";
          this.setCustom(url1);
        } else if (action_type === 'custom_calculation') {
          url1 =
            "https://" +
            url +
            "/api/script/v1/customcalculations?$skip=0&$top=100";
          this.setCustom(url1);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response === undefined) {
          this.setState({
            isError: true,
            errorMsg: 'Invalid URL Provided',
            loading: false,
          });
        } else {
          this.setState({
            isError: true,
            errorMsg: err.response.data.error,
            loading: false,
          });
        }
      });
    // this.setState({
    //   url: "",
    //   username: "",
    //   domain: "",
    //   password: "",
    // });
  };
  getForm() {
    return (
      <form className="form-container" onSubmit={(e) => this.onSubmit(e)}>
        <p>
          <label for="url">URL: </label>
          <input
            type="text"
            id="url"
            onChange={(e) => this.onChange(e)}
            className="int_field"
            name="url"
            value={this.state.url}
          />
        </p>
        <p>
          <label for="username">Username: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => this.onChange(e)}
            className="int_field"
            name="username"
            value={this.state.username}
          />
        </p>
        <p>
          <label for="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => this.onChange(e)}
            className="int_field"
            name="password"
            value={this.state.password}
          />
        </p>
        <p>
          <label for="domain">Domain: </label>
          <input
            type="domain"
            id="domain"
            onChange={(e) => this.onChange(e)}
            className="int_field"
            name="domain"
            value={this.state.domain}
          />
        </p>
        <button className="form-btn" type="submit">
          Get Scripts
        </button>
      </form>
    );
  }
  downloadZip = (e) => {
    e.preventDefault();
    let uid = this.state.scripts.uid;
    API.post("/api_view/get_zip/", {
      uid: uid,
      action_type: this.state.script_type,
    })
      .then((res) => {
        var link = document.createElement("a");
        link.href =
          "http://127.0.0.1:8000" + res.data.zip_file;
          // "http://connectingcloud.pythonanywhere.com" + res.data.zip_file;
        link.download = `${this.state.script_type}.zip`;
        link.target = "_blank";
        console.log(link.download);
        link.click();
      })
      .catch((err) => {
        console.log(err)
        this.setState({ isError: true, errorMsg: err });
        this.setLoading(false);
      });
  };
  render() {
    const Alert = styled.div`
      background: #f7706a;
      display: grid;
      place-items: center;
      color: white;
      margin: 2rem 0;
      padding: 1rem 0;
      border : red 1px dotted ;
    `;
    return (
      <div>
        <Header />
        <div style={{ height: "100vh" }}>
          {this.state.loading ? (
            <Loading title={"Getting Scripts for you."}></Loading>
          ) : (
            <>
              {this.state.isError ? (
                <>
                  <Alert variant={"danger"}>{this.state.errorMsg}</Alert>
                  {console.log(this.state)}
                </>
              ) : (
                <></>
              )}

              <div
                style={{
                  // height: "100vh",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <button
                  onClick={() => this.handlOpenModal(true, "custom_actions")}
                >
                  <OpenModalButton>Get Custom Actions Scripts</OpenModalButton>
                </button>
                <Modal
                  children={this.getForm()}
                  key={1}
                  isOpen={this.state.isOpen}
                  heading={"Custom Actions"}
                  handleClose={() => this.handlOpenModal(false)}
                />
                <button
                  onClick={() => this.handlOpenModal(true, "global_scripts")}
                >
                  <OpenModalButton>Get Global Scripts</OpenModalButton>
                </button>
                <Modal
                  children={this.getForm()}
                  isOpen={this.state.isOpen}
                  key={2}
                  heading={"Global Scripts"}
                  handleClose={() => this.handlOpenModal(false)}
                />
                <button
                  onClick={() =>
                    this.handlOpenModal(true, "responsive_templates")
                  }
                >
                  <OpenModalButton>Get Responsive Templates</OpenModalButton>
                </button>
                <Modal
                  children={this.getForm()}
                  key={3}
                  isOpen={this.state.isOpen}
                  heading={"Responsive Templates"}
                  handleClose={() => this.handlOpenModal(false)}
                />
                <button
                  onClick={() =>
                    this.handlOpenModal(true, "custom_calculation")
                  }
                >
                  <OpenModalButton>Get Custom Quote Calculation</OpenModalButton>
                </button>
                <Modal
                  children={this.getForm()}
                  key={3}
                  isOpen={this.state.isOpen}
                  heading={"Custome Quote Calculation"}
                  handleClose={() => this.handlOpenModal(false)}
                />
              </div>
              {this.state.script_type ? (
                <center>
                  <div style={{ padding: "1.2rem", margin: "1em 20vw" }}>
                    <h1
                      style={{
                        fontSize: "2rem",
                        color: "red",
                        textTransform: "uppercase",
                      }}
                    >
                      {this.state.script_type}
                    </h1>
                    <h3 style={{ margin: "0.7rem" }}>
                      Number of Script Extracted : {this.state.scripts.nof}{" "}
                    </h3>
                    <button
                      style={{ padding: "0.4rem", background: "royalblue" }}
                      onClick={(e) => this.downloadZip(e)}
                    >
                      Download Zip
                    </button>
                  </div>
                </center>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
