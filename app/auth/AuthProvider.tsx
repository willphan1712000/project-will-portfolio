// React Context to access auth session
// This component implements React Query Provider

'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AuthProvider = ({children} : {
    children: ReactNode
}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
    </QueryClientProvider>

  )
}

export default AuthProvider
