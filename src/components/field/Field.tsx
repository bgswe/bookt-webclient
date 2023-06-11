'use client'

import { useEffect, useState } from 'react'
import { ErrorMessage, Field as FormikField, useFormikContext } from 'formik'

interface Props {
    name: string
    label?: string
    type?: string
    as?: string
}

const Field = ({ name, label = '', type = 'text', as = 'input' }: Props) => {
    const formik = useFormikContext()
    const [wasSubmitted, setWasSubmitted] = useState(false)

    useEffect(() => {
        if (formik.isSubmitting) setWasSubmitted(true)
    }, [formik.isSubmitting])

    return (
        <div className="flex flex-col mb-1">
            <label
                htmlFor={name}
                className="text-sm text-gray-600 font-medium capitalize"
            >
                {label || name.split('_').join(' ')}
            </label>

            <FormikField {...{ name, type, as }} />

            <div className="text-xs text-red-500 my-1">
                {wasSubmitted && <ErrorMessage {...{ name }} />}
            </div>
        </div>
    )
}

export default Field
