import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { FaCheckCircle, FaFilm, FaPlus } from 'react-icons/fa';
const UploadedVideo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" className='text-dark' onClick={handleShow}>
                <FaPlus /> Upload Video
            </Button>
            <Modal show={show}
                onHide={handleClose}
                animation={false}
                keyboard={false}
                centered
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{border:"0"}}>
                    <Modal.Title id="example-modal-sizes-title-lg">Uploading Video
                        <p className='h6'>Track your video uploading process.</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="d-flex border p-1">
                        <div className='h3 m-2'>
                            <FaFilm className='bg-light text-dark rounded-circle' />
                        </div>
                        <div>
                            <p>Dashboard prototype recording.mp4 <br />16 MB</p>
                            <br />
                            <div className='d-flex' >
                                <div>
                                    <FaCheckCircle className='text-primary'/>
                                </div>
                                <div>
                                    <span className="sr-only m-2">Uploaded Successfully</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div  className='d-flex' style={{width:"100%"}}>
                        <div className='me-3 mt-3'style={{width:"50%"}}>
                            <button style={{width:"100%"}} className='border rounded-0'> Cancel</button>
                        </div>
                        <div className='mt-3' style={{width:"50%"}}>
                            <button style={{width:"100%",backgroundColor:"white"}} className='border text-dark rounded-0'>Finish</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UploadedVideo;

