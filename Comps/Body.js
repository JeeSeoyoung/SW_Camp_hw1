import Image from "next/image";
import HomeImage from '../public/imgs/profile6.png';

const Body = () => {
    return (
        <div className='flex justify-center item-center h-80 m-20'>
            <div className='h-80 text-center'>
                <Image
                    src={HomeImage}
                    height={300} // 해당 크기만큼의 비율을 반응형으로 보장 받을 수 있게됨!!
                    width={300}
                    alt="img"
                />
            </div>
        </div>
    );
} 
 
export default Body;