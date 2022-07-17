import styles from '../styles/Home.module.css';
import Image from "next/image";
const AboutMe = ()=>{
    return(
        <div className={styles.article}>
            <div className={styles.aboutMe}>
                <div className={styles.ProfileContainer}>
                    <Image className={styles.profileImage}
                        src="/imgs/profile5.jpg"
                        height={180}
                        width={180}
                        alt="img"
                    />
                </div>
                <div className={styles.detail}>
                    <h4>
                        Jee Seoyoung
                    </h4>
                    <p>
                        Handong Global University
                    </p>
                    <p>
                        ICT Convergence/ UX Engineering
                    </p>
                    <p>
                        jiseo09863@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;