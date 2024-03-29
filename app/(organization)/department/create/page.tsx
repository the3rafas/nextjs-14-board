'use client';
import BreadCrump from '../../../../components/BreadCrumb';
import Template from '../../../../components/template';
import DepartmentForm from '@/components/forms/department-form';

export default async function CreateUsersPage({
  searchParams
}: {
  searchParams: { step: string };
}) {
  return (
    <Template>
      <div className="flex justify-between items-end">
        <BreadCrump
          crumps={[
            { name: 'Users', path: '/employee' },
            { name: 'Employee #' }
          ]}
        />
      </div>

      <DepartmentForm />
    </Template>
  );
}
