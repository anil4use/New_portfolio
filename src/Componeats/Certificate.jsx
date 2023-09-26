import React, { useState } from 'react';
import img1 from "../../img/Certificate/1.jpg";
import img2 from "../../img/Certificate/2.jpg";
import img4 from "../../img/Certificate/4.png";
import img5 from "../../img/Certificate/5.png";
import img6 from "../../img/Certificate/6.jpg";
import img8 from "../../img/Certificate/8.png";

import '../index.css';

function Certificate() {
    return (
        <div className='pl-10 bg-gray-900'>
            <div className='font-bold pb-10 text-pink-600 text-4xl'>Certificate</div>
            <div className='md:grid md:gap-2 md:grid-cols-3'>
                <Certificat IMG={img1} />
                <Certificat IMG={img2} />
                <Certificat IMG={img4} />
                <Certificat IMG={img5} />
                <Certificat IMG={img6} />
                <Certificat IMG={img8} />
            </div>
        </div>
    );
}

export default Certificate;

const Certificat = ({ IMG }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='mt-10 shadow-2xl IMG h-56 w-80 border-4'>
            <button onClick={toggleModal} className='' type='button'>
                <img className='h-auto max-w-base rounded-lg' src={IMG} alt='image' />
            </button>
            {isModalOpen && (
                <div
                    className='fixed top-0 left-0 right-0 z-50 w-full h-screen overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-70 md:inset-0'
                    onClick={toggleModal}
                >
                    <div className='relative w-full mt-40 p-2 md:mt-16 max-w-2xl max-h-full mx-auto'>
                        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                            <div className='flex items-start justify-between  border-b rounded-t dark:border-gray-600'>
                            </div>
                            <img src={IMG} className='' alt='Certificate' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
