import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { AgChartsReact } from 'ag-charts-react'; // Import removed to resolve warning
import './App.css';
import arrowB from '../arrow-up-right-svgrepo-com.svg';
import arrowW from '../arrow-up-right-svgrepo-com (1).svg';
import profileimg from '../components/bakg.png';
import User from '../user-circle-svgrepo-com.svg';
import ReactPlayer from 'react-player';
import animation from '../Dribbble-Analyse (2).mp4';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Profile() {
    const [searchValue,setSearchValue] = useState(" ");
    const [chartType, setChartType] = useState(null);
    // Removed unused useEffect hook

    // Removed unused chartOptions and setChartOptions
    const handlecall = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        //   fetchWeather(city);
        const productinfo = createP
        }
      };

    const renderBarChart = () => {
        const chartOptions = {
            data: [
                { review: 'Positive', x_position: 2.3, frequency: 162000 },
                { review: 'Neutral', x_position: 6.3, frequency: 302000 },
                { review: 'Negative', x_position: 16.2, frequency: 800000 },
            ],
            series: [{ type: 'bar', xKey: 'review', yKey: 'frequency' }],
        };
        return <AgChartsReact options={chartOptions} />;
    };

    const renderPieChart = () => {
        const chartOptions = {
            data: [
                { asset: 'Positive', amount: 162000 },
                { asset: 'Neutral', amount: 302000 },
                { asset: 'Negative', amount: 800000 },
            ],
            series: [
                {
                    type: 'pie',
                    calloutLabelKey: 'asset',
                    angleKey: 'amount',
                },
            ],
        };
        return <AgChartsReact options={chartOptions} />;
    };

    const renderAnimation = () => {

        return (
            <div style={{ borderRadius: '20px', overflow: 'hidden', marginTop: "10px" }}>
                <ReactPlayer
                    //url="https://cdn.dribbble.com/users/8779526/screenshots/16634851/media/5fde2627668db81fd25b315de076bfd1.mp4"
                    url={animation}
                    controls={false} // Remove controls
                    autoPlay  // Autoplay the video
                    loop
                    width="100%"
                    height="100%"


                />
            </div>
        );
        // Return the animation SVG here

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
                                        <h3 style={{ marginTop: "25px", marginLeft: "-150px", marginRight: "15px" }}>Hi, shambhavi</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='rows'>
                                <div className='row1' style={{ flex: "50%" }}>
                                    <div className='child-row1' style={{ backgroundColor: "rgb(104, 142, 161)", height: "94%", color: "white" }}>
                                        <div className='sub-head-cont'>
                                            <h1>Profile</h1>
                                            <img src={arrowW} style={{ height: "60px", marginLeft: "53%" }} />
                                        </div>
                                        Our project, "charcha" aims to provide companies and creators with a tool to accurately get an Idea of the overall customer reception and public opinion of their product(songs,game,movies,books) . Providing better insights by aggregating data from various sources, such as user reviews, ratings and social media mentions(x, threads ,imd, goodreads  etc.). This will further enable users to make informed decisions about which product to push and marketing flaws.
                                        We plan to create a subscription model for webscraping the sites using an ml model for processing the user sentiment and displaying it to the user in informative formats like charts graphs and statistics.
                                    </div>
                                </div>
                                <div className='row2' style={{ flex: "50%" }}>
                                    <div className='child-row2' style={{ backgroundColor: "rgb(48, 48, 48)", fontSize: "16px", color: "rgb(165, 216, 216)", borderRadius: "20px", height: "18%" }}>
                                        <h1>Search</h1>
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                                value={searchValue}
                                                onChange={setSearchValue}
                                                onKeyPress={handlecall}
                                            />
                                        </Search>

                                    </div>
                                    <div className='child-row1' style={{ border: 'solid 2px black', height: "71%" }}>
                                        <div className='sub-head-cont'>
                                            <h2>analysis</h2>
                                            <img src={arrowB} style={{ height: "60px", marginLeft: "50%" }} />
                                        </div>
                                        <button onClick={() => setChartType('pie')} style={{ backgroundColor: "rgb(173, 255, 0)", fontSize: "16px", fontWeight: "bolder", marginBottom: "1px", marginTop: "2px" }}>Pie Chart</button>
                                        <button onClick={() => setChartType('bar')} style={{ backgroundColor: "rgb(173, 255, 0)", fontSize: "16px", fontWeight: "bolder" }}>Bar Chart</button>

                                        <div className='graph-cont' style={{ height: "55%" }}>
                                            {chartType === 'pie' ? renderPieChart() : (chartType === 'bar' ? renderBarChart() : renderAnimation())}                                        </div>

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