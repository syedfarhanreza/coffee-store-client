import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photoURL } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className='pt-10'>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical gap-2 mt-3">
                        <button className="btn btn-active bg-[#D2B48C]">
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="btn bg-[#3C393B] text-white">
                            <FontAwesomeIcon icon={faPen} /> 
                        </button>
                        <button className="btn bg-[#EA4744] text-white">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;