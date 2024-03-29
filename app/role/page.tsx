'use client';
import { Card } from '@tremor/react';
import UsersTable from '@/components/table/table';
import BreadCrump from '@/components/BreadCrumb';
import CreateButton from '@/components/button/create';

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
        <BreadCrump crumps={[{ name: 'Role', path: '/' }]} />
        <CreateButton />
      </div>
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </>
  );
}
