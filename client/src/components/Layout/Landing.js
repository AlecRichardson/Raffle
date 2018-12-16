import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";
import background from "../images/tickets.jpg";

import "./Landing.css";

const style = {
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  width: "100%",
  height: "300px"
};
export default class Landing extends Component {
  render() {
    return (
      <div>
        <Container>
        <h1 className="landing-title">
          Welcome to the Raff!™, where you can particpate in hundreds of daily raffles!
        </h1>
        </Container>
        <div className="background-image" style={style} />
        <div className="intro">
          <Container>
            <h1>Raffles ending soon</h1>
            <Divider />
          </Container>
        </div>
      </div>
    );
  }
}
