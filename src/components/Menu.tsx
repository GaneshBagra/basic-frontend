import { } from 'react-bootstrap';
import logos from './logo.png'
import type React from 'react';
interface rnderProps{
    onClick:()=>void;
}

const menu: React.FC<rnderProps> = (props) => {
const {onClick} = props;

    return (
        <div className='mens'>
            <img className='mensimg' src={logos} />
            <button className='btns4' onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button>
 
        </div>
    )

}

export default menu