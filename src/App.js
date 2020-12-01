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
        <Container className="text-center">
          <Row>
            <Col>
            <a href="https://buccaneer.eth" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>Homepage</Button></a>
            </Col> 
            <Col>
            <a href="https://ipfs.io/ipfs/QmUDSvUDtw1DUvjHbnU18Q8n4nSNo41VAYNM1goE4xE2jP" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>WP</Button></a>
            </Col>
            <Col>
            <a href="https://buccapi.eth/" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>API</Button></a>
            </Col>
            <Col>
            <a href="https://buccfarm.eth/" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>Sargasso</Button></a>
            </Col>
            <Col>
            <a href="https://bucctumbler.eth/" target="_blank"><Button className="buttonFormat" theme={preset} variant='outline'>Havok</Button></a>
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
                <Text
                  fontSize={[ 2 ]}
                  color='primary'
                  className="text">
                Using Buccaneer V2, you can transact privately, gain interest and privately tumble Ether and ERC-20 tokens. Soon 
                you'll be able to transact Ether and tokens privately, as well as hide balances. The goal of Buccaneer V2 is to bring security to the Ethereum ecosphere and the larger 
                cryptocurrency world as well. Buccaneer V2 aims to become the standard privacy protocol.
                <br /><br />
                The supply of BUCC is ten million, more can never be minted or burned. Currently 99.7% of the supply is locked and will remain locked until December 
                30th. The token lock contract can be viewed <a href="https://etherscan.io/address/0xCEaC66ab21240FeD157391b2A792be37FbF5c6B9#code" target="_blank">here</a>. 
                Token locks will be implemented on a monthly basis, with supply, after monthly locks going into an OTC for liquidity and various farming pairs on different exchanges.
                Liquidity is currently locked until October 4th of 2021.
                </Text>
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
              <Card.Header className="cardFont cardTitle cardFontMain">Resistant</Card.Header>
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
                <hr className="whiteHRLINE" />
                <Text
                  fontSize={[ 2 ]}
                  color='primary'
                  className="text">
                Ethereum's first and only on-chain privacy currency, Buccaneer V2 is an unstoppable contract chain that only gets stronger and stronger the more one interacts with it. 
                Every transaction further appends to the transaction chain but removes previous transactions of the individual user. 
                Each time you interact with BUCC through <a href="https://buccapi.eth/" target="_blank">Bermuda</a>, you are covering all previous transactions. The power 
                of BUCC is that all previous addresses that have interacted with it, are all the possibilities with which a user could have sent to. This 
                process gives you factorial function privacy, where the sum of all possibilities continually increase with usage, making the narrowing down of a recipient, increasingly difficult and thus mathematically impossible.
                <br />
                <br />
                The factorial space makes BUCC stronger than any other privacy coin, even Monero. Other ring tokens only offer a small ring of plausible users with every transaction and thus, a smaller realm of possiblities than BUCC.  
                Whereas BUCC offers the whole realm of possibilities through all previous contract interactors, making the factorial space or rather the tail end of the product of the variable of N, significantly 
                 larger. This means BUCC naturally gets stronger; the more it is used and the more addresses there are interacting with it. The more history there is, the more secure BUCC actually becomes, just as it is with many chains today. Further, it's 
                on-chain presence means it is truly censorship resistant. To test it out, you can use <a href="https://buccapi.eth/" target="_blank">Bermuda</a>, which is the serverless 
                API of BUCC that allows for the quick and easy use of BUCC privately.
                </Text>
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
              <Card.Header className="cardFont cardTitle cardFontMain">Secure</Card.Header>
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
                <hr className="whiteHRLINE" />
                <Text
                  fontSize={[ 2 ]}
                  color='primary'
                  className="text">
                Ethereum's greatest weakness is in its bloat. This is why data deletion is allowed (through overwriting) and this is what BUCC uses to secure transactions. 
                Besides having ever-evolving data within the contract, BUCC and all BUCC products themselves also overwrite and shred data, leaving no traces. 
                This makes it impossible to pick up any trail as 
                inputs are skewed and internal contract data is burned. All of BUCC, overwrites its data, thus making it the platnium standard of security.
                <br /><br />
                The BUCC farm is the perfect example of this, besides evenly distributing rewards for holders of the token, it also provides a liquidity shield for users. 
                All token fees on the network naturally go into the farm to always offer a steady supply for farmers. The farm 
                itself, <a href="https://buccfarm.eth/"  target="_blank">Sargasso</a> is actually a private farm and allows for private withdrawls of rewards to any address you choose. Tokens are 
                locked into Sargasso and can only come out through liquidity mining; with the total token supply being shown at all times as well as additional farmers.
                </Text>
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
              <Card.Header className="cardFont cardTitle cardFontMain">Immutable</Card.Header>
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
                <Text
                  fontSize={[ 2 ]}
                  color='primary'
                  className="text">
                BUCC can never be taken down since its nodes are Ethereum's nodes and Ethereum DEXs can always host it. 
                BUCC can even meld with other contracts and other assets, protecting them from data spying. To prove so, the BUCC tumbler has been created, allowing the 
                tumbling of not just Ethereum, but also of other ERC-20 tokens. It does this significantly cheaper than any other tumbler. For just one BUCC a month you can be subscribed 
                and can tumble an infinite amount of any asset. 
                <br /><br />
                The tumbler uses BUCC's address scrambler and overwriting properties, to shield the key and withdrawl addresses from chain analysis. 
                Easy to use and completely secure, the BUCC tumbler, otherwise known as <a href="https://bucctumbler.eth/" target="_blank">Havok</a>, has had 
                its contract verified for the community to see and can be viewed <a href="https://etherscan.io/address/0x0ffaa8eeb2ee18c9174e4c5d6af6ce48199c6879" target="_blank">here</a>. 
                Rest assured, when you're using BUCC, you are using the highest quality of privacy protection offered anywhere in the crypto world, period.
                </Text>
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