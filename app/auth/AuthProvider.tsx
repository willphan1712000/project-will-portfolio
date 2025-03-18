// React Context to access auth session

'use client';
import React, {ReactNode, useEffect} from 'react'
import { SessionProvider } from 'next-auth/react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AuthProvider = ({children} : {
    children: ReactNode
}) => {
  useEffect(() => {
    
  }, [])
  return (
    <>
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
    </>

  )
}

export default AuthProvider
