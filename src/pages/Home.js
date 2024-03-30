import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Navbar from '../components/Navbar';


const commState = "open"
const commDate = "march 20, 2024"
const updateDate = "march 19, 2024"



const Homepage = () => {

    const navi = useNavigate();

    const apply = () => {
        navi("/pricelist"); 
    }

    return (
    <div className="Homepage">
        <div>
            <Navbar />
        <div className="home">
            <div className="home-pfp">
                <img src={require('../assets/images/zozchuupfp.png')} alt ="zozchuu-pfp"/>
            </div>
            <div className="home-info">
                <p>hello, i'm zozchuu! i am a CS major and hobbyist artist.</p>
                <div className = "commissionStatus">
                    <p>commissions status: </p>
                    <p>{commState}</p>
                </div>
                <div className = "commissionStatus">
                <p>intake: </p>
                    <p>{commDate}</p>
                </div>
                <div className = "lastUpdated">
                    <p>last updated: </p>
                    <p>{ updateDate }</p>
                </div>
                <button onClick={apply}> apply now!</button>
                </div>
       </div>
        </div>
    </div>
        
     );
}
 
export default Homepage
;