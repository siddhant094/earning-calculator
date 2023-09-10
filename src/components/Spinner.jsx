import React from 'react';
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ChangingProgressProvider from '../pages/ChangingProgressProvider';

const Spinner = () => {
    return (
        <div className='fixed bg-stone-950 bg-opacity-100 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'>
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-96 max-w-full h-80 bg-[#282828] rounded-xl flex flex-col relative text-white px-5 py-5 justify-center'
            >
                <ChangingProgressProvider values={[0, 22, 33, 54, 100]}>
                    {(percentage) => (
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                pathTransition:
                                    percentage === 0
                                        ? 'none'
                                        : 'stroke-dashoffset 1s ease 0s',
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </div>
        </div>
    );
};

export default Spinner;
