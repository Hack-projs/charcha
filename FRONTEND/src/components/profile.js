import React from 'react';
import { Link } from 'react-router-dom';
import { AgChartsReact } from 'ag-charts-react'; // Import removed to resolve warning
import './App.css';
import arrowB from '../arrow-up-right-svgrepo-com.svg';
import arrowW from '../arrow-up-right-svgrepo-com (1).svg';
import profileimg from '../components/bakg.png';
import User from '../user-circle-svgrepo-com.svg';

function Profile() {
    // Removed unused useEffect hook

    // Removed unused chartOptions and setChartOptions

    const ChartExample = () => {
        const chartOptions = {
            data: [
                { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
                { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
                { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
                { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
                { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
                { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
            ],
            series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
        };

        return <AgChartsReact options={chartOptions} />;
    };

    return (
        <div className='border-cont' style={{ backgroundImage: `url(${profileimg})`, backgroundRepeat: 'repeat', backgroundSize: '750px' }}>
            <div className="App">
                <header className="App-header">
                    <div className='border-div'>
                        <div className='home-cont'>
                            <div className='head-cont'>
                                <div className='sub-head-cont'>
                                    <h1>charcha</h1>
                                    <Link to="/login">
                                        <img src={User} alt="User Sign In" style={{ height: "50px", marginLeft: "480px", marginTop: "2.5%", cursor: "pointer" }} />
                                    </Link>
                                    <div id="signInDiv"></div>
                                    <div>
                                        <h3 style={{ marginTop: "15%" }}>Hi, sham</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='rows'>
                                <div className='row1'style={{flex:"50%"}}>
                                    <div className='child-row1' style={{ backgroundColor: "rgb(165, 216, 216)" }}>
                                        <div className='sub-head-cont'>
                                            <h1>AboutUs</h1>
                                            <img src={arrowB} style={{ height: "60px", marginLeft: "53%" }} />
                                        </div>
                                        Our project, "charcha" aims to provide companies and creators with a tool to accurately get an Idea of the overall customer reception and public opinion of their product(songs,game,movies,books) . Providing better insights by aggregating data from various sources, such as user reviews, ratings and social media mentions(x, threads ,imd, goodreads  etc.). This will further enable users to make informed decisions about which product to push and marketing flaws.
                        We plan to create a subscription model for webscraping the sites using an ml model for processing the user sentiment and displaying it to the user in informative formats like charts graphs and statistics.
                                    </div>
                                    <div className='child-row2' style={{ backgroundColor: "rgb(123, 112, 255)", color: "white", borderRadius: "6%" }}>
                                        <div className='sub-head-cont'>
                                            <h1>Services</h1>
                                            <img src={arrowW} style={{ height: "60px", marginLeft: "55%" }} />
                                        </div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                </div>
                                <div className='row2'style={{flex:"50%"}}>
                                    <div className='child-row2' style={{ backgroundColor: "rgb(48, 48, 48)", fontSize: "16px", color: "rgb(165, 216, 216)", borderRadius: "12%" }}>
                                    <h1>Search</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                                    </div>
                                    <div className='child-row1' style={{ border: 'solid 2px black', height: "58%" }}>
                                        <div className='sub-head-cont'>
                                            <h2>analysis</h2>
                                            <img src={arrowB} style={{ height: "60px", marginLeft: "50%" }} />
                                        </div>
                                        <button style={{ backgroundColor: "rgb(173, 255, 0)", fontSize: "16px", fontWeight: "bolder" }}>pie charts</button>
                                        <button style={{ backgroundColor: "rgb(173, 255, 0)", fontSize: "16px", fontWeight: "bolder" }}>bar charts</button>

                                        <ChartExample style={{height:"10px"}}/>
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

export default Profile;
