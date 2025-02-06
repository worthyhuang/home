import styles from '../../styles/home/VideoWorks.module.css';
import Image from 'next/image';

export default function VideoWorks({ translations }) {
  const videos = [
    {
      id: 1,
      title: 'Project 1',
      thumbnail: '/images/video-thumb-1.jpg',
      url: 'https://www.youtube.com/watch?v=xxx'
    },
    {
      id: 2,
      title: 'Project 2',
      thumbnail: '/images/video-thumb-2.jpg',
      url: 'https://www.youtube.com/watch?v=yyy'
    },
    {
      id: 3,
      title: 'Project 3',
      thumbnail: '/images/video-thumb-3.jpg',
      url: 'https://www.youtube.com/watch?v=zzz'
    }
  ];

  return (
    <section className={styles.videoWorks} id="works">
      <h2>{translations.works.title}</h2>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.thumbnail}>
              <Image
                src={video.thumbnail}
                alt={video.title}
                layout="fill"
                objectFit="cover"
              />
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.playButton}
              >
                <span className={styles.playIcon}>▶</span>
              </a>
            </div>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
} 