'use client'

import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import Button from '@/components/button'
import Field from '@/components/field'

const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(d) => {
                console.log('attempting login!', d)
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Email is required'),
                password: Yup.string().min(8).required('Password is required'),
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
