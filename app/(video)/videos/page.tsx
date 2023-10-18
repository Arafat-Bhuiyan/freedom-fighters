'use client';
import React, { useState, useEffect } from 'react';
import VideoFeed from '@/components/Video';
import '@/styles/video/style.scss';
import axios from 'axios';

const Videos = () => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        const { data } = await axios.get('/api/video');

        if (!data.success) {
            alert(data.message);
        }
        if (data.success) {
            setVideos(data.videos);
        }
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    const renderVideos = () => {
        if (!videos.length) {
            return (
                <>
                    <h3 className='text-center'>Loading...</h3>
                </>
            );
        }

        if (videos.length) {
            return videos.map((video: {_id: any, title: string, zilla: string, videoId: string}) => (
                <div className="grid-item" key={video._id}>
                    <VideoFeed
                        title={video?.title}
                        zilla={video?.zilla}
                        videoId={video?.videoId}
                    />
                </div>
            ));
        }
    };

    console.log("Videos here -- ", videos);

    return (
        <>
            <main>
                <div className="grid-container">
                    {renderVideos()}
                </div>

            </main>
        </>
    );
};

export default Videos;