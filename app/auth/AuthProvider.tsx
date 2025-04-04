// React Context to access auth session
// This component implements React Query Provider

'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Data, MyContext } from '../context/Context';

const AuthProvider = ({children, data} : {
    children: ReactNode,
    data?: Data
}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
        <SessionProvider>
          <MyContext.Provider value={data}>
            <Navbar />
              <div className='hidden sm:block'>
                {children}
              </div>
              <div className='sm:hidden flex items-center justify-center p-5'>Mobile View is coming soon, please use desktop view instead</div>
            <Footer />
          </MyContext.Provider>
        </SessionProvider>
    </QueryClientProvider>

  )
}

export default AuthProvider
