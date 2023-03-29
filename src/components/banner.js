import Logo from '../../public/logo.png';
import Image from 'next/image';
import customStyles from './banner.module.css';
import { useContext } from 'react';
import navValues from '@/helpers/navValues';
import { navigationContext } from "./app";



const Banner = (props) => {
    const { navigate } = useContext(navigationContext);
    return (
        <header className='row mb-4'>
            <div className='col-5 mt-3'>
                <Image src={Logo} alt="me" width="64" height="64" className={customStyles.logo} onClick={()=>navigate(navValues.home)}/>
            </div>
            <div className='col-7 mt-5' style={{ fontSize: 'x-large', fontStyle: 'italic', color: 'coral' }}>
                {props.headerText}
            </div>
        </header>
    );
}

export default Banner;