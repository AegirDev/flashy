//React Imports
import React, {Component, Suspense} from "react";

import './App.css';
//import './main.scss';
import './loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//General Style Imports
import twitter from './twitterLogo.png';
import telegram from './telegramLogo.png';

//Rebass
import {
  Button,
  Text
} from 'rebass';
import preset from '@rebass/preset';

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

    <Navbar className="text-center">
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Container>
          <Row>
            <Col>
            <a href="https://buccaneer.eth" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>Homepage</Button></a>
            </Col> 
            <Col>
            <a href="https://ipfs.io/ipfs/QmUDSvUDtw1DUvjHbnU18Q8n4nSNo41VAYNM1goE4xE2jP" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>WP</Button></a>
            </Col>
            <Col>
            <a href="https://buccfarm.eth" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>API</Button></a>
            </Col>
            <Col>
            <a href="https://sargasso.web.app/" target="_blank"><Button className="buttonFormat extendFarmButton" theme={preset} variant='outline'>Sargasso</Button></a>
            </Col>
          </Row>
        </Container> 
        <Navbar.Collapse className="justify-content-end">
          <a href="https://t.me/BuccaneerV2"><img src={telegram} className="shareButtonSpacing" /></a>
          <a href="https://twitter.com/BuccaneerV2"><img src={twitter} className="shareButtonSpacing" /></a>
        </Navbar.Collapse>
        </Navbar>

    
    <Container fluid className={this.state.bodyLoaderCSS}>
      
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
      <Container className="text-center">
      <Row>
          <Col>
          <div class="HeadlineAdjustment">
          <span class="Headline">
          BUCCANEER
          </span>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div class="SubtitleAdjustment">
          <span class="Subtitle">
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
                With Buccaneer V2, you can transact privately, gain interest on your bucc holdings and privately tumble ether and erc20 tokens. Soon, 
                you'll be able to transact all assets privately and disclose balances on a voluntary basis. Bringing privacy to ethereum and the larger 
                cryptocurrency sphere is Buccaneer, the number one privacy asset in the world. 
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
              <Card.Header className="cardFont cardTitle cardFontMain">Infinite Privacy</Card.Header>
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
                <p className="cardFontMain paragraphBody">Ethereum's first and only on-chain privacy currency, Buccaneer V2 is an unstoppable and immutable privacy token that allows you to 
                send value on the Ethereum blockchain safely and with peace of mind. Bucc works because
                further transactions obfuscate data internaly and thus, the more wallets that interact with the native BUCC contract, the harder it becomes to track anyone. Since all information is internal, 
                private and hidden, it quickly becomes impossible to track users as data is always changing. The cost of merely tracking one user would involve advanced machine learning, 
                a full list of users interacting with BUCC and going through an assortment of records... all for one user. The idea of all for one and one for all applies to BUCC, it's other users change data and 
                shield you within the network. That's the idea of infinite privacy, the more transactions that happen in BUCC, the safer you are. To properly experience the full level of privacy offered by BUCC, you can use <a href="https://buccapi.eth/">Bermuda</a>, a static and serverless API that allows for the 
                quick and easy transfer of BUCC. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
                <Container>
                  <Row>
                  <Col md={3}>
                  </Col>
                  <Col>
                  </Col>
                  <Col>
                  </Col>
                  <Col>
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
              <Card.Header className="cardFont cardTitle cardFontMain">Traceless</Card.Header>
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
                Besides having ever-evolving data within the contract, BUCC also overwrites and shreds data. This makes it impossible to pick up any trail and this is also true of all privacy related projects 
                that are built off of BUCC. All of them rapidly delete any useful history within the contract, so even querying for it, after the fact becomes impossible. Critics say that all Ethereum 
                transactions have full details disclosed within them and while this is true, they fail to account that every transaction can carry it's own unique payload that can be burned. This is why it is
                impossible to track BUCC. You may be able to find out who did an action with BUCC, but you'll find what they sent or to whom. That's because BUCC burns everything. 
                The perfect example is <a href="http://sargasso.web.app/">Sargasso</a>, which is a private farm. Upon being able to claim your farm rewards, you can privately claim it to any address whitelisted within BUCC, without any trace of the 
                rewards being claimed. More updates are coming to Sargasso soon.
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
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
              <Card.Header className="cardFont cardTitle cardFontMain">Multi-Dimensional</Card.Header>
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
                <p className="cardFontMain paragraphBody">
                Our world is a multi-dimensional one and our data can be too. The strongest aspect to BUCC is that is built on Ethereum, a chain 
                with a secure hashrate and a proven track record. This means there can never be a 51% attack against BUCC's chain, the nodes 
                can never be shut down through government scrutiny and BUCC can always be freely transacted through DEXs. But the real strength 
                lies in the ever expanding monopoly of privacy projects related to BUCC. BUCC is far from just a token or even a private contract, 
                it's a set piece in the entire private cryptocurrency industry, an entire conglomerate of privacy related projects that will continue 
                to expand and continue to make BUCC safer, more secure and in general the entire cryptocurrency commuity better off. To showcase this, 
                a new tumbler named <a href="http://sargasso.web.app/">Havoc</a>, was released for which anyone can use for the monthly subscription cost of just one BUCC per month. This tumbler allows the 
                tumbling of ether, and for the tumbling of any ERC20 tokens on Ethereum. It's secret recipe is the use of a third wallet as a key and since BUCC 
                has it's own private address randomizer, you can rest assured you are using the best tumbler out there in terms of security, privacy and 
                definitely cost. 
                </p>
                </Card.Text>
                <hr className="whiteHRLINE" />
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