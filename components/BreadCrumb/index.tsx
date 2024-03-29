import Link from 'next/link';

export default function BreadCrump({
  crumps
}: {
  crumps: { name: string; path?: string }[];
}) {
  return (
    <div className="flex capitalize pl-0 text-slate-400">
      {crumps.map((item, index) => {
        return (
          <div key={item.name} className="font-bold text-base">
            <Link
              href={item?.path || ''}
              className="hover:text-black ease-out duration-200"
            >
              {item.name}{' '}
            </Link>
            <span className="mx-2">
              {crumps.length - 1 === index ? '' : '/'}
            </span>
          </div>
        );
      })}
    </div>
  );
}
