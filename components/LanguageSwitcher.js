import styles from '../styles/LanguageSwitcher.module.css'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher({ children }) {
  const languageList = [
    {
      name: 'EN',
      key: 'en-US',
    },
    {
      name: '简',
      key: 'zh-CN',
    },
  ]

  const { _, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className={styles['language-switcher']}>
        <ul className={styles['language-list']}>
          {languageList.map((language) => (
            <li key={language.key}>
              <p
                style={{ color: i18n.language === language.key ? '#000000' : '#6060608e' }}
                onClick={() => changeLanguage(language.key)}
              >
                {language.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
