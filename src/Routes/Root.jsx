import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Toaster } from 'react-hot-toast'; // resolved conflict

const Root = () => {
    return (
        <div className='max-w-full mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/> {/* resolved conflict */}
        </div>
    );
};

export default Root;
