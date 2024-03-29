'use client';
import Template from '@/components/template';
import BreadCrump from '@/components/BreadCrumb';
import RoleForm from '@/components/forms/role-form';

export default async function CreateUsersPage({
  searchParams
}: {
  searchParams: { step: string };
}) {
  return (
    <Template>
      <div className="flex justify-between items-end">
        <BreadCrump
          crumps={[{ name: 'Roles', path: '/role' }, { name: 'Role #' }]}
        />
      </div>

      <RoleForm />
    </Template>
  );
}
