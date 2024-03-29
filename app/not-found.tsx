import Link from 'next/link';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-1 items-center justify-center bg-gray-100">
        <div className="text-center space-y-4">
          <AlertTriangleIcon className="mx-auto h-16 w-16 text-red-500" />
          <h1 className="text-3xl font-semibold text-gray-900">
            404 - Page Not Found
          </h1>
          <p className="text-gray-500">
            The page you are looking for does not exist. It might have been
            moved or deleted.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="/"
          >
            Return to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}

function AlertTriangleIcon(props: { [key: string]: any }) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
