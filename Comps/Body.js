import styles from '../styles/Home.module.css';
import Image from "next/image";

const Body = () => {
    return (
    <div>
        <div className={styles.article}>
            <div className={styles.ImageContainer}>
                <Image
                    src="/imgs/profile6.png"
                    height={300} // 해당 크기만큼의 비율을 반응형으로 보장 받을 수 있게됨!!
                    width={300}
                    alt="img"
                />
            </div>
        </div>
    </div>
    );
} 
 
export default Body;