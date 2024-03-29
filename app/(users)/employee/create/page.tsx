'use client';
import { Card, TabGroup, TabList } from '@tremor/react';
import BreadCrump from '../../../../components/BreadCrumb';
import Template from '../../../../components/template';
import {
  AddressForm,
  ExitForm,
  OverView,
  PersonalForm,
  ProfileForm,
  SalaryForm
} from '../../../../components/forms/user-form';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Normalize, classNames } from '../../../../libs/utils';
import { RiCheckboxCircleFill } from '@remixicon/react';
type ComponentNames =
  | 'overview'
  | 'address--contacts'
  | 'salary'
  | 'personal'
  | 'profile'
  | 'exit';

const steps = [
  'Overview',
  'Address & Contacts',
  'Salary',
  'Personal',
  'Profile',
  'Exit'
];
const component: { [key in ComponentNames]?: JSX.Element } = {
  overview: <OverView />,
  'address--contacts': <AddressForm />,
  salary: <SalaryForm />,
  personal: <PersonalForm />,
  profile: <ProfileForm />,
  exit: <ExitForm />
};
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
      <Card className="mt-6">
        <TabGroup className="">
          <TabList className="grid grid-cols-12">
            {steps.map((step) => {
              return (
                <Link
                  href={`?step=${Normalize(step)}`}
                  className={classNames(
                    'col-span-full sm:col-span-2 py-2 text-sm flex justify-center',
                    searchParams.step === Normalize(step)
                      ? 'border-b border-b-indigo-500 '
                      : ''
                  )}
                  key={step}
                >
                  <RiCheckboxCircleFill
                    className="h-6 w-6 shrink-0 text-tremor-brand dark:text-dark-tremor-brand"
                    aria-hidden={true}
                  />

                  <span className="ml-2">{step}</span>
                </Link>
              );
            })}
          </TabList>
        </TabGroup>
        {component[(searchParams.step as ComponentNames) || 'overview']}
      </Card>
    </Template>
  );
}
