import React, {Component} from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";


class Footer extends Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")} style={{
          zIndex: "4",
          position: "absolute",
          width: "100%",
          bottom: "0",
          color: "#bbbbbb",
          marginBottom: "20px"
        }}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                &copy; {1900 + new Date().getYear()}, made with{" "}
                <i className="fa fa-heart heart" /> by Team Hermes
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;