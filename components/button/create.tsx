'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CreateButton() {
  const pathname = usePathname();
  return (
    <Link
      href={pathname + '/create'}
      className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-1 px-5 rounded "
    >
      Create
    </Link>
  );
}
