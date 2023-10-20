
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const Root = () => {
    return (
        <div className='max-w-full mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;