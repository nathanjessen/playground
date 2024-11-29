import type { ChangeEvent, FormEvent } from 'react';
import Button from '../../base/Button';
import { Checkbox } from '../../base/Checkbox/Checkbox';
import DropList from '../../base/DropList';
import InputField from '../../base/InputField';
import { EmailSignupFormData } from './types';

export interface EmailSignupFormProps {
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onInputChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCheckboxChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  fields?: EmailSignupFormData;
  errors?: { [key: string]: string };
  loading?: boolean;
}

export const EmailSignupForm = ({
  onFormSubmit,
  onInputChange,
  onCheckboxChange,
  fields,
  errors,
  loading = false,
}: EmailSignupFormProps) => {
  return (
    <form onSubmit={(e) => onFormSubmit?.(e)}>
      <h1 className="mb-4 text-xl font-semibold">Sign up for email updates</h1>

      {errors && (
        <div className="mb-4 space-y-1">
          {errors?.form && <p className="text-sm font-semibold italic text-error">{errors.form}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 gap-3">
        <InputField
          name="firstName"
          label="First Name"
          onChange={onInputChange}
          value={fields?.firstName}
          required={true}
          disabled={loading}
          error={errors?.firstName}
        />
        <InputField
          name="lastName"
          label="Last Name"
          onChange={onInputChange}
          value={fields?.lastName}
          required={true}
          disabled={loading}
          error={errors?.lastName}
        />
        <InputField
          type="email"
          name="email"
          label="Email Address"
          onChange={onInputChange}
          value={fields?.email}
          required={true}
          placeholder="testemail@domain.org"
          disabled={loading}
          error={errors?.email}
        />
        <InputField
          name="orgname"
          label="Organization"
          onChange={onInputChange}
          value={fields?.orgname}
          disabled={loading}
          error={errors?.orgname}
        />
        <DropList
          name="available"
          label="Available"
          onChange={onInputChange}
          value={fields?.available}
          required={true}
          items={[
            { id: 'yes', label: 'Yes', value: 'yes' },
            { id: 'no', label: 'No', value: 'no' },
          ]}
          disabled={loading}
          error={errors?.available}
        />

        <div className="">
          <Checkbox
            name="advances"
            label="Advances"
            value="yes"
            checked={fields?.advances === 'yes'}
            disabled={loading}
            onChange={onCheckboxChange}
            color="primary"
          />
          <Checkbox
            name="alerts"
            label="Alerts"
            value="yes"
            checked={fields?.alerts === 'yes'}
            disabled={loading}
            onChange={onCheckboxChange}
            color="primary"
          />
          <Checkbox
            name="other"
            label="Other Communications"
            value="yes"
            checked={fields?.other === 'yes'}
            disabled={loading}
            onChange={onCheckboxChange}
            color="primary"
          />

          {errors?.other && <p className="mt-2 px-2 text-sm text-error">{errors.other}</p>}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-4">
        <Button type="submit" color="primary" disabled={loading} loading={loading}>
          Submit
        </Button>
      </div>
    </form>
  );
};
