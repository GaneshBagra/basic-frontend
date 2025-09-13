
// import "./App.css"

const Leftmenu = () => {
    return (
        <div className="main_boxr">
            <input type="checkbox" className="inputhider" id="click" />
                {/* <div className="crossr" id="click">
                    <label htmlFor="click"><i className="fa-solid fa-xmark"></i></label>
                </div> */}
            <div className="barr" id="click">
                <label htmlFor="click"><i className="fa-solid fa-bars"></i></label>
            </div>
            <div className="sidebarr">
                <div className="menur">
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
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Leftmenu