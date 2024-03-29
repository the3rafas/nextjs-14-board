import {
  BookOpenIcon,
  ChartBarIcon,
  HomeIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import { Url } from 'next/dist/shared/lib/router/router';
export interface Navigation {
  name: string;
  href: Url;
  icon?: JSX.Element;
  children?: Navigation[];
}
export const navigation: Navigation[] = [
  { name: 'Dashboard', href: '/', icon: <HomeIcon className="h-4 w-4" /> },
  {
    name: 'Playground',
    href: '/playground',
    icon: <ChartBarIcon className="h-4 w-4" />
  },
  {
    name: 'Users',
    href: '/',
    icon: <UsersIcon className="h-4 w-4" />,
    children: [
      {
        name: 'Employees',
        href: '/employee',
        icon: <ChartBarIcon className="h-4 w-4" />
      },
      {
        name: 'Clients',
        href: '/client',

        icon: <ChartBarIcon className="h-4 w-4" />
      }
    ]
  },
  {
    name: 'Attendance',
    href: '/attendance',
    icon: <BookOpenIcon className="h-4 w-4" />
  },
  {
    name: 'Organization',
    href: '#',
    icon: <UsersIcon className="h-4 w-4" />,
    children: [
      {
        name: 'Departments',
        href: '/department',
        icon: <ChartBarIcon className="h-4 w-4" />
      },
      {
        name: 'Branches',
        href: '/branch',
        icon: <ChartBarIcon className="h-4 w-4" />
      },
     
    ]
  },
  {
    name: 'Role',
    href: '/role',
    icon: <BookOpenIcon className="h-4 w-4" />
  },
];
