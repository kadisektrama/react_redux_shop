import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import {
    Form,
    Input,
    Button,
} from 'antd'

import { TCurrencyDataSingle, TCurrency } from '../../../../types/types'

type TDispatchProps = {
    updateCurrency: (currencyId: string, body: TCurrency) => void
}

type TMapProps = {
    currencyId: string,
    isLoaded: boolean,
    currency: TCurrencyDataSingle
}

const update: React.FC<TDispatchProps & TMapProps> = (props) => {
    const { handleSubmit, control, formState: { errors } } = useForm<TCurrency>({
        defaultValues: { ...props.currency.data }
    })

    const onSubmit = handleSubmit(data => {
        props.updateCurrency(props.currencyId, data)
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
                <Form.Item label='name'>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true, minLength: 2, maxLength: 4 }}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.name && <p className="error">name is required</p>}
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default update