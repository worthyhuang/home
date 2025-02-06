import styles from '../../styles/home/Brands.module.css';
import Image from 'next/image';

export default function Brands({ translations }) {
  const brands = [
    { id: 1, name: 'Brand 1', logo: '/images/brands/brand1.png', url: 'https://brand1.com' },
    { id: 2, name: 'Brand 2', logo: '/images/brands/brand2.png', url: 'https://brand2.com' },
    { id: 3, name: 'Brand 3', logo: '/images/brands/brand3.png', url: 'https://brand3.com' },
    // ... 更多品牌
  ];

  return (
    <section className={styles.brands} id="brands">
      <h2>{translations.brands.title}</h2>
      <p>{translations.brands.description}</p>
      <div className={styles.grid}>
        {brands.map((brand) => (
          <a
            key={brand.id}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.brandItem}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={80}
              objectFit="contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
} 