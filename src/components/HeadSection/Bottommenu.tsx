import { FaFolder, FaHistory, FaHome, FaUserCheck } from "react-icons/fa"
const Bottommenu = () => {
    return (
        <div className="sidebarb">
            <div className="menub">
                <ul className="m-0 p-0 align-items-center">

                    <li className="buttombuttons">
                        <FaHome className="text-light" /><br />
                        <a href="#" className="link-underline text-light link-underline-opacity-0">Home</a>
                    </li>
                    <li className="buttombuttons">
                        <FaHistory className="text-light" /><br />
                        <a href="#" className="link-underline text-light link-underline-opacity-0">History</a>
                    </li>
                    <li className="buttombuttons">
                        <FaFolder className="text-light" /><br />
                        <a href="#" className="link-underline text-light link-underline-opacity-0">Collections</a>
                    </li>
                    <li className="buttombuttons">
                        <FaUserCheck className="text-light" /><br />
                        <a href="#" className="link-underline text-light link-underline-opacity-0">Subscribers</a>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Bottommenu