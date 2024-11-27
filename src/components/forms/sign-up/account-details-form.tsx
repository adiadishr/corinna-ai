import { USER_REGISTRATION_FORM } from '@/constants/forms'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import FormGenerator from '../form-generator'

type Props = {
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}

const AccountDetailsForm = (props: Props) => {
    return (
        <>
            <h2 className="text-gravel md:text-4xl font-bold">
                <p className='text-iridium md:text-sm mb-4'>
                    Enter your email and password
                </p>
                {USER_REGISTRATION_FORM.map((field) => (
                    <FormGenerator
                        key={field.id}
                        {...field}
                        errors={props.errors}
                        register={props.register}
                        name={field.name}
                    />
                ))}
            </h2>
        </>
    )
}

export default AccountDetailsForm