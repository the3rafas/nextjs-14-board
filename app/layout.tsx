'use client';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from '@/components/auth/session provider/provider';
import Loading from './loading';
import Sidebar from '@/components/sidebar';
import { usePathname } from 'next/navigation';
import BreadCrump from '../components/BreadCrumb';
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <SessionProvider>
          <div>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
          <Suspense fallback={<Loading />}>
            {pathname === '/auth/sign-in' ? (
              <>{children}</>
            ) : (
              <>
                <Nav />
                <div className="grid min-h-screen overflow-hidden lg:grid-cols-[280px_1fr]  w-9/12 mx-auto">
                  <Sidebar />
                  <main className="p-4 md:p-10 max-w-7xl">{children}</main>
                </div>
              </>
            )}
          </Suspense>
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
