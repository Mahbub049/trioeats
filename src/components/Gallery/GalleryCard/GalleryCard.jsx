import { FaUser } from 'react-icons/fa';
import './GalleryCard.css'
const GalleryCard = ({gallery}) => {
    const {image,name,feedback} = gallery;
    return (
        <div className="containers relative w-full">
            <img src={image} alt="Avatar" className="image rounded-lg h-[500px]"/>
            <div className="middle top-[50%] left-[50%] ">
                <div className="text bg-[linear-gradient(45deg,rgba(19,19,24,0.70),rgba(19,19,24,0.70))] bg-cover h-full w-full flex flex-col items-center justify-center text-white px-8 py-4 poppins">
                    <div>
                        <h3></h3>
                        <p className='text-xl mb-3'>{feedback}</p>
                    </div>
                    <div className='flex font-semibold text-lg justify-center items-center gap-2'>
                        {/* <FaUser className=' text-white'></FaUser> */}
                        <h2 className='mons italic font-bold text-orange-400'>{name}</h2>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default GalleryCard;