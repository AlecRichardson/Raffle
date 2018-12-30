import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Nav.css";

import logo from "../images/logo.svg";

import { loginUser } from "../../Actions/User/UserAction";
class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: "home", user: false, name: null };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("nav didupdate");
    if (prevProps.active !== this.props.active) {
      this.setState({ activeItem: this.props.active });
      let token = localStorage.getItem("userToken");
      const decoded = jwt_decode(token);
      this.setState({ name: decoded.name });
    }
  };

  toggleUser = () => {
    this.setState({ user: !this.state.user });
    console.log("user has been toggled");
  };

  componentDidMount = () => {
    this.props.onref(this);
  };

  componentWillUnmount = () => {
    this.props.onref(undefined);
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    let token = localStorage.getItem("userToken");
    if (token) {
      console.log("nav shouldcomp YES");
      return true;
    } else {
      console.log("nav shouldcomp NO");

      return false;
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <div className="Navbar">
          <Container>
            <h1 className="nav-title">
              <img src={logo} alt="Raff-logo" />
            </h1>
          </Container>
          <Menu className="menu" borderless pointing secondary>
            <Link to="/">
              <Menu.Item
                as="span"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/raffles">
              <Menu.Item
                as="span"
                name="Raffles"
                active={activeItem === "raffles"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/dashboard">
              <Menu.Item
                as="span"
                name="dashboard"
                active={activeItem === "dashboard"}
                onClick={this.handleItemClick}
              />
            </Link>

            <Menu.Menu position="right">
              <Link to="/register">
                <Menu.Item
                  as="span"
                  name="register"
                  active={activeItem === "register"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/login">
                <Menu.Item
                  as="span"
                  name="login"
                  content={
                    this.state.user === true
                      ? `Hi, ${this.state.name}`
                      : "Login"
                  }
                  active={activeItem === "login"}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu.Menu>
          </Menu>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.userReducer.active
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Nav);
