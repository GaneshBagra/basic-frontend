import logos from './logo.png'
const Rightmenu = () => {
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
            <img className='imges' src={logos} alt="this is not avlible" />
                    <ul>
                        <li>
                            <i className="fa-regular fa-thumbs-up"></i>
                            <a href="#">Liked Videos</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-video"></i>
                            <a href="#">My Content</a>
                        </li>
                        <li>
                            <i className="fa-regular fa-circle-question"></i>
                            <a href="#">Supports</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-gear"></i>
                            <a href="#">Setting</a>
                        </li>
                    </ul>
                    <button className='btns1-menu'>Log in</button>
                    <button className='btns2-menu'>Sign up</button>
                </div>
            </div>
        </div>
    )

}

export default Rightmenu