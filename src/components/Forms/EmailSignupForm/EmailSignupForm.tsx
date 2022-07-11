import { ChangeEvent, FormEvent } from "react";
import { EmailSignupFormData } from "../../../typings/EmailSignupForm";
import Button from "../../../base/Button";
import { Checkbox } from "../../../base/Checkbox/Checkbox";
import DropList from "../../../base/DropList";
import InputField from "../../../base/InputField";

export interface EmailSignupFormProps {
  onFormSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onFormReset?: () => void;
  onInputChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCheckboxChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  fields?: EmailSignupFormData;
  errors?: { [key: string]: string; };
  loading?: boolean;
}

export const EmailSignupForm = ({ onFormSubmit, onFormReset, onInputChange, onCheckboxChange, fields, errors, loading = false }: EmailSignupFormProps) => {
  return (
    <form onSubmit={e => onFormSubmit?.(e)}>
      <h1 className="font-semibold text-xl mb-2">
        Sign up for email updates
      </h1>
      <p className="text-gray-500 mb-8">* Indicates a required field</p>

      {errors && (
        <div className="mb-4 space-y-1">
          {errors?.form && (
            <p className="text-red-600 font-semibold italic text-sm">{errors.form}</p>
          )}
        </div>
      )}

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
          name="euResident"
          label="EU Resident"
          onChange={onInputChange}
          value={fields?.euResident}
          required={true}
          items={['No', 'Yes']}
          disabled={loading}
          error={errors?.euResident}
        />
      </div>

      <div className="max-w-4xl mt-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Checkbox
            name="advances"
            label="Advances"
            value="yes"
            checked={fields?.advances === 'yes'}
            disabled={loading}
            onChange={onCheckboxChange}
          />
          <Checkbox
            name="alerts"
            label="Alerts"
            value="yes"
            checked={fields?.alerts === 'yes'}
            disabled={loading}
            onChange={onCheckboxChange}
          />
          <Checkbox
            name="other"
            label="Other Communications"
            value="yes"
            checked={fields?.other === 'yes'}
            disabled={loading}
            onChange={onCheckboxChange}
          />
        </div>

        {errors?.other && (
          <p className="text-red-600 px-2 text-sm mt-2">{errors.other}</p>
        )}
      </div>

      <div className="flex items-center gap-4 justify-end mt-8">
        <Button
          type="reset"
          color="secondary"
          disabled={loading}
          onClick={onFormReset}>
          Reset
        </Button>
        <Button
          type="submit"
          color="primary"
          disabled={loading}
          loading={loading}>
          Submit
        </Button>
      </div>
    </form>
  );
};
