
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import { Toaster } from 'react-hot-toast';



const Root = () => {
    return (
        <div className='max-w-full mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Root;