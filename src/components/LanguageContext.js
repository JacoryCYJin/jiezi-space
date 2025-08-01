"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { textConfig } from '@/constants';

/**
 * 语言上下文，提供多语言功能
 * 包括当前语言、切换语言方法和翻译函数
 */
const LanguageContext = createContext();

/**
 * 语言提供者组件
 * 管理当前语言状态和提供语言相关的功能
 */
export function LanguageProvider({ children }) {
  // 默认语言为中文
  const [language, setLanguage] = useState('zh');

  // 组件加载时从localStorage读取保存的语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // 如果没有保存的语言设置，尝试检测浏览器语言
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('zh')) {
        setLanguage('zh');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  /**
   * 切换语言
   * @param {string} newLanguage - 新的语言代码 ('zh' 或 'en')
   */
  const switchLanguage = (newLanguage) => {
    if (newLanguage === 'zh' || newLanguage === 'en') {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      
      // 更新HTML lang属性
      document.documentElement.lang = newLanguage;
    }
  };

  /**
   * 翻译函数
   * @param {string} key - 翻译键
   * @param {object} params - 可选的参数对象，用于字符串插值
   * @returns {string} 翻译后的文本
   */
  const t = (key, params = {}) => {
    const translations = textConfig[language];
    let text = translations[key] || key;
    
    // 支持简单的字符串插值
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
  };

  /**
   * 获取当前语言的文本配置
   * @returns {object} 当前语言的所有翻译文本
   */
  const getCurrentTexts = () => {
    return textConfig[language] || textConfig.zh;
  };

  const value = {
    language,
    switchLanguage,
    t,
    getCurrentTexts,
    supportedLanguages: ['zh', 'en']
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * 使用语言上下文的Hook
 * @returns {object} 语言上下文的值
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;