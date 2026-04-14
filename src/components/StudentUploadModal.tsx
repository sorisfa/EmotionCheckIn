import React from 'react';
import { Modal, Button, Input } from 'antd';

const StudentUploadModal = ({ visible, onClose }) => {
    const [file, setFile] = React.useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            // Process the CSV file and import student data
            console.log('Uploading file:', file);
            // Add your file upload logic here
            onClose();
        }
    };

    return (
        <Modal
            title="Upload Student Data"
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
            <Input type="file" accept=".csv" onChange={handleFileChange} />
            <Button type="primary" onClick={handleUpload} disabled={!file}>
                Import
            </Button>
        </Modal>
    );
};

export default StudentUploadModal;