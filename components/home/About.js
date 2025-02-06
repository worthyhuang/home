import styles from '../../styles/home/About.module.css';
import Image from 'next/image';

export default function About({ translations }) {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.content}>
          <h2>{translations.about.title}</h2>
          <p>{translations.about.description}</p>
        </div>
      </div>
    </section>
  );
} 