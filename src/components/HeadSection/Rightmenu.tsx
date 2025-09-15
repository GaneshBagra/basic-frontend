import { AiOutlineLike } from 'react-icons/ai'
import logos from './logo.png'
import { FaVideo } from 'react-icons/fa'
import { CiCircleQuestion, CiSettings } from 'react-icons/ci'
import { IoMdMenu } from 'react-icons/io'
const Rightmenu = () => {
    return (
        <div>
            <input type="checkbox" className="inputhider" id="click" />
            <div className="barr" id="click">
                <label htmlFor="click" className='text-light mt-1'><IoMdMenu /></label>
            </div>
            <div className="sidebarr p-2 h-100 text-light">
                <div className="menur m-10">
                    <img className='imges' src={logos} alt="this is not avlible" />
                    <ul className='list-unstyled'>
                        <li>
                            <AiOutlineLike className="text-light m-2" />
                            <a href="#"  className="link-underline text-light link-underline-opacity-0">Liked Videos</a>
                        </li>
                        <li>
                            <FaVideo className="text-light m-2" />
                            <a href="#"  className="link-underline text-light link-underline-opacity-0">My Content</a>
                        </li>
                        <li>
                            <CiCircleQuestion className="text-light m-2" />
                            <a href="#"  className="link-underline text-light link-underline-opacity-0">Supports</a>
                        </li>
                        <li>
                            <CiSettings className="text-light m-2" />
                            <a href="#"  className="link-underline text-light link-underline-opacity-0">Setting</a>
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