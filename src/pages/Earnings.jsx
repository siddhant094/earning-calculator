import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import BookModal from '../components/BookModal';
import Spinner from '../components/Spinner';

import prize_icon from '../assets/mdi_prize.svg';
import rupee_icon from '../assets/fa_rupee.svg';
import views_icon from '../assets/mdi_eye.svg';
import like_icon from '../assets/thumb-up.svg';
import comment_icon from '../assets/mdi_comment.svg';

const Earnings = () => {
    const { id } = useParams();

    console.log(id);
    const [thumb, setThumb] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const [subs, setSubs] = useState(0);
    const [views, setViews] = useState(0);
    const [comments, setComments] = useState('');
    const [likes, setLikes] = useState(0);
    const [uploaded, setUploaded] = useState('');
    const [channelId, setChannelId] = useState('');
    const [showModal, setShowModal] = useState(false);

    const changeModal = () => {
        setShowModal(true);
        // console.log('CHANGED');
    };

    useEffect(() => {
        axios
            .get(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${id}&key=AIzaSyBBoDyHjvubawKT6f_mUi6k8mX0fcVV2X0`
            )
            .then((res) => {
                setChannelId(res.data.items[0].snippet.channelId);
                setViews(res.data.items[0].statistics.viewCount);
                setLikes(res.data.items[0].statistics.likeCount);
                setComments(res.data.items[0].statistics.commentCount);
                setUploaded(res.data.items[0].snippet.publishedAt);
                setThumb(res.data.items[0].snippet.thumbnails.medium.url);
                setTitle(res.data.items[0].snippet.localized.title);
                // console.log(res);

                axios
                    .get(
                        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyBBoDyHjvubawKT6f_mUi6k8mX0fcVV2X0`
                    )
                    .then((res) => {
                        setSubs(res.data.items[0].statistics.subscriberCount);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        // setLoading(false);
                    });
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                // setLoading(false);
            });
    }, []);

    const interval = setInterval(() => {
        setLoading(false);
    }, 5000);

    const money = Math.min(subs, views) + 10 * comments + 5 * likes;

    return (
        <div className='bg-stone-950'>
            <Header show={true} displayModal={() => setShowModal(true)} />

            <div className='w-full h-[359px] pl-[145px] pr-[143px] pt-[46px] pb-[47px] bg-stone-950 justify-center items-center inline-flex'>
                <div className='self-stretch px-10 py-5 bg-stone-900 rounded-2xl justify-start items-center gap-5 inline-flex'>
                    <div className='justify-start items-center gap-10 flex'>
                        <div className='justify-start items-center gap-5 flex'>
                            <div className='w-[254px] flex-col justify-start items-start gap-5 inline-flex'>
                                <div className='px-2 py-1 bg-neutral-500 rounded justify-start items-center gap-1 inline-flex'>
                                    <img src={prize_icon} />
                                    <div className='text-white text-base font-normal leading-tight'>
                                        Top earner video
                                    </div>
                                </div>
                                <img
                                    className='w-60 h-[135px] relative rounded-[10px]'
                                    src={thumb}
                                />
                                <div className='text-white text-opacity-50 text-base font-normal'>
                                    Uploaded on - June 23, 2023
                                </div>
                            </div>
                            <div className='w-[255px] flex-col justify-start items-start gap-[11px] inline-flex'>
                                <div className='self-stretch h-[50px] text-white text-xl font-medium'>
                                    {title}
                                </div>
                                <div className='flex-col justify-start items-start gap-3 flex'>
                                    <div className='justify-start items-center gap-2 inline-flex'>
                                        <img src={views_icon} alt='' />
                                        <div className='text-white text-opacity-50 text-base font-normal'>
                                            {views}
                                        </div>
                                    </div>
                                    <div className='justify-start items-center gap-2 inline-flex'>
                                        <img src={like_icon} alt='' srcset='' />
                                        <div className='text-white text-opacity-50 text-base font-normal'>
                                            {likes}
                                        </div>
                                    </div>
                                    <div className='justify-start items-center gap-2 inline-flex'>
                                        <img
                                            src={comment_icon}
                                            alt=''
                                            srcset=''
                                        />
                                        <div className='text-white text-opacity-50 text-base font-normal'>
                                            {comments}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-5 py-10 bg-zinc-800 rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex'>
                            <div className='h-[120px] flex-col justify-start items-center gap-6 flex'>
                                <div className='justify-start items-center inline-flex'>
                                    <div className='text-white text-[40px] font-bold'>
                                        ₹ {money}
                                    </div>
                                </div>
                                <div className='h-12 px-6 py-[18px] bg-white rounded-[35px] justify-center items-center gap-2.5 inline-flex'>
                                    <div className='text-neutral-900 text-base font-normal'>
                                        Check How?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* table */}
            <div className='text-white flex justify-center pb-5'>
                <table className='w-3/4 text-sm text-left'>
                    <thead className='text-xs uppercase mb-5 bg-stone-900'>
                        <tr>
                            <th
                                scope='col'
                                className='px-0 py-6 pl-10 text-center'
                            >
                                Rank
                            </th>
                            <th scope='col' className='px-6 py-3 text-center'>
                                Title
                            </th>
                            <th scope='col' className='px-6 py-3 text-center'>
                                Thumbnail
                            </th>
                            <th scope='col' className='px-6 py-3 text-center'>
                                Views
                            </th>
                            <th scope='col' className='px-6 py-3 text-center'>
                                Likes
                            </th>
                            <th scope='col' className='px-6 py-3 text-center'>
                                Comments
                            </th>
                            <th scope='col' className='px-6 py-3 text-center'>
                                Uploaded on
                            </th>
                            <th
                                scope='col'
                                className='px-6 py-3 p-10 text-center'
                            >
                                *Estimated Earning
                            </th>
                        </tr>
                    </thead>
                    <div className='mb-1'></div>
                    <tbody className='bg-stone-900'>
                        <tr className='pl-10'>
                            <th
                                scope='row'
                                className='px-6 py-4 font-medium whitespace-nowrap'
                            >
                                2
                            </th>
                            <td className='px-6 py-4 text-center'>
                                Video Title Name
                            </td>
                            <td className='px-6 py-4 align-middle text-center'>
                                <img
                                    className='relative rounded-[5px]'
                                    src={thumb}
                                />
                            </td>
                            <td className='px-6 py-4 text-center'>Laptop</td>
                            <td className='px-6 py-4 text-center'>12340</td>
                            <td className='px-6 py-4 text-center'>1342</td>
                            <td className='px-6 py-4 text-center'>
                                June 23, 2023
                            </td>
                            <td className='px-6 py-4 text-center'>239893</td>
                        </tr>
                        <tr className='pl-10'>
                            <th
                                scope='row'
                                className='px-6 py-4 font-medium whitespace-nowrap'
                            >
                                2
                            </th>
                            <td className='px-6 py-4 text-center'>
                                Video Title Name
                            </td>
                            <td className='px-6 py-4 align-middle text-center'>
                                <img
                                    className='relative rounded-[5px]'
                                    src={thumb}
                                />
                            </td>
                            <td className='px-6 py-4 text-center'>Laptop</td>
                            <td className='px-6 py-4 text-center'>12340</td>
                            <td className='px-6 py-4 text-center'>1342</td>
                            <td className='px-6 py-4 text-center'>
                                June 23, 2023
                            </td>
                            <td className='px-6 py-4 text-center'>239893</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {showModal && <BookModal onClose={() => setShowModal(false)} />}
            {loading ? <Spinner /> : ''}
        </div>
    );
};

export default Earnings;
