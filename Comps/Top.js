import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Top = () => {
    return (
    <div className={styles.top}>
        <Link href="/">
        <a><h1 className={styles.title}>SEOYOUNG</h1></a>
        </Link>
        <p className={styles.p}>Welcome To My Website \o/</p>
        <div className={styles.Nav}>
            <div className={styles.navName}>
                <Link href="/AboutMe"><a><h3>About me</h3></a></Link>
            </div>
            <div className={styles.navName}>
                <Link href="/"><a><h3>Home</h3></a></Link>
            </div>
            <div className={styles.navName}>
                <Link href="/Skill"><a><h3>Skill</h3></a></Link>
            </div>
        </div>
    </div>
    );
}

export default Top;