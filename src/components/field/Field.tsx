'use client'

import { ErrorMessage, Field as FormikField } from 'formik'

interface Props {
    name: string
    type?: string
    as?: string
}

const Field = ({ name, type = 'text', as = 'input' }: Props) => {
    return (
        <div className="flex flex-col mb-1">
            <label
                htmlFor={name}
                className="text-sm text-gray-700 font-medium capitalize"
            >
                {name}
            </label>
            <FormikField {...{ name, type, as }} />
            <div className="text-xs text-red-500 my-1">
                <ErrorMessage {...{ name }} />
            </div>
        </div>
    )
}

export default Field
