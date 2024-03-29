'use client';
import { AttendanceBoardDocument, AttendanceFilterInput } from '@/gql/graphql';
import { useRouter } from 'next/navigation';
import { getAttendanceData } from './action';
import TableComponent from '../../components/table component';
import { executeGraphQL } from '../../libs/graphql';
import { useEffect, useState } from 'react';
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
export default async function Attendance({
  params,
  searchParams
}: {
  params?: any;
  searchParams: Partial<
    AttendanceFilterInput & { page?: number; limit?: number }
  >;
}) {
  const [page, setPage] = useState(searchParams.page || 0);
  const [items, setItems] = useState<any>([]);
  const [totalItems, setTotalItems] = useState(0);
  async function handleChangePage(newPage: number) {
    await getAttendance(newPage);
    setPage(newPage);
  }
  async function getAttendance(newPage?: number) {
    const { data } = await executeGraphQL(AttendanceBoardDocument, {
      variables: {
        pagination: {
          page: newPage || +page,
          limit: 15
        },
        input: {}
      }
    });
    setItems(
      data?.attendanceBoard?.items.map((items) => ({
        name: items.user.name,
        status: items.type,
        date: new Date(items.createdAt as any)
      }))
    );
    setTotalItems(data?.attendanceBoard?.total as number);
  }
  useEffect(() => {
    getAttendance();
  }, []);

  return (
    <>
      <div>hiii</div>
      {/* <Table
        enableSearch={true}
        onSearch={(val) => console.log(val)}
        items={items}
        itemsPerPage={15}
        onPageChange={handleChangePage}
        onRowClick={(item: any) => {
          console.log(item);
        }}
        statusObj={{
          CHECKOUT: 'error',
          CHECKIN: 'success'
        }}
        columnFilters={{
          status: [
            { label: 'Check-in', value: 'CHECKIN' },
            { label: 'Check-out', value: 'CHECKOUT' }
          ]
        }}
        onFilterChange={(key: string, value: string) => {
          console.log(key, value);
        }}
        sortOptions={{
          name: {
            key: 'name',
            onSortChange(key, direction) {
              console.log(key, direction);
            }
          }
        }}
        totalItems={items.length}
      />
    */}
    </>
  );
}
