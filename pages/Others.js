import Image from 'next/image';
import profile from '../public/imgs/profile_heera.jpg';

function Others() {
    return (
        <div className='flex justify-center item-center h-80 m-20'>
            <div className='flex flex-col'>
                <div className='flex-1 h-80 w-80 text-center item-center'>
                    <Image className='rounded-full'
                        src={profile}
                        height={170}
                        width={170}
                        alt="img"
                    />
                </div>
                <div className='flex-1 text-sm text-center leading-6 mt-1'>
                    <h2 className='font-semibold text-base'>💛Heera Choi💛</h2>
                    <div>School of Global Entrepreneurship and ICT</div><br/>
                
                    <div>Major</div>
                    <div>ICT Convergence / Visual and Performing Arts</div>
                    <div>Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Premiere Pro, After Effects</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Others;