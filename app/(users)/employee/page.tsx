'use client';
import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import toast from 'react-hot-toast';
import UsersTable from '@/components/table/table';
import Search from '@/components/search/search';
import CreateButton from '../../../components/button/create';
import BreadCrump from '../../../components/BreadCrumb';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    username: 'alicej',
    email: 'alice.johnson@example.com'
  },
  {
    id: 2,
    name: 'Bob Smith',
    username: 'bobsmith',
    email: 'bob.smith@example.com'
  },
  {
    id: 3,
    name: 'Charlie Brown',
    username: 'charlieb',
    email: 'charlie.brown@example.com'
  }
  // Add more users as needed
];

export default async function UsersPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  return (
    <>
      <div className="flex justify-between items-end">
        {/* <Search /> */}
        <BreadCrump crumps={[{ name: 'Users', path: '/' }]} />
        <CreateButton />
      </div>
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </>
  );
}
