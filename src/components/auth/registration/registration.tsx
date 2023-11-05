import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, Checkbox } from 'antd'

import { TRegistration } from '../../../types/types'
import "./registration.scss"

const FormItem = Form.Item

type TMapDispatchToProps = {
    register: (body: any) => void
}

const registration: React.FC<TMapDispatchToProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TRegistration>()

    const onSubmit = handleSubmit(data => {
        props.register(data)
    })

    return (
        <Form
            className="login-form"
            style={{ width: '500px' }}
            onFinish={onSubmit}
        >
            <div className="registration_header">Sign up</div>

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
                    name="first_name"
                    control={control}
                    rules={{ required: true, minLength: 4, maxLength: 20 }}
                    render={({ field }) => <Input {...field} prefix={<UserOutlined />} placeholder="First name" />}
                />
                {errors.first_name?.type === 'required' && <p className="error">first name is required</p>}
                {errors.first_name?.type === 'minLength' && <p className="error">min length is 4 symbols</p>}
                {errors.first_name?.type === 'maxLength' && <p className="error">max length is 20 symbols</p>}
            </FormItem>

            <FormItem>
                <Controller
                    name="last_name"
                    control={control}
                    rules={{ required: true, minLength: 4, maxLength: 20 }}
                    render={({ field }) => <Input {...field} prefix={<UserOutlined />} placeholder="Last name" />}
                />
                {errors.last_name?.type === 'required' && <p className="error">last name is required</p>}
                {errors.last_name?.type === 'minLength' && <p className="error">min length is 4 symbols</p>}
                {errors.last_name?.type === 'maxLength' && <p className="error">max length is 20 symbols</p>}
            </FormItem>

            <FormItem>
                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: true, minLength: 4, maxLength: 20 }}
                    render={({ field }) => <Input {...field} prefix={<UserOutlined />} placeholder="Phone" />}
                />
                {errors.phone?.type === 'required' && <p className="error">phone is required</p>}
                {errors.phone?.type === 'minLength' && <p className="error">min length is 4 symbols</p>}
                {errors.phone?.type === 'maxLength' && <p className="error">max length is 20 symbols</p>}
            </FormItem>

            <FormItem>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true, minLength: 4, maxLength: 20 }}
                    render={({ field }) => <Input {...field} prefix={<UserOutlined />} placeholder="Email" />}
                />
                {errors.email?.type === 'required' && <p className="error">v is required</p>}
                {errors.email?.type === 'minLength' && <p className="error">min length is 4 symbols</p>}
                {errors.email?.type === 'maxLength' && <p className="error">max length is 20 symbols</p>}
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
                </div>
                <div className='flex-justify-content-space-between'>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign up
                    </Button>
                    <span>Or <Link to={'/auth/login'}>login!</Link></span>
                </div>
            </FormItem>
        </Form>
    )
}

export default registration