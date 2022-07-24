import styles from '../styles/Home.module.css'
import Link from 'next/link';
import styled from 'styled-components';

const HomeTitle = styled.a`
font-size: 3rem;
margin-bottom: 1rem;
color: #4791FF;
`;

const Top = () => {
    return (
    <div className={styles.top}>
        <Link href="/">
            <HomeTitle>SEOYOUNG</HomeTitle>
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
            <div className={styles.navName}>
                <Link href="/Others"><a><h3>Others</h3></a></Link>
            </div>
        </div>
    </div>
    );
}

export default Top;