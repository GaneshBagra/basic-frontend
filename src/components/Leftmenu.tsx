
const Leftmenu = () => {
    return (
        <div className="main_box">

            <div className="sidebarl">
                <div className="menul">
                    <ul>
                        <li>
                            <i className="fa-regular fa-house"></i>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="fa-regular fa-thumbs-up"></i>
                            <a href="#">Liked Videos</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-clock-rotate-left"></i>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-video"></i>
                            <a href="#">My Content</a>
                        </li>
                        <li>
                            <i className="fa-regular fa-folder-open"></i>
                            <a href="#">Collections</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-user"></i>
                            <a href="#">Subscribers</a>
                        </li>
                        <li className="supportl">
                            <i className="fa-regular fa-circle-question"></i>
                            <a href="#">Supports</a>
                        </li>
                        <li className="settingsl">
                            <i className="fa-solid fa-gear"></i>
                            <a href="#">Setting</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Leftmenu