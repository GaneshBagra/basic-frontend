import { AiOutlineLike } from "react-icons/ai"
import { CiCircleQuestion, CiSettings } from "react-icons/ci"
import { FaFolder, FaHistory, FaHome, FaUserCheck, FaVideo } from "react-icons/fa"

const Leftmenu = () => {
    return (
        <div className="main_box">

            <div className="sidebarl">
                <div className="menul m-10">
                    <ul className="list-unstyled">
                        <li>
                            <FaHome className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">Home</a>
                        </li>
                        <li>
                            <AiOutlineLike className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">Liked Videos</a>
                        </li>
                        <li>
                            <FaHistory className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">History</a>
                        </li>
                        <li>
                            <FaVideo className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">My Content</a>
                        </li>
                        <li>
                            <FaFolder className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">Collections</a>
                        </li>
                        <li>
                            <FaUserCheck className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">Subscribers</a>
                        </li>
                        <li className="supportl">
                            <CiCircleQuestion className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">Supports</a>
                        </li>
                        <li className="settingsl">
                            <CiSettings className="text-light m-2" />
                            <a href="#" className="link-underline text-light link-underline-opacity-0">Setting</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )

}

export default Leftmenu