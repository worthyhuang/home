import Head from 'next/head';
import { useLanguage } from '../hooks/useLanguage';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import VideoWorks from '../components/home/VideoWorks';
import Brands from '../components/home/Brands';
import SocialStats from '../components/home/SocialStats';
import Footer from '../components/home/Footer';

export default function Home() {
  const { language, translations, toggleLanguage } = useLanguage();

  return (
    <div>
      <Head>
        <title>{translations.siteTitle}</title>
        <meta name="description" content={translations.siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        translations={translations}
      />

      <main>
        <Hero translations={translations} />
        <About translations={translations} />
        <VideoWorks translations={translations} />
        <SocialStats translations={translations} />
        <Brands translations={translations} />
      </main>

      <Footer translations={translations} />
    </div>
  );
}
