'use client'
import React from 'react'
import { useStore } from '../store/zustandStore';
import Link from 'next/link';

const Dashboard = () => {
const list = useStore((state)=>state.list)

    return (
        <div className='m-4'>
            <h1>Dashboard</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item: any, index: number) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Link href='/' className='btn btn-warning'>Add Information</Link>
        </div>
    )
}

export default Dashboard