//import logo from './logo.svg';
import './App.css';
import arrowB from '../arrow-up-right-svgrepo-com.svg'
import arrowW from '../arrow-up-right-svgrepo-com (1).svg'
import profileimg from '../components/bakg.png'


// function Home() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className='home-cont'>
//             <div className='head-cont'>
//                 charcha
//             </div>
//             <div className='row1'>
//                 <div className='child-row1'>
//                     Match Pro
//                 </div>
//             </div>
//         </div>
//       </header>
//     </div>
//   );
// }

function Home() {
    return (
        <div className='border-cont'style={{backgroundImage: `url(${profileimg})` , backgroundRepeat: 'repeat', backgroundSize:'750px'}}>
            
      <div className="App" >
        <header className="App-header">
            

        <div className='border-div'>
          <div className='home-cont'>
            <div className='head-cont'>
                <h1>charcha</h1>
            </div>
            <div className='rows'>
                <div className='row1'>
                    <div className='child-row1' style={{backgroundColor:"rgb(165, 216, 216)"}}>
                        <div className='sub-head-cont'>
                            <h1>AboutUs</h1>
                            <img src={arrowB} style={{height:"60px",marginLeft:"53%"}}/>
                        </div>
                        Our project, "charcha" aims to provide companies and creators with a tool to accurately get an Idea of the overall customer reception and public opinion of their product(songs,game,movies,books) . Providing better insights by aggregating data from various sources, such as user reviews, ratings and social media mentions(x, threads ,imd, goodreads  etc.). This will further enable users to make informed decisions about which product to push and marketing flaws. 
We plan to create a subscription model for webscraping the sites using an ml model for processing the user sentiment and displaying it to the user in informative formats like charts graphs and statistics.                    </div>
                    <div className='child-row2' style={{backgroundColor:"rgb(123, 112, 255)", color:"white",borderRadius:"6%"}}>
                    <div className='sub-head-cont'>
                            <h1>Services</h1>
                            <img src={arrowW} style={{height:"60px",marginLeft:"55%"}}/>
                        </div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br/>
                    <div className='button-cont-1' >
                        <button style={{backgroundColor:"rgb(165, 216, 216)", fontSize:"16px"}}>MatchPro</button>
                        <button style={{backgroundColor:"rgb(237, 177, 227)", fontSize:"16px"}}>Style Suggest</button>
                    </div>
                    <div className='button-cont-2' >
                        <button style={{backgroundColor:"rgb(245, 172, 172)", fontSize:"16px"}}>MatchPro</button>
                        <button style={{backgroundColor:"rgb(147, 177, 255)", fontSize:"16px"}}>Style Suggest</button>
                        <button style={{backgroundColor:"rgb(159, 223, 165)", fontSize:"16px"}}>abcde</button>
                    </div>
                    </div>
                </div>
                <div className='row2'>
                    <div className='child-row1' style={{ border:'solid 2px black',height:"61.5%"}}>
                    <div className='sub-head-cont'>
                            <h2>introducing</h2>
                            <img src={arrowB} style={{height:"60px",marginLeft:"50%"}}/>
                        </div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <button style={{backgroundColor:"rgb(173, 255, 0)",fontSize:"16px",fontWeight:"bolder"}}>try charcha for free</button>
                    </div>
                    <div className='child-row2' style={{backgroundColor:"rgb(48, 48, 48)",fontSize:"16px",color:"rgb(165, 216, 216)",borderRadius:"12%"}}>
                        <div className='child-row-2-cont'>
                            <div style={{fontSize:"100px", fontWeight:"bolder",margin:"2%"}}>
                                20%
                            </div>
                            <div style={{margin:"2%"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            </div>
                        </div>
                        
                    <button style={{backgroundColor:"rgb(165, 216, 216)",fontSize:"16px",fontWeight:"bolder"}}>sign up and save 20%</button>
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

