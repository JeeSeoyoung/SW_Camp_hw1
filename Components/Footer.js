import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
    <div>
        <div className={styles.contactT}>
            <h2>CONTACTS</h2>
        </div>

        <div className={styles.contact}>
            <div className={styles.ImageContainer}>
                <a href='https://www.instagram.com/__seoyoung.____/?hl=ko' target="_blank" rel="noopener noreferrer">
                    <img className={styles.contactIMG} src='/imgs/instagram.png'></img></a>
            </div>
            <div className={styles.ImageContainer}>
                <a href=''><img className={styles.contactIMG} src='/imgs/facebook.png'></img></a>
            </div>
            <div className={styles.ImageContainer}>
                <a href='https://github.com/JeeSeoyoung' target="_blank" rel="noopener noreferrer">
                    <img className={styles.contactIMG} src='/imgs/github.png'></img></a>
            </div>
        </div>
    </div>
    );
}

export default Footer;