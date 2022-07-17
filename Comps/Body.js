import styles from '../styles/Home.module.css'

const Body = () => {
    return (
    <div>
        <div className={styles.article}>
            <div className={styles.ImageContainer}>
            <img className={styles.homeImage} src='/imgs/profile2.png'></img>
            </div>
        </div>
    </div>
    );
} 
 
export default Body;