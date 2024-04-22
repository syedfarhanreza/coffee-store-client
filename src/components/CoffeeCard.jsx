import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, supplier, taste, category, details, chef, photoURL } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className='pt-10 raleway-regular'>
                    <div className='flex'>
                        <p className='mr-2 font-bold'>Name:</p>
                        <p>{name}</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-2 font-bold'>Chef:</p>
                        <p>{chef}</p>
                    </div>
                    <div className='flex'>
                        <p className='mr-2 font-bold'>Price:</p>
                        <p>{price} Taka</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical gap-2 mt-3">
                        <button className="btn btn-active bg-[#D2B48C]">
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn bg-[#3C393B] text-white">
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-[#EA4744] text-white">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;