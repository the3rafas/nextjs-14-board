'use client';
import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from '../components/search/search';
import UsersTable from '../components/table/table';
import toast from 'react-hot-toast';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


const users: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    username: "alicej",
    email: "alice.johnson@example.com"
  },
  {
    id: 2,
    name: "Bob Smith",
    username: "bobsmith",
    email: "bob.smith@example.com"
  },
  {
    id: 3,
    name: "Charlie Brown",
    username: "charlieb",
    email: "charlie.brown@example.com"
  }
  // Add more users as needed
];

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  return (
    <>
      <Title>Users</Title>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </>
  );
}
