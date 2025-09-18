import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { GoUpload } from 'react-icons/go';
import { FaPlus } from 'react-icons/fa';
import UploadingVideo from './UploadingVideo';
const UploadVideo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" className='text-dark' onClick={handleShow}>
                <FaPlus /> Upload Video
            </Button>
            <Modal show={show}
                size='lg'

                onHide={handleClose}
                animation={false}
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex border-bottom">
                        <div className="flex-center" style={{ width: "100%" }}>
                            <button className='p-0 m-2'><UploadingVideo /></button>
                        </div>
                    </div>

                    <div className=" upload-icon p-5">
                        <div><GoUpload className="upload-icon-icon" /></div>
                        <div><p><b>Drag and drop video files to upload</b></p></div>
                        <div><p>Your videos will be private untill you publish them.</p></div>
                        <button className="text-dark"><input type="file" id="Select-file" /> Select File</button>
                    </div>
                    <div className="files-thumb text-center">
                        <div>
                            <label htmlFor="file" className="labless border-0">Thumbnail<sup>*</sup></label><br />
                            <button className="filess"><input type="file" name="thumbnail" id="files" /></button>
                        </div>
                        <div>
                            <label htmlFor="titless" className='labless'>Title<sup>*</sup></label><br />
                            <input className="filess" type="text" name="title" id="titless" />
                        </div>
                        <div>
                            <label htmlFor="description" className='labless'>Description<sup>*</sup></label><br />
                            <textarea className="filess" name="description" id="description"></textarea>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UploadVideo;
