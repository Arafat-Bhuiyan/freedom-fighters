'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Slideshow = () => {
    return (
        <Carousel
            autoPlay
            // centerMode
            dynamicHeight
            emulateTouch
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
        >
            <div>
                <img src="images/cover.gif" style={{ height: '650px' }} />
            </div>
            <div>
                <img src="images/bangabondhu.jpg" style={{ height: '650px' }} />
            </div>
            <div>
                <img src="images/cover2.jpg" style={{ height: '650px' }} />
            </div>
        </Carousel>
    );
};

export default Slideshow;