'use client';
import { PropsWithChildren } from 'react';
import React from 'react';
// import { isWindowAvailable } from '@/utils/navigation';
// import FixedPlugin from '@/components/fixedPlugin/FixedPlugin';

interface AuthProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthProps) {
  // states and functions
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full">
        <main className={`mx-auto min-h-screen`}>{children}</main>
      </div>
    </div>
  );
}
