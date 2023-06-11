'use client'

import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import Button from '@/components/button'
import Field from '@/components/field'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const router = useRouter()

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(data) => {
                return fetch('http://127.0.0.1:8000/command/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((res) => {
                        if (res.ok) {
                            // router.push('/u/')
                        }
                    })
                    .catch(console.log)
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Email is required'),
                password: Yup.string()
                    .min(8, 'Provided password is not long enough')
                    .required('Password is required'),
            })}
        >
            <Form>
                <Field name="email" type="email" />
                <Field name="password" type="password" />

                <div className="py-3">
                    <Button type="submit" className="float-right">
                        Login
                    </Button>
                </div>
            </Form>
        </Formik>
    )
}

export default LoginForm
