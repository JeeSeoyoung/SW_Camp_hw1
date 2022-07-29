import Image from "next/image";
import Profile from '../public/imgs/Profile5.jpg';


const AboutMe = ()=>{
    return(
        <div className='flex justify-center item-center h-80 m-20'>
            <div className='flex flex-col'>
                <div className='flex-1 h-80 w-80 text-center item-center'>
                        <Image className='rounded-full'
                            src={Profile}
                            height={180}
                            width={180}
                            alt="img"
                        />
                </div>
                <div className='flex-1 text-sm text-center leading-10 mt-4'>
                    <h4 className='font-semibold text-base'>💜Jee Seoyoung💜</h4>
                    <p>Handong Global University</p>
                    <p>ICT Convergence/ UX Engineering</p>
                    <p>jiseo09863@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;