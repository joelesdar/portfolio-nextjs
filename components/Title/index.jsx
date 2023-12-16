import { UseTranslation, useTranslation } from 'next-i18next';
import { StyledTitle } from './styles';

export const Title = () => {

  const { t } = useTranslation()

  return (
    <StyledTitle>
      <h2>{t('title')}
        <span className="-rb">
          <div className="-rm">
            <div className="-rg">
              <span className="word">{t('title-spans.word1')}</span>
              <span className="word">{t('title-spans.word2')}</span>
              <span className="word">{t('title-spans.word3')}</span>
              <span className="word">{t('title-spans.word4')}</span>
            </div>
          </div>
        </span>
      </h2>
    </StyledTitle>
  )
}