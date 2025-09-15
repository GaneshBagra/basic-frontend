import { IoMdMenu } from 'react-icons/io';
import logos from '../HeadSection/logo.png'


const PrivacyHeader = () => {
    return (
        <div className='prcconten'>
            <img src={logos} />
            <div className='privac d-flex'>
                <ul className="list-unstyled">
                    <li>
                        <a href="#" className="link-underline text-light link-underline-opacity-0">Home</a>
                    </li>
                    <li>
                        <a href="#" className="link-underline text-light link-underline-opacity-0">Products</a>
                    </li>
                    <li>
                        <a href="#" className="link-underline text-light link-underline-opacity-0">Resources</a>
                    </li>
                    <li>
                        <a href="#" className="link-underline text-light link-underline-opacity-0">Pricing</a>
                    </li>
                </ul>
                <button className='btns1'>Log in</button>
                <button className='btns2'>Sign up</button>

            </div>
            <hr className='hrline' />
            <div className='sidep'>
                <input type="checkbox" className="inputhider" id="click" />
                <div className="barp" id="click">
                    <label htmlFor="click" className='text-light mt-1'><IoMdMenu /></label>
                </div>
                <div className="sidebarp p-2 h-100 text-light">
                    <div className="menup m-10">
                        <img className='imges' src={logos} alt="this is not avlible" />
                        <ul className='list-unstyled'>
                            <li>
                                <a href="#" className="link-underline text-light link-underline-opacity-0">Home</a>
                            </li>
                            <li>
                                <a href="#" className="link-underline text-light link-underline-opacity-0">Products</a>
                            </li>
                            <li>
                                <a href="#" className="link-underline text-light link-underline-opacity-0">Resources</a>
                            </li>
                            <li>
                                <a href="#" className="link-underline text-light link-underline-opacity-0">Pricing</a>
                            </li>
                        </ul>
                        <button className='btns1-menup'>Log in</button>
                        <button className='btns2-menup'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PrivacyHeader;