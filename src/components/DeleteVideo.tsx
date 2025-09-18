import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { RiDeleteBin5Line } from 'react-icons/ri';
const DeleteVideo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" className='bg-transparent border-0' onClick={handleShow}>
                <RiDeleteBin5Line />
            </Button>
            <Modal show={show}
                onHide={handleClose}
                animation={false}
                keyboard={false}
                centered
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{border:"0"}}>
                    <Modal.Title id="example-modal-sizes-title-lg"><RiDeleteBin5Line />Delete Video
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p>Are you sure you want to delete this video? Once its deleted, you will not be able to recover it.</p>
                    <div className='d-flex' style={{ width: "100%" }}>
                        <div className='me-3 mt-3' style={{ width: "50%" }}>
                            <button style={{ width: "100%" }} className='border rounded-0'> Cancel</button>
                        </div>
                        <div className='mt-3' style={{ width: "50%" }}>
                            <button style={{ width: "100%", backgroundColor: "red" }} className='border-0 rounded-0'>Delete</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}
export default DeleteVideo;

