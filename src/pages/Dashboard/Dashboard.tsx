import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import images from "../../components/layout/imges.webp"
import UploadVideo from "../../components/UploadVideo";
import DeleteVideo from "../../components/DeleteVideo";
import EditVideo from "../../components/EditVideo";

const dummyData = [
    { "title": "The Future of Artificial Intelligence in 2024", "like": 312, "dislike": 12, "date": "15/01/24" },
    { "title": "Exploring the Beauty of the Amazon Rainforest", "like": 523, "dislike": 28, "date": "02/02/24" },
    { "title": "Top 10 Gadgets to Look for in 2025", "like": 768, "dislike": 42, "date": "10/03/24" },
    { "title": "The Science Behind Climate Change Solutions", "like": 412, "dislike": 16, "date": "21/04/24" },
    { "title": "How Blockchain Technology is Changing Finance", "like": 569, "dislike": 33, "date": "19/05/24" },
    { "title": "The Future of Electric Vehicles in Urban Cities", "like": 450, "dislike": 21, "date": "25/06/24" },
    { "title": "Artificial Intelligence in Healthcare: A Breakthrough", "like": 623, "dislike": 25, "date": "04/07/24" },
    { "title": "A Deep Dive into Space Exploration Programs", "like": 874, "dislike": 37, "date": "13/08/24" },
    { "title": "The Rise of Plant-Based Diets: Trends and Impact", "like": 721, "dislike": 45, "date": "09/09/24" },
    { "title": "The Role of Social Media in Modern Politics", "like": 582, "dislike": 57, "date": "17/10/24" },
    { "title": "5 Key Developments in Quantum Computing", "like": 330, "dislike": 18, "date": "03/11/24" },
    { "title": "Virtual Reality: The Future of Entertainment", "like": 794, "dislike": 19, "date": "29/12/24" },
    { "title": "Understanding Cryptocurrency Market Trends in 2025", "like": 430, "dislike": 30, "date": "08/01/25" },
    { "title": "The Impact of 5G on Mobile Networks", "like": 298, "dislike": 14, "date": "11/02/25" },
    { "title": "Exploring the Dark Web: Myths and Facts", "like": 612, "dislike": 51, "date": "25/03/25" },
    { "title": "Is Remote Work the Future of Business?", "like": 735, "dislike": 33, "date": "15/04/25" },
    { "title": "The Role of AI in Personalized Education", "like": 891, "dislike": 26, "date": "07/05/25" },
    { "title": "Exploring the Depths of the Ocean: What We Know", "like": 415, "dislike": 21, "date": "18/06/25" },
    { "title": "Smart Homes: The Next Step in Home Automation", "like": 634, "dislike": 39, "date": "22/07/25" },
    { "title": "How 3D Printing is Revolutionizing Manufacturing", "like": 509, "dislike": 29, "date": "03/08/25" },
    { "title": "The Evolution of Smart Cities Around the World", "like": 478, "dislike": 41, "date": "09/09/25" },
    { "title": "Future of Work: How Automation Will Change Jobs", "like": 532, "dislike": 23, "date": "16/10/25" },
    { "title": "How Artificial Intelligence is Shaping Art and Design", "like": 289, "dislike": 19, "date": "21/11/25" },
    { "title": "Impact of Global Warming on Agriculture", "like": 635, "dislike": 15, "date": "13/12/25" },
    { "title": "The Next Big Thing in Wearable Technology", "like": 712, "dislike": 32, "date": "25/12/25" },
    { "title": "Revolutionizing Transportation with Hyperloop Technology", "like": 880, "dislike": 24, "date": "31/12/25" },
    { "title": "The Rise of Smart Grids in Renewable Energy", "like": 642, "dislike": 28, "date": "22/01/24" },
    { "title": "Deep Learning and Its Applications in Medicine", "like": 533, "dislike": 16, "date": "17/02/24" },
    { "title": "Why Renewable Energy is the Future", "like": 748, "dislike": 25, "date": "12/03/24" },
    { "title": "The Evolution of Internet Security Threats", "like": 431, "dislike": 19, "date": "02/04/24" },
    { "title": "Self-Driving Cars: How Close Are We?", "like": 699, "dislike": 22, "date": "06/05/24" },
    { "title": "How AI is Reshaping the Job Market", "like": 581, "dislike": 30, "date": "14/06/24" },
    { "title": "The Impact of Augmented Reality on Shopping", "like": 522, "dislike": 27, "date": "06/07/24" },
    { "title": "The Rise of Autonomous Drones in Industry", "like": 455, "dislike": 21, "date": "11/08/24" },
    { "title": "How IoT is Connecting the World", "like": 602, "dislike": 20, "date": "30/09/24" },
    { "title": "Advancements in Nanotechnology: What's Next?", "like": 736, "dislike": 17, "date": "02/10/24" },
    { "title": "The Role of Biotechnology in Healthcare Innovation", "like": 589, "dislike": 23, "date": "19/11/24" },
    { "title": "The Ethics of Artificial Intelligence: A Debate", "like": 347, "dislike": 38, "date": "18/12/24" },
    { "title": "Electric Cars and the Future of Fuel Economy", "like": 742, "dislike": 15, "date": "05/01/25" },
    { "title": "The Future of Space Tourism: 2025 and Beyond", "like": 876, "dislike": 30, "date": "22/02/25" },
    { "title": "Breaking Down the Internet of Things", "like": 678, "dislike": 24, "date": "30/03/25" },
    { "title": "The Power of Big Data in Business Strategy", "like": 586, "dislike": 21, "date": "17/04/25" },
    { "title": "How Digital Twins Are Transforming Industries", "like": 701, "dislike": 26, "date": "20/05/25" },
    { "title": "Blockchain Beyond Cryptocurrency: Real-World Applications", "like": 444, "dislike": 15, "date": "12/06/25" },
    { "title": "Green Technologies and Their Role in Sustainability", "like": 760, "dislike": 20, "date": "03/07/25" },
    { "title": "The Impact of Automation on Global Supply Chains", "like": 635, "dislike": 18, "date": "09/08/25" },
    { "title": "Exploring the Impact of AI in Creative Fields", "like": 512, "dislike": 35, "date": "15/09/25" },
    { "title": "How Machine Learning is Improving Healthcare Diagnostics", "like": 634, "dislike": 40, "date": "04/10/25" },
    { "title": "The Environmental Impact of Fast Fashion", "like": 542, "dislike": 32, "date": "11/11/25" },
    { "title": "Is Data Privacy Possible in the Digital Age?", "like": 799, "dislike": 24, "date": "09/12/25" },
    { "title": "The Future of Digital Payments and Fintech", "like": 725, "dislike": 20, "date": "18/12/25" },
    { "title": "How AI is Revolutionizing Customer Service", "like": 654, "dislike": 31, "date": "24/12/25" },
    { "title": "The Future of Global Transportation Networks", "like": 581, "dislike": 23, "date": "28/12/25" },
    { "title": "Artificial Intelligence in Education: Transforming Classrooms", "like": 703, "dislike": 14, "date": "10/01/24" },
    { "title": "Exploring Mars: The Next Frontier in Space", "like": 548, "dislike": 18, "date": "20/02/24" },
    { "title": "How Cloud Computing is Changing the Business World", "like": 482, "dislike": 20, "date": "17/03/24" },
    { "title": "The Future of Renewable Energy Sources", "like": 526, "dislike": 22, "date": "05/04/24" },
    { "title": "Impact of Artificial Intelligence in Creative Industries", "like": 467, "dislike": 25, "date": "29/05/24" },
    { "title": "Blockchain: The Next Step in Digital Trust", "like": 671, "dislike": 19, "date": "15/06/24" },
    { "title": "How the Internet of Things is Reshaping Healthcare", "like": 529, "dislike": 17, "date": "22/07/24" },
    { "title": "The Growing Role of Cybersecurity in a Digital World", "like": 603, "dislike": 21, "date": "18/08/24" },
    { "title": "The Future of Agriculture: How Technology is Changing Farming", "like": 457, "dislike": 24, "date": "25/09/24" },
    { "title": "How Virtual Reality is Enhancing Education", "like": 598, "dislike": 29, "date": "11/10/24" },
    { "title": "Augmented Reality: A Game Changer for Retail", "like": 624, "dislike": 20, "date": "01/11/24" },
    { "title": "The Role of Artificial Intelligence in Autonomous Vehicles", "like": 535, "dislike": 26, "date": "04/12/24" },
    { "title": "How Automation is Reshaping Manufacturing", "like": 682, "dislike": 22, "date": "17/01/25" },
    { "title": "The Evolution of Online Shopping: Trends to Watch", "like": 715, "dislike": 18, "date": "28/02/25" },
    { "title": "The Impact of 3D Printing on Medicine and Healthcare", "like": 543, "dislike": 23, "date": "15/03/25" },
    { "title": "The Future of Digital Content Creation", "like": 655, "dislike": 19, "date": "02/04/25" },
    { "title": "Smart Cities: The Integration of Technology and Urban Life", "like": 731, "dislike": 24, "date": "13/05/25" },
    { "title": "The Potential of Genetic Engineering in Medicine", "like": 562, "dislike": 15, "date": "22/06/25" },
    { "title": "The Importance of Digital Transformation in Business", "like": 690, "dislike": 29, "date": "07/07/25" }
]


