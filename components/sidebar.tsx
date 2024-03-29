'use client';
import { classNames } from '@/libs/utils';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  HomeIcon,
  ShoppingCartIcon,
  UsersIcon,
  ChartBarIcon,
  ArchiveBoxIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import {
  Badge,
  Accordion,
  AccordionBody,
  AccordionHeader
} from '@tremor/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Navigation, navigation } from '../routes';

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden border-r lg:block lg:block">
      <div className="flex flex-col gap-2">
        <div className="flex h-[60px] items-center px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <span className="">Admin Dashboard</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navigation.map((item: Navigation) => {
              // if (item.children?.length) {
              //   <Accordion className="flex h-[60px] items-center px-6">
              //     <AccordionHeader className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-700">
              //       {item.icon}
              //       {item.name}
              //     </AccordionHeader>
              //     <AccordionBody>
              //       {item.children?.map((child) => (
              //         <Link
              //           key={child.name}
              //           href={child.href}
              //           className={classNames(
              //             pathname === child.href
              //               ? 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all'
              //               : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-700'
              //           )}
              //           aria-current={
              //             pathname === child.href ? 'page' : undefined
              //           }
              //         >
              //           {child.icon}
              //           {child.name}
              //         </Link>
              //       ))}
              //     </AccordionBody>
              //   </Accordion>;
              // } else {
              return (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    passHref
                    className={classNames(
                      pathname === item.href
                        ? 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all'
                        : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-700'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                  <div className="flex-1 px-3">
                    {item.children?.length &&
                      item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={classNames(
                            pathname === child.href
                              ? 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all'
                              : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-700'
                          )}
                          aria-current={
                            pathname === child.href ? 'page' : undefined
                          }
                        >
                          {child.icon}
                          {child.name}
                        </Link>
                      ))}
                  </div>
                </div>
              );
              // }
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
