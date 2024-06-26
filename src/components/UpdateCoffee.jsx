import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photoURL } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photoURL }


        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <div className='text-center mx-48'>
                <h2 className='text-3xl font-extrabold mb-4'>Update Existing Coffee Details</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' defaultValue={name} placeholder='Enter coffee name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Coffee Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='quantity'  defaultValue={quantity}  placeholder='Enter coffee quantity' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='supplier'  defaultValue={supplier}  placeholder='Enter coffee supplier' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='taste'  defaultValue={taste}  placeholder='Enter coffee taste' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='category'  defaultValue={category}  placeholder='Enter coffee category' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='details'  defaultValue={details}  placeholder='Enter coffee details' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <div className='mb-8'>
                    <div className='form-control w-full ml-4'>
                        <label className='label'>
                            <span className='label-text font-semibold'>Photo</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='photoURL'  defaultValue={photoURL}  placeholder='Enter photo URL' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className='btn w-full font-bold ml-4 mr-4 my-5 bg-[#D2B48C]' />
            </form>
        </div>
    );
};

export default UpdateCoffee;