import React from 'react';


const Home = () => {
    const commState = "open"
    const commDate = "march 20, 2024"
    const updateDate = "march 19, 2024"
    return ( 
        <div className="home">
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
            <button>apply now!</button>
        </div>
    );
}

export default Home;