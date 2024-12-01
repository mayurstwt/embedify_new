"use client";

import Homepage from '@/components/Homepage'
import React from 'react'
import './globals.css';
import Dashboard from '@/components/Dashboard';
import { useSession } from 'next-auth/react';

const page = () => {

  const { data: session } = useSession();

  return (
    <>
      <div className='bg-black '>
        {session ? (
          <>
            <Dashboard />
          </>
        ) : (
          <>
            <Homepage />
          </>
        )}
      </div>
    </>
  )
}

export default page