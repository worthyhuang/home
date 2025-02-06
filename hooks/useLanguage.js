import { useState, useEffect } from 'react';
import translations from '../utils/translations';

export function useLanguage() {
  const [language, setLanguage] = useState('zh');

  useEffect(() => {
    // 从 localStorage 获取语言设置
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return {
    language,
    translations: translations[language],
    toggleLanguage
  };
} 