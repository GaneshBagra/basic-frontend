import { } from 'react-bootstrap';
import logos from './logo.png'
import type React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
interface rnderProps{
    onClick:()=>void;
}

const menu: React.FC<rnderProps> = (props) => {
const {onClick} = props;

    return (
        <div className='mens'>
            <img className='mensimg' src={logos} />
            <button className='btns4' onClick={onClick}>
                <GiHamburgerMenu />
            </button>
 
        </div>
    )

}

export default menu