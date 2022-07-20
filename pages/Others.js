import Image from 'next/image';
import styles from '../styles/others.module.css';
import profile from '../public/imgs/profile_heera.jpg';

function Others() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.favContainer}>
                <Image
                    priority
                    src={profile}
                    className={styles.borderCircle}
                    height={200}
                    width={200}
                    alt="profile"
                />
            </div>
            <div style={{textAlign:'center'}}>
                <h1 className={styles.heading2Xl}>Heera Choi</h1>
                <div className={styles.contentTitle}>School of Global Entrepreneurship and ICT</div><br/>
                <section className={styles.contents}>
                    <div className={styles.contentTitle}>Major</div>
                    <div>ICT Convergence / Visual and Performing Arts</div>
                    <div className={styles.contentTitle}>Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Premiere Pro, After Effects</div>
                </section>
            </div>
        </div>
    );
};

export default Others;