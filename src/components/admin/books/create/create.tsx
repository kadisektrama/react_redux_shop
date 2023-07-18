import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
    Select,
    InputNumber,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Upload } from 'antd'

import { TBook, TCurrencyData } from '../../../../types/types'

const { TextArea } = Input

type TDispatchProps = {
    createBook: (body: TBook) => void
}

type TMapStateToProps = {
    currencies: TCurrencyData
}

const Create: React.FC<TDispatchProps & TMapStateToProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TBook>()

    const onSubmit = handleSubmit(data => {
        props.createBook(data)
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
                <Form.Item label='Title'>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 100 }}
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

                <Form.Item label="User id">
                    <Controller
                        name="user_id"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.user_id ? <p className="error">user id is required</p> : null}
                </Form.Item>

                <Form.Item label="author">
                    <Controller
                        name="author"
                        control={control}
                        rules={{ required: true, minLength: 10, maxLength: 200 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.author ? <p className="error">author is required</p> : null}
                </Form.Item>

                <Form.Item label="rating">
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: true, min: 0, max: 5 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.rating ? <p className="error">rating is required</p> : null}
                </Form.Item>

                <Form.Item label="reviews_count">
                    <Controller
                        name="reviews_count"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.reviews_count ? <p className="error">reviews_count is required</p> : null}
                </Form.Item>

                <Form.Item label="price">
                    <Controller
                        name="price"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.price ? <p className="error">price is required</p> : null}
                </Form.Item>

                <Form.Item label='currency'>
                    <Controller
                        name="currency"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <Select {...field}>
                                {props.currencies.data.map(currency => <Select.Option key={currency._id} value={currency._id}>{currency.name}</Select.Option>)}
                            </Select>
                        }
                    />

                    {errors.price ? <p className="error">currency is required</p> : null}
                </Form.Item>

                <Form.Item label='images'>
                    <Controller
                        name="images"
                        control={control}
                        rules={{ required: false }}
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

                    {errors.images ? <p className="error">currency is required</p> : null}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Create