import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
} from 'antd'

import { TCategory } from '../../../../types/types'

const { TextArea } = Input

type TDispatchProps = {
    createCategory: (body: TCategory) => void
}

const Create: React.FC<TDispatchProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TCategory>()

    const onSubmit = handleSubmit(data => {
        props.createCategory(data)
    })

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={onSubmit}
                layout='horizontal'
                style={{ maxWidth: 600 }}
            >
                <Form.Item label='Title'>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 16 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.title && <p className="error">title is required</p>}
                </Form.Item>

                <Form.Item label="description">
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: true, minLength: 10, maxLength: 200 }}
                        render={({ field }) => <TextArea rows={4} {...field} />}
                    />
                    {errors.description ? <p className="error">description is required</p> : null}
                </Form.Item>

                <Form.Item label="DB name">
                    <Controller
                        name="db_name"
                        control={control}
                        rules={{ required: true, minLength: 3, maxLength: 32 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.db_name ? <p className="error">DB name is required</p> : null}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Create