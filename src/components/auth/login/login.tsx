import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import { UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, Checkbox } from 'antd'

import { TLogin } from '../../../types/types'
import './login.scss'

const FormItem = Form.Item

type TMapDispatchToProps = {
    login: (body: any) => void
}

const login: React.FC<TMapDispatchToProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TLogin>()

    const onSubmit = handleSubmit(data => {
        props.login(data)
    })

    return (
        <Form
            className="login-form"
            style={{ width: '500px' }}
            onFinish={onSubmit}
        >
            <div className="login_header">Sign in</div>

            <FormItem>
                <Controller
                    name="user_name"
                    control={control}
                    rules={{ required: true, minLength: 4, maxLength: 20 }}
                    render={({ field }) => <Input {...field} prefix={<UserOutlined />} placeholder="User name" />}
                />
                {errors.user_name?.type === 'required' && <p className="error">user name is required</p>}
                {errors.user_name?.type === 'minLength' && <p className="error">min length is 4 symbols</p>}
                {errors.user_name?.type === 'maxLength' && <p className="error">max length is 20 symbols</p>}
            </FormItem>

            <FormItem>
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true, minLength: 4, maxLength: 20 }}
                    render={({ field }) => <Input {...field} prefix={<UserOutlined />} type="password" placeholder="Password" />}
                />
                {errors.password?.type === 'required' && <p className="error">password is required</p>}
                {errors.password?.type === 'minLength' && <p className="error">min length is 4 symbols</p>}
                {errors.password?.type === 'maxLength' && <p className="error">max length is 20 symbols</p>}
            </FormItem>

            <FormItem>
                <div className='flex-justify-content-space-between'>
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">Forgot password</a>
                </div>
                <div className='flex-justify-content-space-between'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <span>Or <Link to={'/auth/registration'}>register now!</Link></span>
                </div>
            </FormItem>
        </Form>
    )
}

export default login