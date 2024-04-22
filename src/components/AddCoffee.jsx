import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const chef = form.chef.value;
        const photoURL = form.photoURL.value;

        const newCoffee = { name, price, supplier, taste, category, details, chef, photoURL }
        console.log(newCoffee);


        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className='m-20'>
            <Link to='/'><button className='rancho-regular text-xl'>  Back To Home</button></Link>
            <div className='bg-[#F4F3F0] p-10'>
                <div className='text-center mx-48 mb-5 '>
                    <h2 className='text-5xl rancho-regular font-bold mb-4'>Add New Coffee</h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className='md:flex mb-8'>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='name' placeholder='Enter coffee name' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Coffee Price</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='price' placeholder='Enter coffee price' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex mb-8'>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Supplier</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='supplier' placeholder='Enter coffee supplier' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Taste</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='taste' placeholder='Enter coffee taste' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex mb-8'>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Category</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='category' placeholder='Enter coffee category' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Details</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='details' placeholder='Enter coffee details' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    <div className='mb-8 md:flex'>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Chef</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='chef' placeholder='Enter Chef Name' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2 ml-4'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Photo</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" name='photoURL' placeholder='Enter photo URL' className='input input-bordered w-full' />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className='btn w-full font-bold ml-4 mr-4 my-5 bg-[#D2B48C]' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;