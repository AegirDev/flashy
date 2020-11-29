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
                What started as a currency that enabled traceless transactions is now growing into an ever-expanding ecosystem of privacy tools. 
                With Buccaneer V2, you can transact privately, gain interest on your bucc holdings and privately tumble ether and erc20 tokens. Soon, 
                you'll be able to transact all assets privately and disclose balances on a voluntary basis. Bringing privacy to ethereum and the larger 
                cryptocurrency sphere is Buccaneer, the number one privacy asset in the world. 
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
              <Card.Header className="cardFont cardTitle cardFontMain">Factorial Security</Card.Header>
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
                Ethereum's first and only on-chain privacy currency, Buccaneer V2 is an unstoppable protocol that gets stronger and stronger, the longer it's "chain" gets. 
                Every transaction further complicates, twists and turns the ongoing chain and new transactions are appended to the end of the contract chain, like in other 
                blockchains but with a twist. 
                By interacting with BUCC, your future <a href="https://buccapi.eth/" target="_blank">Bermuda</a> transactions have a veil of stealth. The power 
                of BUCC, is that all previous addresses that have interacted with the contract before are all the possibilities that you could have sent to. This 
                is a factorial function, where the sum of all possibilities make the narrowing down of just one possibility, mathematically impossible. This is 
                the same premise behind many major cryptocurrencies today and it's why most major coins work the way, they do today.  
                <br />
                <br />
                This makes BUCC stronger than Monero or other competitors because Monero only offers a small ring infrastructure and a small realm of possiblities, 
                whereas BUCC offers the whole realm of all previous contract interactors, making the factorial space or rather the tail end of the product significantly 
                and increasingly larger. This means BUCC naturally gets stronger; the more you use it, the more addresses there are interacting with it and the interval 
                of space in between your transactions. The more history there is, the more secure BUCC actually becomes, just as it is with many chains today. Further, it's 
                on-chain presence means it is truly censorship resistant. To test it out, you can use <a href="https://buccapi.eth/" target="_blank">Bermuda</a>, which is the serverless 
                API, directly linked to the BUCC contract that allows for quick and easy use to send BUCC privately.
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
              <Card.Header className="cardFont cardTitle cardFontMain">Overwriting</Card.Header>
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
                Ethereum's greatest weakness is its bloat, which is why it allows data deletion and overwriting and it's precisely this weakness that BUCC ruthlessly exploits. 
                Besides having ever-evolving data within the contract, BUCC and all BUCC products themselves also overwrite and shred data. This makes it impossible to pick up any trail as 
                inputs are skewed and internal contract data is burned. All BUCC projects overwrite all data after every transaction, which true it does increase gas cost, 
                but it is exactly this that makes it the highest quality of protection for the average user. Protection and security are what all of BUCC products aim to do 
                and naturally removing traces on a public blockchain is difficult, but not impossible due to the overwriting nature of BUCC contracts. 
                <br /><br />
                BUCC's strength is the fact that additional contracts can be built and scaled out to its internal contract and in fact this could apply to almost anything, contract wise. So much so, that there 
                is in fact a BUCC farm, to evenly distribute rewards for holders of the token. As well as fairly distributing, it also provides a liquidity shield to prevent panics but also to always offer 
                transactional value in the token. All token fees on the network naturally go into the farm to always offer a steady supply for holders and ensure that there will always be a permanent liquidity base. 
                If BUCC has any weakness, it could be said to be the liquidity aspect, never the contractual integrity or sophistication of the privacy protocol. The farm 
                itself, <a href="https://buccfarm.eth/"  target="_blank">Sargasso</a> is actually a private farm and allows for private withdrawls of rewards to any address you choose. Tokens are 
                locked into Sargasso and can only come out through mining; with the total token supply being shown as well as additional farmers, so you know you're never alone with BUCC.
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
              <Card.Header className="cardFont cardTitle cardFontMain">The Swarm</Card.Header>
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
                BUCC can never be taken down. Its nodes are Ethereum's nodes. If it's exchanges blacklist it, another will accept it willingly or unwillingly, 
                since it can live on any dex. It always gets continually stronger so it cannot be cracked. It can even meld with other contracts and other assets, 
                protecting them against authoritarianism and corruption, acting as a shield for Ethereum. To prove so, the <a href="https://bucctumbler.eth/" target="_blank">BUCC tumbler</a> has been created, allowing the 
                tumbling not just of Ethereum, but also of other ERC20 tokens and for significantly cheaper than any other tumbler. For just one BUCC a month, you can stay 
                subscribed and even help the BUCC community, since all fees go to the BUCC farm. This is just one of the many projects that can expand off of BUCC itself. 
                The tumbler uses BUCC's address scrambler and overwriting properties to shield the key and withdrawl addresses from chain analysis. 
                Easy to use and completely secure, the BUCC tumbler, otherwise known as <a href="https://bucctumbler.eth/" target="_blank">Havok</a> has had 
                its contract data opened for the community to see and trust and can be viewed <a href="https://etherscan.io/address/0x0ffaa8eeb2ee18c9174e4c5d6af6ce48199c6879" target="_blank">here</a>. 
                Rest assured, when you're with BUCC, you are using the highest quality of privacy protection offered anywhere in the crypto world, period.
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