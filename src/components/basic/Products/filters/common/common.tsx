import React from "react"
import { Button, Modal } from 'antd'

export const Common: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <Button onClick={showModal}>Filters</Button>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}