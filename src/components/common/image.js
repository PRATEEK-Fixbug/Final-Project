// ImageCard.js
import React from 'react';

function ImageCard() {
    return (
        <div className="image-container"> {/* Renamed class */}
            <div className="image-card">
                <img src="https://tse4.mm.bing.net/th?id=OIP.DAWYYY9_evV33F5QmCJVaAHaGi&pid=Api&P=0&h=180.jpg" alt="Image" />
                <h2 className="title">Card Title</h2>
                <p className="details">Card Details Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
}

export default ImageCard;
