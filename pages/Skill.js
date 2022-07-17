import styles from '../styles/Home.module.css'
import Image from "next/image";
const Skill = ()=>{
    return(
        <div className={styles.article}>
            <div className={styles.skills}>
                <div className={styles.skillsDetail}>
                    <h4>Program</h4>
                    <p>Figma  /  Illustrator  /  Photoshop  /  Unity</p>
                </div>
                <div className={styles.skillsDetail}>
                    <h4>Language</h4>
                    <p>Python  /  Html  /  CSS  /  Javascript</p>
                </div>
            </div>
        </div>
    );
}
export default Skill;