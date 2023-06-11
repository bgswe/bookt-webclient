'use client'

import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import Button from '@/components/button'
import Field from '@/components/field'
import { useRouter } from 'next/navigation'

const SignupForm = () => {
    const router = useRouter()

    return (
        <Formik
            initialValues={{
                organization_name: '',
                admin_email: '',
                admin_password: '',
            }}
            onSubmit={async (data) => {
                return fetch(
                    'http://127.0.0.1:8000/command/create_organization/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    }
                )
                    .then((res) => {
                        if (res.ok) {
                            router.push('/u/')
                        }
                    })
                    .catch(console.log)
            }}
            validationSchema={Yup.object({
                organization_name: Yup.string().required(
                    'Please provide a name for your new organization'
                ),
                admin_email: Yup.string()
                    .email('Invalid email address')
                    .required('Email is required'),
                admin_password: Yup.string()
                    .min(8, 'Password must be between 8-20 characters')
                    .required('Password is required'),
            })}
        >
            {(formik) => (
                <Form>
                    <Field name="organization_name" />
                    <Field
                        name="admin_email"
                        type="email"
                        label="Admin user email"
                    />
                    <Field
                        name="admin_password"
                        type="password"
                        label="Password"
                    />

                    <div className="py-3">
                        <Button
                            type="submit"
                            className="float-right"
                            disabled={formik.isSubmitting}
                        >
                            Signup
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default SignupForm
