import React from "react";
import AuthService from '../../components/AuthService';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class Register extends React.Component {
 



  render() {
    
    return (
      <div className="content">
        <Container>
        <Alert color="primary" className="text-center">
        Hermes Tracker was built on a MERN Stack. <a style={{color:"#4b4b4b"}} href="https://github.com/carenbriones/Hermes">View our GitHub Repo for full details.</a> 
        
      </Alert>
          <Row>
            <Col className="ml-auto mr-auto text-center">
              <h1 className="title">About Us</h1>
              <h4 className="description" style={{color:"#2b2a2a"}}>
                We are students (now Graduates) at UCSD's Full Stack Development program. Over the
                course of our program we came together on multiple projects. We found that each of us
                brought a valuable set of skills that complimented the other team members. Check out our
                LinkedIn and GitHub profiles for other projects we worked on together. 
                  </h4>
            </Col>
          </Row>

        </Container>
        <Container>
          
          <Row>

            <Col className="ml-auto mr-auto" >
              <Card className="card-profile card-plain">
                  
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/caren.jpg")}
                        ></img>
                      </a>
                    </div>

                    <CardBody>
                      <CardTitle tag="h4">Caren Briones</CardTitle>
                      <h5 className="category" style={{fontSize: "1.3em"}}>Back-end</h5>
                      {/* <p className="card-description" style={{
                        fontSize: "1.2em",
                        color:"#2b2a2a"
                      }}>
                        Think in the morning. Act in the noon. Eat in the
                        evening. Sleep in the night......
                          </p> */}
                      <CardFooter>
                        <Button
                          className="btn btn-linkedin mx-1"
                          href="https://www.linkedin.com/in/caren-briones-a62b74123/"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin"></i>
                          LinkedIn
                        </Button>
                        <Button
                          className="btn btn-reddit mx-1"
                          href="https://github.com/carenbriones"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github"></i>
                          GitHub
                        </Button>
                      
                      </CardFooter>
                    </CardBody>
              </Card>
            </Col>

            <Col className="ml-auto mr-auto" >
              <Card className="card-profile card-plain">
                  
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/wendy.jpg")}
                        ></img>
                      </a>
                    </div>

                    <CardBody>
                      <CardTitle tag="h4">Wendy Garcia</CardTitle>
                      <h5 className="category" style={{fontSize: "1.3em"}}>Database Architect</h5>
                      {/* <p className="card-description" style={{
                        fontSize: "1.2em",
                        color:"#2b2a2a"
                      }}>
                        Think in the morning. Act in the noon. Eat in the
                        evening. Sleep in the night......
                          </p> */}
                      <CardFooter>
                        <Button
                          className="btn btn-linkedin mx-1"
                          href="https://www.linkedin.com/in/wendy-garcia-97682a31/"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin"></i>
                          LinkedIn
                        </Button>
                        <Button
                          className="btn btn-reddit mx-1"
                          href="https://github.com/wendygarcia84"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github"></i>
                          GitHub
                        </Button>
                      
                      </CardFooter>
                    </CardBody>
              </Card>
            </Col>

            <Col className="ml-auto mr-auto" >
              <Card className="card-profile card-plain">
                  
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/jeff.png")}
                        ></img>
                      </a>
                    </div>

                    <CardBody>
                      <CardTitle tag="h4">Jeff McLean</CardTitle>
                      <h5 className="category" style={{fontSize: "1.3em"}}>Front-end</h5>
                      {/* <p className="card-description" style={{
                        fontSize: "1.2em",
                        color:"#2b2a2a"
                      }}>
                        Think in the morning. Act in the noon. Eat in the
                        evening. Sleep in the night......
                          </p> */}
                      <CardFooter>
                        <Button
                          className="btn btn-linkedin mx-1"
                          href="https://www.linkedin.com/in/jeffreymclean22/"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin"></i>
                          LinkedIn
                        </Button>
                        <Button
                          className="btn btn-reddit mx-1"
                          href="https://github.com/jmmarketing"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-github"></i>
                          GitHub
                        </Button>
                      
                      </CardFooter>
                    </CardBody>
              </Card>
            </Col>



          </Row>
         
        </Container >
      
      </div >
    );
  }
}

export default Register;
