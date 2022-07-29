import Link from 'next/link';



function NavButton({navName,url}){
    return(
        <div className='min-w-[5rem]'>
            <Link href={url}>
                <a className='text-[1.1rem] text-center font-bold hover:text-myblue'>
                    {navName}
                </a>
            </Link>
        </div>
    )
}

const Top = () => {
    const navName = ["About Me","Home","Skills","Others"];
    const url = ["/AboutMe","/","Skill","Others"];

    return (
    <div className='text-center mt-8 mx-8 mb-0 leading-4'>
        <Link href="/">
            <a className='text-5xl font-bold mb-4 text-myblue'>SEOYOUNG</a>
        </Link>
        <p className='text-[0.9rem] leading-10'>Welcome To My Website \o/</p>
        <div className='flex justify-evenly items-center mt-9'>
            {navName.map((data,idx) => <NavButton key={idx} navName={data} url = {url[idx]}/>)}
        </div>
    </div>
    );
}

export default Top;