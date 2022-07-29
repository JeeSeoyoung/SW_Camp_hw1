
import Image from 'next/image';
import Instagram from '../public/imgs/instagram.png'
import Github from '../public/imgs/github.png'
import Facebook from '../public/imgs/facebook.png'

function ContactButton({contactName,url}){
    return(
        <div className='h-80 m-0 mx-4 text-center '>
            <a href={url}>
                <Image 
                    src={contactName}
                    height={30}
                    width={30}
                    alt='img'
                />
            </a>
        </div>
    )
}

const Footer = () => {
    const contactName = [Instagram,Facebook,Github];
    const url = ['https://www.instagram.com/__seoyoung.____/?hl=ko',
                '',
                'https://github.com/JeeSeoyoung']
    return (
    <div>
        <div className='flex text-center m-4 text-2xl font-bold justify-center'>
            <p>CONTACT</p>
        </div>

        <div className='flex justify-center item-center'>
            {contactName.map((data,idx) => <ContactButton key={idx} contactName={data} url={url[idx]}/>)}
        </div>
    </div>
    );
}

export default Footer;