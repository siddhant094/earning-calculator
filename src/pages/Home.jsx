import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import play_btn from '../assets/play-btn.png';
import yt_icon from '../assets/mdi_youtube.png';

const Home = () => {
    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=DuudSp4sHmg&key=[YOUR_API_KEY]

    const [url, setUrl] = useState('');

    let navigate = useNavigate();

    const getId = (url) => {
        var regExp =
            /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            //error
        }
    };

    const HandleVideoDetails = () => {
        const id = getId(url);
        navigate(`/id/${id}`);
    };

    return (
        <React.Fragment>
            {/* <Header show={false} /> */}
            <div className='flex justify-center grow h-screen items-center'>
                <div className='w-[713px] h-[348px] flex-col justify-center items-center gap-[60px] inline-flex'>
                    <div className='h-60 flex-col justify-start items-center gap-6 flex'>
                        <div className='w-[741px] text-center text-white text-[50px] font-bold leading-[72px]'>
                            Discover your earning potential
                        </div>
                        <div className='text-center text-white text-opacity-80 text-2xl font-normal leading-9'>
                            Turn your Youtube expertise into a lucrative income
                            <br />
                            through resource sharing
                        </div>
                    </div>
                    <div className='w-[713px] justify-start items-center gap-5 inline-flex'>
                        <img
                            src={yt_icon}
                            className='w-6 h-6 relative -mr-16'
                        />
                        <input
                            type='text'
                            className='bg-transparent w-[535px] border rounded-[35px] pl-12 pr-6 py-[12px] text-white'
                            placeholder='enter youtube video link'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                        <div className='w-[158px] px-6 py-[12px] bg-red-600 hover:bg-red-800 rounded-[35px] justify-center items-center gap-2.5 flex z-10'>
                            <button
                                className='text-white text-base font-normal'
                                onClick={HandleVideoDetails}
                            >
                                Check Earning
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={play_btn}
                className='h-72 absolute right-0 bottom-0 -z-1'
            />
        </React.Fragment>
    );
};

export default Home;
