//React Imports
import React, {Component, Suspense} from "react";

//CSS
//import './main.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Specific animation inputs
import './CSS/animation_leaves.css';
import './CSS/animation_leaves2.css';
import './CSS/animation_leaves3.css';
import './CSS/changingbackground.css';
import './CSS/loader.css';
import './CSS/button.css';
//import './CSS/Clock.css';
import './CSS/Dice.css';
import './CSS/navMenu.css';

//SCSS
import './SCSS/parallax.scss';
import './SCSS/glitchText.scss';
import './SCSS/codeLoading.scss';

//JS
import {triggerScrollDown, triggerScrollUp} from './JS/parallax.js';
import './JS/animation_isomorphic.js';

//ICONS
import downarrow from './Icons/downarrow.png';
import uparrow from './Icons/uparrow.png';

//IMAGES
import bucc from './Logos/buccGreen.png';
import buccRed from './Logos/buccRed.png';
import buccOrange from './Logos/buccGold.png';
import buccGrey from './Logos/buccGrey.png';

/* BOOTSTRAP IMPORTS */
//Elements
//Layouts
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

     

     {/* The full container containing the parallax element
          Last Edited - 1/23/2021 */}

      <div class="divParallax">
      {/* First Tab
          Last Edited - 1/23/2021 */}
      <section class="background shiftleftright">
      <div class="content-wrapper">

{ /*
      <Navbar className="navbarDesign">
      <Container class="">
      <Row>
      <Col md={1}>
      <img src={bucc} className="navbarLogo" />
      </Col>
      <Col md={2}>
          <Nav.Item>
          <Nav.Link href="https://ipfs.io/ipfs/QmUDSvUDtw1DUvjHbnU18Q8n4nSNo41VAYNM1goE4xE2jP" target="_blank" className="navbarItem">Whitepaper</Nav.Link>
          </Nav.Item>
          
      </Col>
      <Col md={2}>
          <Nav.Item>
          <Nav.Link href="https://buccapi.eth/" className="navbarItem">Bermuda</Nav.Link>
          </Nav.Item>
      </Col>
      <Col md={2}>
          <Nav.Item>
          <Nav.Link href="https://buccfarm.eth/" target="_blank" className="navbarItem">Sargasso</Nav.Link>
          </Nav.Item>
      </Col>
      <Col md={2}>
      <Nav.Item>
      <Nav.Link href="https://bucctumbler.eth/" className="navbarItem" target="_blank">Havok</Nav.Link>
      </Nav.Item>
      </Col>
      <Col md={6}>
      </Col>
      </Row>
      </Container>
      </Navbar>
      */
}

<nav id="menu">
  <ul>
    <li><a href="https://ipfs.io/ipfs/QmUDSvUDtw1DUvjHbnU18Q8n4nSNo41VAYNM1goE4xE2jP" target="_blank">Whitepaper</a></li>
    <li><a href="https://buccapi.eth/" target="_blank">Bermuda</a></li>
    <li><a href="https://buccfarm.eth/" target="_blank">Sargasso</a></li>
    <li><a href="https://bucctumbler.eth/" target="_blank">Havok</a></li>
    <li><a href="https://twitter.com/BuccaneerV2" target="_blank">Twitter</a></li>
    <li><a href="https://t.me/BuccaneerV2" target="_blank">Telegram</a></li>
  </ul>
