import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { GoPencil } from 'react-icons/go';
import imges from "../components/layout/imges.webp"

const EditVideo = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const DummyData = [
        {
            id: 1,
            title: "Artificial Intelligence",
            description: "Artificial Intelligence is rapidly evolving and is expected to revolutionize industries such as healthcare, finance, transportation, and education by enabling automation, decision-making, and personalized experiences at scale."
        },
        {
            id: 2,
            title: "Amazon Rainforest",
            description: "The Amazon Rainforest, known as the lungs of the Earth, is home to millions of species and plays a vital role in regulating the planet's climate, but it faces increasing threats from deforestation, mining, and climate change."
        },
        {
            id: 3,
            title: "Tech Gadgets 2025",
            description: "From foldable phones to AI-powered smart assistants, the tech landscape in 2025 is expected to be filled with cutting-edge gadgets that push the boundaries of innovation, connectivity, and user experience."
        },
        {
            id: 4,
            title: "Climate Change Solutions",
            description: "To combat climate change, scientists and governments are exploring solutions like carbon capture, renewable energy, reforestation, and global policy reforms aimed at reducing greenhouse gas emissions and promoting sustainability."
        },
        {
            id: 5,
            title: "Blockchain in Finance",
            description: "Blockchain is not just about cryptocurrency—it’s transforming the financial sector by enabling secure, transparent transactions, reducing fraud, and creating decentralized finance systems accessible to a global audience."
        },
        {
            id: 6,
            title: "Electric Vehicles",
            description: "Electric vehicles are becoming mainstream thanks to advances in battery technology, government incentives, and growing environmental awareness, leading to cleaner transportation and reduced dependence on fossil fuels."
        },
        {
            id: 7,
            title: "AI in Healthcare",
            description: "AI in healthcare is improving diagnostics, predicting patient outcomes, and personalizing treatment plans while also streamlining administrative processes, ultimately enhancing patient care and operational efficiency."
        },
        {
            id: 8,
            title: "Space Exploration",
            description: "Private and public space agencies are expanding efforts to explore Mars, the Moon, and beyond, with goals ranging from scientific research and satellite deployment to commercial travel and potential colonization."
        },
        {
            id: 9,
            title: "Plant-Based Diets",
            description: "Plant-based diets are gaining popularity for their health benefits, environmental sustainability, and ethical considerations, driving innovation in food products and reshaping global dietary habits."
        },
        {
            id: 10,
            title: "Social Media Politics",
            description: "Social media platforms are playing an increasingly influential role in shaping political opinions, spreading information quickly, mobilizing voters, and raising concerns over misinformation and data privacy."
        },
        {
            id: 11,
            title: "Quantum Computing",
            description: "Quantum computing promises exponential processing power by leveraging quantum bits, enabling breakthroughs in cryptography, drug discovery, and complex simulations that are currently beyond classical computers."
        },
        {
            id: 12,
            title: "Virtual Reality Entertainment",
            description: "Virtual reality is revolutionizing entertainment by offering immersive experiences in gaming, virtual concerts, interactive storytelling, and even education, changing how we engage with digital content."
        },
        {
            id: 13,
            title: "Cryptocurrency Trends",
            description: "Cryptocurrency continues to disrupt traditional finance with trends like decentralized exchanges, NFTs, stablecoins, and the ongoing push for regulatory clarity in digital asset markets worldwide."
        },
        {
            id: 14,
            title: "5G Networks",
            description: "5G technology is enhancing mobile networks with faster speeds, lower latency, and the capacity to support IoT, smart cities, and augmented reality applications that require real-time connectivity."
        },
        {
            id: 15,
            title: "The Dark Web",
            description: "The dark web is a hidden part of the internet used for anonymous communication and transactions, often associated with illicit activities, but also serving as a space for whistleblowers and activists in oppressive regimes."
        },
        {
            id: 16,
            title: "Remote Work",
            description: "The shift to remote work has transformed business operations, encouraging flexible schedules, reliance on digital tools, and new approaches to employee collaboration, productivity, and work-life balance."
        },
        {
            id: 17,
            title: "AI in Education",
            description: "AI is revolutionizing education by enabling personalized learning, automating grading, analyzing student performance, and helping educators adapt teaching methods to meet individual student needs."
        },
        {
            id: 18,
            title: "Ocean Exploration",
            description: "Ocean exploration is revealing the mysteries of deep-sea ecosystems, discovering new species, and helping scientists understand climate systems, underwater geology, and potential resources like rare minerals."
        },
        {
            id: 19,
            title: "Smart Homes",
            description: "Smart homes integrate IoT devices that control lighting, climate, security, and appliances, offering convenience, energy efficiency, and automation that enhance everyday living and home management."
        },
        {
            id: 20,
            title: "3D Printing",
            description: "3D printing is changing industries by enabling rapid prototyping, custom manufacturing, and innovative design in fields such as medicine, aerospace, construction, and fashion with reduced material waste."
        }
    ];


    return (
        <div>
            <Button variant="primary" className='bg-transparent border-0' onClick={handleShow}>
                <GoPencil />
            </Button>
            <Modal show={show}
                onHide={handleClose}
                animation={false}
                keyboard={false}
                centered
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton style={{border:"0"}}>
                    <Modal.Title id="example-modal-sizes-title-lg">Edit Video
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Share where you've worked on your profile.</p>


                    <label htmlFor="file" className="labless border-0">Thumbnail<sup>*</sup></label><br />
                    <div style={{ height: "300px", width: "100%", border: "1px dashed", padding: "5px" }}>
                        <img style={{ width: "100%", height: "100%" }} src={imges} alt="" />
                    </div>
                    <div>
                        <label htmlFor="titless" className='labless'>Title<sup>*</sup></label><br />
                        <input className="filess" value={DummyData[0].title} style={{ width: "100%" }} type="text" name="title" id="titless" />
                    </div>
                    <div>
                        <label htmlFor="description" className='labless'>Description<sup>*</sup></label><br />
                        <textarea className="filess" style={{ width: "100%" }} value={DummyData[0].description} name="description" id="description"></textarea>
                    </div>




                    <div className='d-flex' style={{ width: "100%" }}>
                        <div className='me-3 mt-3' style={{ width: "50%" }}>
                            <button style={{ width: "100%" }} className='border rounded-0'> Cancel</button>
                        </div>
                        <div className='mt-3' style={{ width: "50%" }}>
                            <button style={{ width: "100%", backgroundColor: "blue" }} className='border-0 rounded-0'>Update</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}
export default EditVideo;