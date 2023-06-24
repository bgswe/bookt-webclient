import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import { AuthenticationContext } from '@/authentication-context'
import Button from '@/components/button'
import Field from '@/components/field'

const LoginForm = () => {
    const navigate = useNavigate()
    const { setAccessToken } = useContext(AuthenticationContext)

    return (
        <Formik
            initialValues={{
                email: 'admin@example.com',
                password: 'password',
            }}
            onSubmit={(data) => {
                const formData = new FormData()
                formData.append('username', data.email)
                formData.append('password', data.password)

                return fetch('http://localhost:8000/auth/login', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include',
                })
                    .then((res) => {
                        if (res.ok) {
                            return res.json()
                        }

                        throw res.json()
                    })
                    .then(({ access_token }) => {
                        setAccessToken(access_token)
                        navigate('/bookt')
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
