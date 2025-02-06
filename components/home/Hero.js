import styles from '../../styles/home/Hero.module.css';
import Image from 'next/image';

export default function Hero({ translations }) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>{translations.siteTitle}</h1>
        <p className={styles.description}>{translations.siteDescription}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-image.jpg"
          alt="Visual Art"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
} 