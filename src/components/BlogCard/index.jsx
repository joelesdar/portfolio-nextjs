import React from 'react'
import { Card } from './styles'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css'

export const BlogCard = ({ title, description, cover, date }) => {

  const { t } = useTranslation();

  return (
    <Card>
      <div className="card">
        <img src={cover} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Card>
  )

}