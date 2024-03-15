import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import arrowB from '../arrow-up-right-svgrepo-com.svg';
import arrowW from '../arrow-up-right-svgrepo-com (1).svg';
// import {  } from 'react-router-dom';
import profileimg from '../components/bakg.png';
import { jwtDecode } from 'jwt-decode';

const google = window.google;

function Home() {
    // const history = useHistory();
    const [isGoogleScriptLoaded, setIsGoogleScriptLoaded] = useState(false);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => setIsGoogleScriptLoaded(true);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (isGoogleScriptLoaded) {
            window.onGoogleLibraryLoad = () => {
                google.accounts.id.initialize({
                    client_id: "512163751841-3ckmnfpdsbv9t6i2b1hr4qhqpv2tmtuk.apps.googleusercontent.com",
                    callback: handleCallbackResponse
                });

                google.accounts.id.renderButton(
                    document.getElementById("signInDiv"),
                    { theme: "outline", size: "large" }
                );
            };
        }
    }, [isGoogleScriptLoaded]);

    function handleCallbackResponse(response) {
        console.log("Encode JWT : " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
        setIsLoggedIn(true);
        const signInDiv = document.getElementById("signInDiv");
        if (signInDiv) {
            signInDiv.hidden = true;
        }
        window.location.href = '/profile';
    }

    function handleSignOut() {
        setUser({});
        setIsLoggedIn(false);
        const signInDiv = document.getElementById("signInDiv");
        if (signInDiv) {
            signInDiv.hidden = false;
        }
    }

    return (
        <div className='border-cont' style={{ backgroundImage: `url(${profileimg})`, backgroundRepeat: 'repeat', backgroundSize: '750px' }}>
            <div className="App" >
                <header className="App-header">
                    <div className='border-div'>
                        <div className='home-cont'>
                            <div className='head-cont'>
                                <div className='sub-head-cont' style={{ padding: "2%" }} >
                                    <h1 style={{ fontSize: "7vh" }}>charcha</h1>
                                    {isLoggedIn ? (
                                        <div>
                                            <button onClick={handleSignOut}>Logout</button>
                                            <h3 style={{ marginTop: "15%" }}>Hi {user.name}</h3>
                                        </div>
                                    ) : (
                                        <div style={{ padding: "5%" }}>
                                            <Link to="/login">
                                                {/* <img src={User} alt="User Sign In" style={{ height: "50px", marginTop: "2.5%", cursor: "pointer", display: 'flex', flex: 'row-reverse' }} /> */}
                                            </Link>
                                            <div id="signInDiv" style={{ width: "50px" }}></div>
                                            <h3 style={{ textWrap: "wrap", position: "relative" }}>Hi,sign in to continue.</h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='rows'>
                                <div className='row1'>
                                    <div className='child-row1' style={{ backgroundColor: "rgb(165, 216, 216)" }}>
                                        <div className='sub-head-cont'>
                                            <h1>AboutUs</h1>
                                            <img src={arrowB} alt={"arrow"} style={{ height: "60px", marginLeft: "53%" }} />
                                        </div>
                                        Our project, "charcha" aims to provide companies and creators with a tool to accurately get an Idea of the overall customer reception and public opinion of their product(songs,game,movies,books) . Providing better insights by aggregating data from various sources, such as user reviews, ratings and social media mentions(x, threads ,imd, goodreads  etc.). This will further enable users to make informed decisions about which product to push and marketing flaws.
                                        We plan to create a subscription model for webscraping the sites using an ml model for processing the user sentiment and displaying it to the user in informative formats like charts graphs and statistics.
                                    </div>
                                    <div className='child-row2' style={{ backgroundColor: "rgb(123, 112, 255)", color: "white", borderRadius: "6%" }}>
                                        <div className='sub-head-cont'>
                                            <h1>Services</h1>
                                            <img src={arrowW} alt={"arrow"} style={{ height: "60px", marginLeft: "55%" }} />
                                        </div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        <br />
                                        <div className='button-cont-1' >
                                            <button style={{ backgroundColor: "rgb(165, 216, 216)", fontSize: "16px" }}>MatchPro</button>
                                            <button style={{ backgroundColor: "rgb(237, 177, 227)", fontSize: "16px" }}>Style Suggest</button>
                                        </div>
                                        <div className='button-cont-2' >
                                            <button style={{ backgroundColor: "rgb(245, 172, 172)", fontSize: "16px" }}>MatchPro</button>
                                            <button style={{ backgroundColor: "rgb(147, 177, 255)", fontSize: "16px" }}>Style Suggest</button>
                                            <button style={{ backgroundColor: "rgb(159, 223, 165)", fontSize: "16px" }}>abcde</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row2'>
                                    <div className='child-row1' style={{ border: 'solid 2px black', height: "58%" }}>
                                        <div className='sub-head-cont'>
                                            <h2>introducing</h2>
                                            <img src={arrowB} alt={"arrow"} style={{ height: "60px", marginLeft: "50%" }} />
                                        </div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        <button style={{ backgroundColor: "rgb(173, 255, 0)", fontSize: "16px", fontWeight: "bolder" }}>try charcha for free</button>
                                    </div>
                                    <div className='child-row2' style={{ backgroundColor: "rgb(48, 48, 48)", fontSize: "16px", color: "rgb(165, 216, 216)", borderRadius: "12%" }}>
                                        <div className='child-row-2-cont'>
                                            <div style={{ fontSize: "100px", fontWeight: "bolder", margin: "2%" }}>
                                                20%
                                            </div>
                                            <div style={{ margin: "2%" }}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                                            </div>
                                        </div>

                                        <button style={{ backgroundColor: "rgb(165, 216, 216)", fontSize: "16px", fontWeight: "bolder" }}>sign up and save 20%</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Home;
