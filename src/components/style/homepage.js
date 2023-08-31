// Homepage.js
import React, { useEffect, useState } from "react";
import Footer from "../common/footer";
import ImageCard from "../common/image";


function Homepage() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 100);

        return () => clearInterval(intervalId);
    }, [time]);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const milliseconds = time.getMilliseconds().toString().padStart(3, '0');

    return (
        <div className="App">
            {/* Include the Header component */}
            <main className="profile-details">
                <div className="profile-content">
                    <h1>Welcome to the smash</h1>
                    {/* Your image cards and other content here */}
                    
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <div className="digital-clock">
                    <h5>current time zone</h5>
                        <p aria-label="Current Time">{hours}:{minutes}:{seconds}.{milliseconds}</p>
                    </div>
                </div>
        
                </main>
        <Footer/>
        </div>
    );
}

export default Homepage;
