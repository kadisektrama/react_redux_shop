import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import { Form, Button, Select } from 'antd'

import { TOrderDataSingle, TOrder } from '../../../../types/types'
import { statuses } from '../../../../utils/constants/statuses'

type TDispatchProps = {
    updateOrder: (orderId: string, body: TOrder) => void
}

type TMapStateToProps = {
    orderId: string,
    isLoaded: boolean,
    order: TOrderDataSingle
}

const Update: React.FC<TDispatchProps & TMapStateToProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TOrder>({
        defaultValues: { ...props.order.data }
    })

    const onSubmit = handleSubmit(data => {
        props.updateOrder(props.orderId, data)
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
                <Form.Item label='Status'>
                    <Controller
                        name="status"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <Select {...field}>
                                {(Object.keys(statuses) as Array<keyof typeof statuses>).map(status => <Select.Option key={status} value={status}>{status}</Select.Option>)}
                            </Select>
                        }
                    />

                    {errors.status ? <p className="error">currency is required</p> : null}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Update