</nav>
    

      <div class="scanline scanline1"></div>
      <div class="scanline scanline2"></div>
      <div class="scanline scanline3"></div>
      <img alt="Bucc Logo" src={bucc} className="buccfrontpageLogo" />
      <h1 class="mainTitle">Buccaneer V2</h1>
      <br />
      <p class="content-subtitle Subtitle">Welcome to Privacy</p>
          <div className="text-center">
          <img alt="Down Arrow" src={downarrow} className="downArrow mainMenuDownArrow" onClick={triggerScrollDown} />
          </div>
      </div>
      </section>


      <section class="background">
      <div class="content-wrapper paneMenu">
      <div className="text-center">
      <img alt="Up Arrow" src={uparrow} className="upArrow paneUpArrow" onClick={triggerScrollUp} />
      </div>
      <Container class="">
      <Row>
      <Col md={3}>
      <img alt="" src={buccRed} className="tabimageSize" />
      <h1 class="glitch glitchRed" data-text="Bermuda">Bermuda</h1>
      <div id="containerMessage">
      <p class="content-subtitle">
      <i className="contentSubtitleItalic">On-chain, Traceless</i>
      <br />
      <br />
      Bermuda, the serverless API, is your hub for making private transactions. Unlike a server, Bermuda lives on IPFS, so it's unstoppable.
       </p>
       <a href="https://buccapi.eth/" target="_blank" className="linkMostFront">
          <button class="cybr-btn red">Bermuda<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch"><img src={buccRed} className="buttonButtonLogo" /></span>
          </button>
      </a>
      </div>
      </Col>
      <Col md={5} id="animationInput">
      </Col>
      <Col md={3}>
      </Col>
      </Row>
      </Container>
          <div className="text-center">
          <img alt="Down Arrow" src={downarrow} className="downArrow paneArrowDown" onClick={triggerScrollDown} />
          </div>
      </div>
      </section>


      <section class="background secondPane">
      <div class="content-wrapper paneMenu">
      <div className="text-center">
      <img alt="Up Arrow" src={uparrow} className="upArrow paneUpArrow" onClick={triggerScrollUp}  />
      </div>
      <Container class="">
      <Row>
      <Col md={3}>
      <img alt="" src={buccOrange} className="tabimageSize" />
      <h1 class="glitch glitchYellow" data-text="Sargasso">Sargasso</h1>
      <div id="containerMessage">
      <p class="content-subtitle">
      <i className="contentSubtitleItalic">The Private BUCC Farm</i>
      <br />
      <br />
      Earn BUCC for providing Uniswap liquidity, gain and cash out your BUCC in total privacy.
       </p>
       <a href="https://buccfarm.eth/" target="_blank" className="linkMostFront">
          <button class="cybr-btn orange">Sargasso<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch"><img src={buccOrange} className="buttonButtonLogo" /></span>
          </button>
      </a>
      </div>
      </Col>
      <Col md={9} id="animationInput">
      <p class="content-title"></p>
      <div class="leaves" id="leaves">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i> 
      </div>
      <div class="leaves2" id="leaves2">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i> 
      </div>
      <div class="leaves3" id="leaves3">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      </Col>
      </Row>
      </Container>
            <div className="text-center">
            <img alt="Down Arrow" src={downarrow} className="downArrow paneArrowDown" onClick={triggerScrollDown} />
            </div>
      </div>
      </section>

      <section class="background thirdPane">
      <div class="content-wrapper paneMenu">
      <div className="text-center">
      <img alt="Up Arrow" src={uparrow} className="upArrow paneUpArrow lastArrow" onClick={triggerScrollUp} />
      </div>
      <Container class="">
      <Row>
      <Col md={3}>
      <img alt="" src={buccGrey} className="tabimageSize" />
      <h1 class="glitch glitchGrey" data-text="Havok">Havok</h1>
      <div id="containerMessage">
      <p class="content-subtitle">
      <i className="contentSubtitleItalic">The On-chain ETH/ERC-20 Tumbler</i>
      <br />
      <br />
      Tumble your ETH with low fees, waiting times as short as you want them and no set amount limitations. Get creative with your withdraw amounts and timing, nothing can stop you now.
       </p>
       <a href="https://bucctumbler.eth/" target="_blank" className="linkMostFront">
          <button class="cybr-btn grey">Havok<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch"><img src={buccGrey} className="buttonButtonLogo" /></span>
          </button>
      </a>
      </div>
      </Col>
      <Col md={2}>
      </Col>
      <Col md={7}>
      <div id="dice">
    <div id="d4-wrap">
        <div id="d4">
            <div class="d4" data-side="1"><div data-number="2"></div><div data-number="3"></div><div data-number="4"></div></div>
            <div class="d4" data-side="2"><div data-number="1"></div><div data-number="3"></div><div data-number="4"></div></div>
            <div class="d4" data-side="3"><div data-number="1"></div><div data-number="2"></div><div data-number="4"></div></div>
            <div class="d4" data-side="4"><div data-number="1"></div><div data-number="2"></div><div data-number="3"></div></div>
        </div>
    </div>
    <div id="d6-wrap">
        <div id="d6">
            <div class="d6" data-side="1"></div>
            <div class="d6" data-side="2"></div>
            <div class="d6" data-side="3"></div>
            <div class="d6" data-side="4"></div>
            <div class="d6" data-side="5"></div>
            <div class="d6" data-side="6"></div>
        </div>
    </div>
    <div id="d8-wrap">
        <div id="d8">
            <div class="d8" data-side="1"></div>
            <div class="d8" data-side="2"></div>
            <div class="d8" data-side="3"></div>
            <div class="d8" data-side="4"></div>
            <div class="d8" data-side="5"></div>
            <div class="d8" data-side="6"></div>
            <div class="d8" data-side="7"></div>
            <div class="d8" data-side="8"></div>
        </div>
    </div>
    <div id="d10-wrap">
        <div id="d10">
            <div class="d10" data-side="1"></div>
            <div class="d10" data-side="2"></div>
            <div class="d10" data-side="3"></div>
            <div class="d10" data-side="4"></div>
            <div class="d10" data-side="5"></div>
            <div class="d10" data-side="6"></div>
            <div class="d10" data-side="7"></div>
            <div class="d10" data-side="8"></div>
            <div class="d10" data-side="9"></div>
            <div class="d10" data-side="10"></div>
        </div>
    </div>
    <div id="d12-wrap">
        <div id="d12">
            <div class="d12" data-side="1"></div>
            <div class="d12" data-side="2"></div>
            <div class="d12" data-side="3"></div>
            <div class="d12" data-side="4"></div>
            <div class="d12" data-side="5"></div>
            <div class="d12" data-side="6"></div>
            <div class="d12" data-side="7"></div>
            <div class="d12" data-side="8"></div>
            <div class="d12" data-side="9"></div>
            <div class="d12" data-side="10"></div>
            <div class="d12" data-side="11"></div>
            <div class="d12" data-side="12"></div>
        </div>
    </div>
    <div id="d20-wrap">
        <div id="d20">
            <div class="d20" data-side="1"></div>
            <div class="d20" data-side="2"></div>
            <div class="d20" data-side="3"></div>
            <div class="d20" data-side="4"></div>
            <div class="d20" data-side="5"></div>
            <div class="d20" data-side="6"></div>
            <div class="d20" data-side="7"></div>
            <div class="d20" data-side="8"></div>
            <div class="d20" data-side="9"></div>
            <div class="d20" data-side="10"></div>
            <div class="d20" data-side="11"></div>
            <div class="d20" data-side="12"></div>
            <div class="d20" data-side="13"></div>
            <div class="d20" data-side="14"></div>
            <div class="d20" data-side="15"></div>
            <div class="d20" data-side="16"></div>
            <div class="d20" data-side="17"></div>
            <div class="d20" data-side="18"></div>
            <div class="d20" data-side="19"></div>
            <div class="d20" data-side="20"></div>
        </div>
    </div>
</div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
      </Col>
      </Row>
      </Container>
      </div>
      </section>
      </div>

      <Suspense>
    { this.state.loader && (
        <React.Fragment>
        <div className={this.state.loaderCSS}>
        <Container className="text-center">
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

    </>
  );
}
}