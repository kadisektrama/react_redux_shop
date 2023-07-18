import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
    InputNumber,
    Select,
    Checkbox,
    Upload,
} from 'antd'

import { TBicycle, TBicycleDataSingle, TCurrencyData } from '@typess/types'
import { PlusOutlined } from '@ant-design/icons'

const { TextArea } = Input

type TDispatchProps = {
    updateBicycle: (bicycleId: string, body: TBicycle) => void
}

type TMapStateToProps = {
    bicycleId: string,
    isLoaded: boolean,
    bicycle: TBicycleDataSingle
    currencies: TCurrencyData
}

const uploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
)

const Update: React.FC<TDispatchProps & TMapStateToProps> = (props) => {
    const { handleSubmit, watch, control, formState: { errors } } = useForm<TBicycle>({
        defaultValues: { ...props.bicycle.data, images: {
                fileList: [
                    ...props.bicycle.data.images.map((image: any) => ({ url: image?.url }))
                ]
            },
            //currency: props.bicycle.data.currency._id
        }
    })

    const onSubmit = handleSubmit(data => {
        props.updateBicycle(props.bicycleId, data)
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
                        rules={{ required: true, minLength: 6, maxLength: 100 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.title && <p className="error">title is required</p>}
                </Form.Item>

                <Form.Item label="Description">
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

                <Form.Item label="Rating">
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: true, min: 0, max: 5 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.rating ? <p className="error">rating is required</p> : null}
                </Form.Item>

                <Form.Item label="Reviews_count">
                    <Controller
                        name="reviews_count"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.reviews_count ? <p className="error">reviews_count is required</p> : null}
                </Form.Item>

                <Form.Item label="Price">
                    <Controller
                        name="price"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.price ? <p className="error">price is required</p> : null}
                </Form.Item>

                <Form.Item label='Currency'>
                    <Controller
                        name="currency._id"
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

                <Form.Item label='Color'>
                    <Controller
                        name="color"
                        control={control}
                        rules={{ required: true, minLength: 2, maxLength: 32 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.color && <p className="error">color is required</p>}
                </Form.Item>

                <Form.Item label="Speeds count">
                    <Controller
                        name="speeds_count"
                        control={control}
                        rules={{ required: true, min: 0, max: 100 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.speeds_count ? <p className="error">speeds count is required</p> : null}
                </Form.Item>

                <Form.Item label='Pedals'>
                    <Controller
                        name="pedals"
                        control={control}
                        rules={{ required: true, minLength: 0, maxLength: 100 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.pedals && <p className="error">pedals is required</p>}
                </Form.Item>

                <Form.Item label='Brakes'>
                    <Controller
                        name="brakes"
                        control={control}
                        rules={{ required: true, minLength: 6, maxLength: 100 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.brakes && <p className="error">brakes is required</p>}
                </Form.Item>

                <Form.Item label="Shock absorber" name="shock_absorber" valuePropName="checked">
                    <Controller
                        name="shock_absorber"
                        control={control}
                        //rules={{ required: true, min: 0 }}
                        render={({ field }) => <Checkbox checked={field.value} {...field} />}
                    />
                    {errors.shock_absorber ? <p className="error">shock absorber is required</p> : null}
                </Form.Item>

                <Form.Item label="Wheel">
                    <Controller
                        name="wheel"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.wheel ? <p className="error">wheel is required</p> : null}
                </Form.Item>

                <Form.Item label="Frame size">
                    <Controller
                        name="frame_size"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.frame_size ? <p className="error">frame_size is required</p> : null}
                </Form.Item>

                <Form.Item label="Rider height">
                    <Controller
                        name="rider_height"
                        control={control}
                        rules={{ required: true, min: 0 }}
                        render={({ field }) => <InputNumber {...field} />}
                    />
                    {errors.rider_height ? <p className="error">rider height is required</p> : null}
                </Form.Item>

                <Form.Item label='images'>
                    <Controller
                        name="images"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <>
                                <Upload
                                    {...field}
                                    fileList={watch('images').fileList}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                >
                                    {watch('images').fileList.length <= 5 && uploadButton}
                                </Upload>
                            </>
                        }
                    />

                    {errors.images ? <p className="error">image is required</p> : null}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Update