const Dashboard = () => {
    return (
        <div className="text-light d-flex w-100 h-100 p-2">

            <div className="row w-100">

                <div className="col-10">
                    <h2>Weclome Back, React Patterns</h2>
                    <p>Seamless Video Management, Elevated Results.</p>
                </div>

                <div className="col-2">
                    <UploadVideo />
                </div>

                <div className="col-3 border total">

                    <div>
                        <IoEyeOutline className="bg-light text-dark rounded-circle" />
                    </div>
                    <div>
                        <p>Total like</p>
                        <h3>22,234</h3>
                    </div>

                </div>

                <div className="col-3 border total">

                    <div>
                        <FaRegUser className="bg-light text-dark rounded-circle" />
                    </div>
                    <div>
                        <p>Total subscribers</p>
                        <h3>4,053</h3>
                    </div>

                </div>

                <div className="col-3 border total me-0">

                    <div>
                        <FaRegHeart className="bg-light text-dark rounded-circle" />
                    </div>
                    <div>
                        <p>Total likes</p>
                        <h3>63,021</h3>
                    </div>

                </div>

                <table className="ms-3 m-auto dashboard-table text-center">
                    <tr className="border">
                        <th>Status</th>
                        <th>Status</th>
                        <th>Uploaded</th>
                        <th>Rating</th>
                        <th>Date Uploaded</th>
                        <th></th>
                        <th></th>
                    </tr>

                    {dummyData.map((item) => (
                        <tr>
                            <td>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                                </div>
                            </td>
                            <td>
                                <span className="rounded-pill border border-success text-success p-1">Published</span>
                            </td>
                            <td>
                                <div className="d-flex  justify-content-center">
                                    <div>
                                        <img className="profile-icons rounded-circle" src={images} alt="" />
                                    </div>
                                    <div className="m-auto ms-1 m-end-0">
                                        <p><b>{item.title}</b></p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="rounded-pill text-bg-light p-1 m-1">{item.like} likes</span>
                                <span className="rounded-pill text-bg-info p-1 m-1">{item.dislike} dislikes</span>
                            </td>
                            <td>
                                <p>{item.date}</p>
                            </td>
                            <td>
                                <button className="bg-transparent p-0">
                                    <DeleteVideo />
                                </button>
                            </td>
                            <td>
                                <button className="bg-transparent p-0">
                                    <EditVideo />
                                </button>
                            </td>
                        </tr>

                    ))}


                </table>


            </div>





        </div >
    )
}

export default Dashboard;