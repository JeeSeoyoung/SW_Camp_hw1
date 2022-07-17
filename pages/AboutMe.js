import styles from '../styles/Home.module.css';
import Image from "next/image";
const AboutMe = ()=>{
    return(
        <div className={styles.article}>
            
            <div className={styles.ProfileContainer}>
                {/* <img className={styles.profileImage} src='/imgs/profile4.jpg'></img> */}
            
                <Image className={styles.profileImage}
                    src="/imgs/profile4.jpg"
                    height={300}
                    width={224}
                    alt="img"
                />
            </div>
            <div className={styles.detail}>
                <h1>
                    Jee Seoyoung
                </h1>
            </div>
        </div>
    );
}
export default AboutMe;