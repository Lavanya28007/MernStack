'use client'
import { IconMail, IconPencil, IconTrash, IconUserSquareRounded } from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

    const [userData, setUserData] = useState([]);

    const fetchUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        console.log(res.status);
        console.log(res.data);

        setUserData(res.data);
    };

    useEffect(() => {
        fetchUserData();
    }, [])

   const deleteUser = async (id) => {
    const res = await axios.delete('http://localhost:5000/user/delete/' + id);
    toast.success("user deleted successfully");
     fetchUserData();
   }

    return (
        <div className='min-h-screen bg-gray-100 py-10'>
            <div className='container mx-auto'>
                <h2 className='text-center font-bold text-3xl'>
                    Manage User
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        userData.map((user) => {
                            return <div key={user._id}
                                className='bg-white p-6 rounded-lg shadow-lg gap-4 mt-10'>
                                <div className='flex gap-4'>
                                    <div>
                                        <IconUserSquareRounded className='text-purple-300' size={100} />
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold'>{user.name}</h3>
                                        <p className='text-gray-500 flex gap-1'><IconMail/>  {user.email}</p>
                                        <p className=''>From {user.city} city</p>

                                        <div className='flex gap-4 mt-4'>
                                            <Link href={'/update-user/'+user._id} className='bg-blue-50 text-blue-500 rounded-xl p-2'>
                                                <IconPencil/>
                                            </Link>
                                             <button onClick={() => {deleteUser(user._id)}} className='bg-red-50 text-red-500 rounded-xl p-2'>
                                                <IconTrash/>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default ManageUser;