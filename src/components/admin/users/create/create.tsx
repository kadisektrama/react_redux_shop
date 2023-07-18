import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
    Select, Upload,
} from 'antd'

import { TCurrencyData, TUser } from '@typess/types'
import { PlusOutlined } from '@ant-design/icons'

type TMapDispatchToProps = {
    createUser: (body: TUser) => void
}

type TMapStateToProps = {
    roles: TCurrencyData,
}

const createUser: React.FC<TMapDispatchToProps & TMapStateToProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TUser>()

    const onSubmit = handleSubmit(data => {
        props.createUser(data)
    })

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={onSubmit}
                layout='horizontal'
                style={{ maxWidth: 600 }}
            >
                <Form.Item label='First name'>
                    <Controller
                        name="first_name"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.first_name && <p className="error">first name is required</p>}
                </Form.Item>

                <Form.Item label='Last name'>
                    <Controller
                        name="last_name"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.last_name && <p className="error">last name is required</p>}
                </Form.Item>

                <Form.Item label='User name'>
                    <Controller
                        name="user_name"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.user_name && <p className="error">user name is required</p>}
                </Form.Item>

                <Form.Item label='Role'>
                    <Controller
                        name="role"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <Select {...field}>
                                {props.roles.data.map(role => <Select.Option key={role._id} value={role._id}>{role.name}</Select.Option>)}
                            </Select>
                        }
                    />

                    {errors.role ? <p className="error">roles is required</p> : null}
                </Form.Item>

                <Form.Item label='Email'>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 32 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.email?.type === 'required' && <p className="error">email is required</p>}
                    {errors.email?.type === 'maxLength' && <p className="error">email min length is 6 simbols</p>}
                    {errors.email?.type === 'minLength' && <p className="error">email max length is 32 simbols</p>}
                </Form.Item>

                <Form.Item label='Phone'>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.phone && <p className="error">phone is required</p>}
                </Form.Item>

                <Form.Item label='image'>
                    <Controller
                        name="image"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <>
                                <Upload
                                    {...field}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                >
                                    {uploadButton}
                                </Upload>
                            </>
                        }
                    />

                    {errors.image ? <p className="error">currency is required</p> : null}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default createUser