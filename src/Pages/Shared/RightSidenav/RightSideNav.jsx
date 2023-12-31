import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
           <div className='mb-6 p-4'>
           <h2 className="text-2xl font-bold p-2 mb-3">Login With</h2>
            <button className="btn btn-outline w-full p-4 mb-2">
                <FaGoogle className='mr-1'></FaGoogle>
                Login With Google
            </button>
            <button className="btn btn-outline w-full p-4">
                <FaGithub className='mr-1'></FaGithub>
                Login With Github
            </button>
           </div>
           <div className='mb-6 p-4'>
                <h2 className="text-2xl font-bold p-2 mb-3">Find Us On</h2>
                <a className='p-4 flex items-center text-lg rounded-t-lg border-1' href="">
                    <FaFacebook className='mr-2'></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex items-center text-lg border-x' href="">
                    <FaTwitterSquare className='mr-2'></FaTwitterSquare>
                    Twitter
                </a>
                <a className='p-4 flex items-center text-lg rounded-b-lg border-1' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    Instagram
                </a>
           </div>
           <div className='mb-6 p-4'>
                <h2 className="text-2xl font-bold p-2 mb-3">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2}alt="" />
                <img src={qZone3} alt="" />
           </div>
        </div>
    );
};

export default RightSideNav;