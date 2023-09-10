import { useState, useRef } from 'react';
import tick from '../assets/tick.png';
import emailjs from '@emailjs/browser';

const BookModal = ({ onClose }) => {
    const [show, setShow] = useState(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_rklvzih',
                'template_j9tikig',
                form.current,
                'g3UELglij_X0Npomr'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            )
            .finally(setShow(false));
    };

    return (
        <div
            className='fixed bg-white bg-opacity-20 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-96 max-w-full h-80 bg-[#282828] rounded-xl flex flex-col relative text-white px-5 py-5 justify-center'
            >
                {show == true ? (
                    <form
                        className='flex flex-col items-center'
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <p className='text-2xl font-medium pb-6'>
                            Request a call back
                        </p>
                        <input
                            type='text'
                            name='name'
                            placeholder='Enter Name'
                            className='w-72 px-3 py-3 rounded-lg border border-neutral-500 justify-start items-start gap-2.5 inline-flex mb-5 bg-transparent'
                        />
                        <input
                            type='text'
                            name='mobile'
                            placeholder='Mobile Number'
                            className='w-72 px-3 py-3 rounded-lg border border-neutral-500 justify-start items-start gap-2.5 inline-flex mb-5 bg-transparent'
                        />
                        <button
                            type='submit'
                            className='bg-white text-black w-64 h-11 px-10 py-1 rounded-3xl text-center'
                        >
                            Request a Call Back
                        </button>
                    </form>
                ) : (
                    <div className='flex flex-col items-center'>
                        <img src={tick} className='w-20 h-20 relative' />
                        <div className='text-center text-white text-2xl font-medium px-3 py-3'>
                            Request a call back
                        </div>
                        <div className='px-3 py-3 text-center text-white text-opacity-80 text-base font-normal leading-tight'>
                            Our Team will call you shortly in <br />
                            12-24 hrs <br />
                            Can’t you wait for call?
                        </div>
                        <button className='px-3 py-1 bg-red-600 text-white w-64 h-10 rounded-3xl text-center'>
                            Check Another Video
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookModal;
