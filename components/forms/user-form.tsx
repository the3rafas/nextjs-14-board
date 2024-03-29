import FormPropsDateFields from '../inputs/date';
import FormPropsSelectFields from '../inputs/select';
import FormPropsTextFields from '../inputs/text';

// 'use client';
import { Divider } from '@tremor/react';
import {
  BooleanItems,
  ContactEmailItems,
  salutationItems,
  statusItems
} from './constrains';
import FormPropsTextAreaFields from '../inputs/text-area';

export function OverView() {
  return (
    <>
      <div className="">
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
            <FormPropsTextFields
              label="First name"
              required
              name="first-name"
            />
            <FormPropsTextFields label="Middle name" name="middle-name" />
            <FormPropsTextFields label="Last name" name="last-name" />
            <FormPropsDateFields
              label="Date of Joining"
              required
              name="date-of-joining"
            />
            <FormPropsDateFields
              label="Date of Birth"
              required
              name="date-of-birth"
            />
            <FormPropsSelectFields
              label="Status"
              items={statusItems}
              required
              name="status"
            />
            <FormPropsSelectFields
              label="Salutation"
              items={salutationItems}
              required
              name="salutation"
            />{' '}
          </div>
          <Divider />
          <div className="flex font-bold pb-3">
            <h3>Company Details</h3>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
            <FormPropsTextFields label="Company" required name="company" />
            <FormPropsSelectFields
              label="Designation"
              items={salutationItems}
              name="first-name"
            />
            <FormPropsSelectFields
              label="Branch"
              items={salutationItems}
              name="first-name"
            />
            <FormPropsSelectFields
              label="Department"
              items={salutationItems}
              name="first-name"
            />
            <FormPropsSelectFields
              label="Reports to"
              items={salutationItems}
              name="first-name"
            />
            <FormPropsSelectFields
              label="Grade"
              items={salutationItems}
              name="first-name"
            />
            <FormPropsSelectFields
              label="Employment Type"
              items={salutationItems}
              name="first-name"
            />
          </div>
        </form>
      </div>
    </>
  );
}
export function AddressForm() {
  return (
    <>
      <div className="">
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
            <FormPropsTextFields label="Mobile" required name="mobile" />
            <FormPropsTextFields label="Personal Email" name="email" required />
            <FormPropsTextFields label="Company Email" name="email" required />
            <FormPropsSelectFields
              label="Prefered Contact Email"
              name="email"
              items={ContactEmailItems}
            />
          </div>
          <Divider />
          <div className="flex font-bold pb-3">
            <h3>Address</h3>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
            <FormPropsTextAreaFields
              label="Current Address"
              required
              name="company"
            />
            <FormPropsTextAreaFields
              label="Permanent Address"
              name="first-name"
            />
            <FormPropsSelectFields
              label="Current Address Is"
              items={BooleanItems}
              name="first-name"
              className="sm:col-span-6"
            />
            <FormPropsSelectFields
              label="Permanent Address Is"
              items={BooleanItems}
              name="first-name"
              className="sm:col-span-6"
            />
          </div>
          <Divider />
          <div className="flex font-bold pb-3">
            <h3>Emergency Contact</h3>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
            <FormPropsTextFields
              label="Emergency Contact Name"
              name="company"
              className="sm:col-span-4"
            />
            <FormPropsTextFields
              label="Emergency Phone"
              name="first-name"
              className="sm:col-span-4"
            />
            <FormPropsTextFields
              label="Relation"
              name="first-name"
              className="sm:col-span-4"
            />
          </div>
        </form>
      </div>
    </>
  );
}
export function SalaryForm() {
  return (
    <>
      <div className="">
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
            <FormPropsTextFields
              label="Cost to Company (CTC)"
              required
              name="first-name"
            />
            <FormPropsTextFields
              label="Payroll Cost Center"
              name="middle-name"
            />
            <FormPropsTextFields label="Salary Currency" name="last-name" />
            <FormPropsSelectFields
              label="Salary Mode"
              items={statusItems}
              required
              name="status"
            />
          </div>
        </form>
      </div>
    </>
  );
}
export function PersonalForm() {
  return (
    <>
      <div className="">
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12"></div>
        </form>
      </div>
    </>
  );
}
export function ProfileForm() {
  return (
    <>
      <div className="">
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12"></div>
        </form>
      </div>
    </>
  );
}
export function ExitForm() {
  return (
    <>
      <div className="">
        <form action="#" method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12">
            <FormPropsDateFields
              label="Resignation Letter Date"
              name="resignation-letter-date"
            />
            <FormPropsDateFields
              label="Exit Interview Held On"
              name="resignation-letter-date"
            />
            <FormPropsSelectFields
              label="Exit Interview Held On"
              items={BooleanItems}
              name="resignation-letter-date"
            />
            <FormPropsDateFields
              label="Relieving Date"
              name="resignation-letter-date"
            />
            <FormPropsTextFields
              label="New Workplace"
              name="resignation-letter-date"
            />
          </div>
        </form>
      </div>
    </>
  );
}
