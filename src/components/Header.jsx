import React, { useState } from 'react';
import logo from '../assets/logo.png';
import phone from '../assets/Phone.png';

const Header = (props) => {
    // const [showModal, setShowModal] = useState(false);
    console.log(props);
    return (
        <React.Fragment>
            <header className='pt-4 pb-4 flex justify-evenly'>
                <img src={logo} className='w-[200px]' />
                {props.show ? (
                    <button className='w-64 h-9 rounded-3xl border border-white inline-flex justify-center items-center'>
                        {/* <div className='w-5 h-5 relative' /> */}
                        <img src={phone} />
                        <div
                            className='text-white text-xl font-normal leading-normal'
                            onClick={props.displayModal}
                        >
                            Request a call back
                        </div>
                    </button>
                ) : (
                    <button></button>
                )}
            </header>
            {/* {showModal && <BookModal onClose={() => setShowModal(false)} />} */}
        </React.Fragment>
    );
};

export default Header;
