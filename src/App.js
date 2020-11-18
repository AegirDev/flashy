//React Imports
import React, {Component, Suspense} from "react";

import './App.css';
//import './main.scss';
import './loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

//General Style Imports
import twitter from './twitterLogo.png';
import telegram from './telegramLogo.png';

/* ELEMENTS IMPORTS */
import buccLogo from './logo.svg';
import bucc from './bucc.png';
import triangles from './firstvideo.mp4';
import coinVideo from './secondvideo.mp4';
import cube from './thirdvideo.mp4';

/* BOOTSTRAP IMPORTS */
//Elements
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
//Layouts
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.setupLoader = this.setupLoader.bind(this);
    this.state = {
      loader: true,
      percentageLoader: "0%",
      visibility: "visible",
      loaderCSS: "loaderCoverSheet"
    }
    document.body.style.overflowY = "hidden";
  }

        componentDidMount = async () => {
        this.setupLoader();
        }

        setupLoader = async () => {
        var that = this;
        setTimeout(function(){that.setState({percentageLoader: "20%"})}, 1000);
        setTimeout(function(){that.setState({percentageLoader: "40%"})}, 2000);
        setTimeout(function(){that.setState({percentageLoader: "50%"})}, 3000);
        setTimeout(function(){that.setState({percentageLoader: "70%"})}, 4000);
        setTimeout(function(){that.setState({percentageLoader: "90%", loaderCSS: "loaderCoverSheet2"});
        document.body.style.overflowY = "scroll";}, 4800);
        setTimeout(function(){that.setState({loader: false});}, 5000);
     
        }

  render () {
  return (
    <>
<Suspense>
    { this.state.loader && (
        <React.Fragment>
        <div className={this.state.loaderCSS}>
        <Container>
        <Row>
        <Col>
        <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
        </div>
        </Col>
        </Row>
        <Row>
        <Col>
        <span className="loaderText loaderLight">Loading... {this.state.percentageLoader}</span>
        </Col>
        </Row>
        </Container>
        </div>
        </React.Fragment>
      )}
    </Suspense>

    
    <Container fluid className={this.state.bodyLoaderCSS}>
      <Row>
      <Col md={12}>
      <Container>
          <Navbar className="justify-content-between" bg="blackbg">
          <Form>
          <Navbar.Brand href="#home">
          <Container>
                        
          </Container>
          </Navbar.Brand>
          </Form>
          <Form>
          <Container>
          <a href="https://t.me/BuccaneerV2"><img src={telegram} className="shareButtonSpacing" /></a>
          <a href="https://twitter.com/BuccaneerV2"><img src={twitter} className="shareButtonSpacing" /></a>
          </Container>
          </Form>
          </Navbar>
          </Container>
      </Col>
      </Row>
      
      <Row className="topviewSpace">
      <Col md={2}>
      </Col>
      <Col md={4} className="text-center">
      <img
      alt=""
      src={buccLogo}
      className="imageSize" />
      </Col>
      <Col md={4}>
      <Container>
      <Row>
          <Col>
          <div class="loading-text HeadlineAdjustment">
          <span class="loading-text-words Headline">
          BUCCANEER
          </span>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="loading-text SubtitleAdjustment">
          <span class="loading-text-words Subtitle">
          Welcome to Privacy
          </span>
          </div>
          </Col>
        </Row>
      </Container>
        </Col>
        <Col md={2}>
        </Col>
        </Row>

      <Row>
      <Col md={3}>
      </Col>
      <Col md={6}>
      <Card variant="dark" bg="blackbg" className="text-center">
      <Card.Body className="adjustCardBody">
                <Card.Text className="cardBody">
                <hr className="whiteHRLINE" />
                <p className="cardFontMain">
                What started as a currency that enabled traceless transactions is now growing into an ever-expanding ecosystem of privacy tools. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
              </Card.Body>
            </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      

      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center adjustCardBody">
              <Card.Header className="cardFont cardTitle cardFontMain">BUCC</Card.Header>
      </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>

      <Row className="text-center limitHeightVideo">
      <Col md={3}>
      </Col>
      <Col>
      <video className="VideoTriangles" width="40%" loop="true" autoplay="autoplay" muted>
        <source src={triangles} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={8}>
        <Card variant="dark" bg="blackbg" className="text-center">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain"></Card.Title>
                <Card.Text className="cardBody">
                <hr className="whiteHRLINE" />
                <p className="cardFontMain paragraphBody">Ethereum's first and only on-chain privacy currency. Unstoppable, immutable. Read more about BUCC and how to use it's companion serverless API Bermuda for untraceable transactions here in the Whitepaper-Manual. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <Container>
                  <Row>
                  <Col md={3}>
                  </Col>
                  <Col>
                  <AwesomeButton type="primary" href="https://info.uniswap.org/pair/0x7772612549f27aa49c83fa59ab726f4799e4ecdc" className="special">Uniswap</AwesomeButton>                  
                  </Col>
                  <Col>
                  <AwesomeButton type="primary" href="https://ipfs.io/ipfs/QmQfDJCw6X2cvgaA3sB3YnyJrjLSgJb1N5xzzC8iszr7Tw" className="special">White Paper</AwesomeButton>
                  </Col>
                  <Col>
                  <AwesomeButton type="primary" href="https://buccaneerv2.web.app/" className="special">Bermuda</AwesomeButton>
                  </Col>
                  <Col md={3}>
                  </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center adjustCardBody">
              <Card.Header className="cardFont cardTitle cardFontMain">SARGASSO</Card.Header>
      </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>

      <Row className="text-center limitHeightVideo">
      <Col md={3}>
      </Col>
      <Col>
      <video className="VideoCoin" loop="true" autoplay="autoplay" muted>
        <source src={coinVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={8}>
        <Card variant="dark" bg="blackbg" className="text-center adjustcardborder">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain"></Card.Title>
                <Card.Text className="cardBody">
                <hr className="whiteHRLINE" />
                <p className="cardFontMain paragraphBody">
                The world's first private farm. Designed and intended for the stable distribution of BUCC, Sargasso's activity, deposits and withdraws are completely private. Detailed manual coming soon. Fully functional now. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <AwesomeButton type="primary" href="https://sargasso.web.app/" className="special">Sargasso</AwesomeButton>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>




      <Row className="space">
      <Col md={3}>
      </Col>
      <Col>
      <Card variant="dark" bg="blackbg" className="text-center adjustCardBody">
              <Card.Header className="cardFont cardTitle cardFontMain">HAVOC</Card.Header>
      </Card>
      </Col>
      <Col md={3}>
      </Col>
      </Row>

      <Row className="text-center limitHeightVideo">
      <Col md={3}>
      </Col>
      <Col>
      <video className="VideoCube" loop="true" autoplay="autoplay" muted>
        <source src={cube} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      <Row>
      <Col md={2}></Col>
        <Col md={8}>
            <Card variant="dark" bg="blackbg" className="text-center marginTop lastCard">
              <Card.Body className="adjustCardBody">
                <Card.Title className="cardFont cardSubtitle cardFontMain"></Card.Title>
                <hr className="whiteHRLINE" />
                <Card.Text className="cardBody">
                <p className="cardFontMain paragraphBody">The world's first unstoppable ETH and ERC20 tumbler. Built on-chain with no auxiliary components, Havok wreaks it. Detailed manual coming soon. Fully functional now. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <AwesomeButton type="primary" href="https://sargasso.web.app/" className="special">Havoc</AwesomeButton>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row>
      <Col md={2}></Col>
        <Col md={8}>
            <Card variant="dark" bg="blackbg" className="text-center marginTop lastCard">
              <Card.Body className="adjustCardBody">
                <p className="cardFontMain paragraphBody">
                Site under construction. Even more, coming soon.
                </p>
              </Card.Body>
            </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
    </>
  );
}
}