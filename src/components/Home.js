import React from 'react'
import $ from "jquery";
import { Helmet } from 'react-helmet'
import 'popper.js'
import './js/plugin.js'
class Home extends React.Component {
    componentDidMount() {
        $(document).ready(function () {

            setTimeout(function () {
                $('body').addClass('loaded');
            }, 100);

        });
        // if (typeof window !== `undefined`) {
        //     $(selector).blablabla();
        //   }
    }
    render() {
        return (
            <div>
                <Helmet title="Home" defer={false}>
                <script src="./js/plugin.js"></script>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                    <meta name="author" content="Idesi"/>
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                    <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"/>
                    <link rel="apple-touch-icon" sizes="114x114" src="assets/icon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" src="assets/icon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" src="assets/icon/favicon-16x16.png"/>
                    <link rel="mask-icon" href="assets/icon/safari-pinned-tab.svg" color="#9f8575"/>
                    <meta name="msapplication-TileColor" content="#9f8575"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <script>
                    var base_url = '';
                                                            
                    </script>
                    <meta name="generator" content="WPML ver:3.9.4 stt:1,3,41;" />
	                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
                    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
                    <script src="./js/plugin.js"/>
                </Helmet>
                    <body class="home page-template page-template-front-page page-template-front-page-php page page-id-6">
                        <div id="loader-wrapper">
                            <div id="loader"></div>


                            <div class="loader-section section-left"></div>
                            <div class="loader-section section-right"></div>
                        </div>
                        <div id="fullpage">
    <div class="mobile-menu animate">
        <div class="row">
            <div class="col-12">
                <div class="row d-flex align-content-center flex-wrap menu-row">
					<div class="col-12"><a class="animate-fast" href="index.html">Home</a></div>
					<div class="col-12"><a class="animate-fast" href="http://clapat.ro/themes/hervin-wordpress/creative-portfolio/">Projects</a></div>
					<div class="col-12"><a class="animate-fast" href="about.html">About Us</a></div>
					<div class="col-12"><a class="animate-fast" href="http://clapat.ro/themes/hervin-wordpress/contact/">Contact</a></div>
                </div>
            </div>
        </div> 
    </div>
    <div class="transparent fixed-menu animate">
        <div class="container-fluid">
            <div class="row">
                <a class="logo-link" href="index.html">
                    {/* <img src={require("./assets/img/logo.svg")} height="40" alt=""/> */}
                    
                </a>
                <div class="ml-auto menu-desktop">
                    <ul class="list-inline" id="nav">
						<li class="list-inline-item"><a class=""  href="index.html">Home</a></li>
						<li class="list-inline-item"><a class=""  href="http://clapat.ro/themes/hervin-wordpress/creative-portfolio/">Projects</a></li>
						<li class="list-inline-item"><a class=""  href="about.html">About Us</a></li>
						<li class="list-inline-item"><a class=""  href="http://clapat.ro/themes/hervin-wordpress/contact/">Contact</a></li>
					</ul>
                </div> 
                <div class="ml-auto menu-mobile">
                    <div class="toggle">
                        <input data-group="1" type="checkbox"/>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="white fixed-menu animate">
        <div class="container-fluid">
            <div class="row">
                <a class="logo-link" href="index.html">
                    {/* <img src="assets/img/logodark.svg" height="40" alt=""/> */}
                    {/* <img  src={require('./assets/img/logodark.svg')} height="40" alt=""/> */}
                </a>
               <div class="ml-auto menu-desktop">
                    <ul class="list-inline" id="nav">
						<li class="list-inline-item"><a class=""  href="index.html">Home</a></li>
						<li class="list-inline-item"><a class=""  href="http://clapat.ro/themes/hervin-wordpress/creative-portfolio/">Projects</a></li>
						<li class="list-inline-item"><a class=""  href="about.html">About Us</a></li>
						<li class="list-inline-item"><a class=""  href="http://clapat.ro/themes/hervin-wordpress/contact/">Contact</a></li>
					</ul>
                </div> 
                <div class="ml-auto menu-mobile">
                    <div class="toggle">
                        <input data-group="1" type="checkbox"/>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>    

    
    <div class="slogan-text animate-fast">
        <h1 class="main-text">
            <p class="main-text">CREATING SPACES<br />
DESIGNED TO FEEL RIGHT<br />
</p>
        </h1>
        <div class="small-text">
            Discover our products 
            {/* <img class="scroll-arrow" src="assets/img/icon_scroll_light.svg" alt=""/> */}
            <img class="scroll-arrow" src={require('./assets/img/icon_scroll_light.svg')} alt="cap"/>
        </div>
    </div>

    <div class="inner-section">
        <div class="gradient animate"></div>
        <div class="section to-animate animated home-section">
            <div class="row animate minus-margin">
                <div class="col-md-8 full-height slide-up">
                                        <div class="image-container" 
                                        // style="background-image: url('assets/uploads/blue.png')"\gf]=r
                                        >
                                                <img src={require('./assets/uploads/blue.png')} alt="cap"/>
                                        </div>
                                    </div>
                <div class="col-md-12 mobile-slideshow">
                    <div class="row">
                                                        <div class="col-sm-4">
                                    <div class="row">
                                        <div class="col-3 col-sm-12 d-flex align-content-center align-items-center mobile-images">
                                            {/* <img src="assets/img/img_mobilehome_pillar_01.svg" alt=""/> */}
                                            <img src={require('./assets/img/img_mobilehome_pillar_01.svg')} alt="cap"/>
                                        </div>
                                        <div class="col-9 col-sm-12 d-flex align-content-center flex-wrap one-info">
                                            <h2>Stunning Design</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                                            <div class="col-sm-4">
                                    <div class="row">
                                        <div class="col-3 col-sm-12 d-flex align-content-center align-items-center mobile-images">
                                            {/* <img src="assets/img/img_mobilehome_pillar_02.svg" alt=""/> */}
                                            <img src={require('./assets/img/img_mobilehome_pillar_02.svg')} alt="cap"/>
                                        </div>
                                        <div class="col-9 col-sm-12 d-flex align-content-center flex-wrap one-info">
                                            <h2>Natural materials</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                                            <div class="col-sm-4">
                                    <div class="row">
                                        <div class="col-3 col-sm-12 d-flex align-content-center align-items-center mobile-images">
                                            {/* <img src="assets/img/img_mobilehome_pillar_03.svg" alt=""/> */}
                                            <img src={require('./assets/img/img_mobilehome_pillar_03.svg')} alt="cap"/>
                                        </div>
                                        <div class="col-9 col-sm-12 d-flex align-content-center flex-wrap one-info">
                                            <h2>Personal Touch</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                                </div>
                </div>
                <div class="col-md-4 full-height slide-down slideshow">
                    <div class="slider-nav">
                        <div class="slides">
                            <ul>
                            </ul>
                        </div>
                    </div>
                    <div class="slides-container">
                                                        <div class="image-container" 
                                                        // style="background-image: url('assets/uploads/greencrop.jpg'); background-position: bottom"
                                                        >
                                                                <img src={require('./assets/uploads/greencrop.jpg' )} style={{backgroundPosition: 'bottom'}} alt="cap"/>
                                    <div class="information animate-fast">
                                        <h2>Stunning Design</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                                            <div class="image-container" 
                                                            // style="background-image: url('assets/uploads/mbathf.jpg'); background-position: bottom"
                                                            >
                                                                     <img src={require('./assets/uploads/mbathf.jpg')} alt="cap"/>
                                    <div class="information animate-fast">
                                        <h2>Natural materials</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                                            <div class="image-container" 
                                                            // style="background-image: url('assets/uploads/marbletile4.jpg'); background-position: bottom"
                                                            >
                                                                 <img src={require('./assets/uploads/marbletile4.jpg')} alt="cap"/>
                                    <div class="information animate-fast">
                                        <h2>Personal Touch</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                                </div>
                </div>
            </div>
        </div>
                        <div class="section to-animate">
                    <div class="row pad-margin animate">
                        <div class="col-md-8 full-height slide-up">
                            <div class="image-container" 
                            // style="background-image: url('assets/uploads/green.png')"
                            >
                                 <img src={require('./assets/uploads/green.png')} alt="cap"/>
                            </div>
                        </div>
                        <div class="col-md-4 full-height slide-down d-flex align-items-center">
                            <div class="content animate-fast">
                                <h2>Kitchens</h2>
                                <span class="price-container">Stunning Natural Stone Kitchens</span>
                                <p class="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
</p>
                                <a href="kitchens/index.html" class="learn-more animate-fast">View all kitchens</a>
                            </div>
                        </div>
                    </div>
                </div>
                            <div class="section to-animate">
                    <div class="row pad-margin animate">
                        <div class="col-md-8 full-height slide-up">
                            <div class="image-container" 
                            // style="background-image: url('assets/uploads/yellow.png')"
                            >
                                 <img src={require('./assets/uploads/yellow.png')} alt="cap"/>
                            </div>
                        </div>
                        <div class="col-md-4 full-height slide-down d-flex align-items-center">
                            <div class="content animate-fast">
                                <h2>Bathrooms</h2>
                                <span class="price-container">Elegant Design</span>
                                <p class="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                <a href="bathrooms/index.html" class="learn-more animate-fast">View all bathrooms</a>
                            </div>
                        </div>
                    </div>
                </div>




    {/* <!-- Footer 3 sections -->            */}
<section class="section footer">
    <div class="row pad-margin">
        <div class="col-sm-4 full-height pop-up pop-1 animate" onclick="goToLink('portfolio.html')">
            <div class="image-container">
                <div class="inner-box animate">
                    <div class="border"></div>
                    <div class="inner-border-box animate" 
                    // style={{"background-image: url('assets/uploads/red.png')"}}
                    >
                         <img src={require('./assets/uploads/red.png')} alt="cap"/>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner-text">
                        Portfolio           
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 full-height pop-up pop-2 animate" onclick="goToLink('about.html')">
            <div class="image-container">
                <div class="inner-box animate">
                    <div class="border"></div>
                    <div class="inner-border-box animate" 
                    // style="background-image: url('assets/uploads/purple.png')"
                    >
                         <img src={require('./assets/uploads/purple.png')} alt="cap"/>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner-text">
                        Get To Know More About Us                     
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 full-height pop-up pop-3 animate" onclick="goToLink('contact.html')">
            <div class="image-container">
                <div class="inner-box animate">
                    <div class="border"></div>
                    <div class="inner-border-box animate" 
                    // style={{backgroundImage: "url('./assets/uploads/1hero.jpg')"}}
                    >
                         <img src={require('./assets/uploads/1hero.jpg')} alt="cap"/>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner-text">
                        CONTACT US                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>    
</div>
</div>
                    </body>
            </div>
        );
    }
}
                                                    
export default Home;