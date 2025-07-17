'use client'
import React, { useState } from 'react'
import { useStore } from './store/zustandStore'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Zustand = () => {
  // const count = useStore((state) => state.count)
  // const increment = useStore((state) => state.increment);
  // const decrement = useStore((state) => state.decrement);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");


  const addingList = useStore((state) => state.addingList)
  const list = useStore((state) => state.list);
const router = useRouter();

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && surname.trim()) {
      addingList(name, surname);
      setName('');
      setSurname('');
      router.push("/dashboard");
    }

    console.log(name);
  }
  return (
    <div className='m-4'>
      <h1>Zustand input</h1>
      <form>
        <div className="mb-3 col-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input value={name} type="text" className="form-control" id="exampleInputEmail1" placeholder='Add your name' onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
          <input value={surname} type="text" className="form-control" id="exampleInputEmail1" placeholder='Add your surname' onChange={e => setSurname(e.target.value)} />
        </div>
        <button type='button' onClick={formSubmit} className='btn btn-outline-warning me-4 '>Add</button>
      </form>
      <Link href='/dashboard'>
        <button type='button' className='btn btn-outline-warning my-4 '>Dashboard</button>
      </Link>


    </div>


  )
}

export default Zustand