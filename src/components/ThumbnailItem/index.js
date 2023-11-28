// Write your code here.
import './index.css'
import {Component} from 'react'

const ThumbnailItem = props => {
  const {details, picked} = props
  const {id, imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = details
  const pickThis = () => {
    picked(imageUrl, imageAltText)
  }

  return (
    <img
      src={thumbnailUrl}
      alt={thumbnailAltText}
      className="imag2"
      onClick={pickThis}
    />
  )
}

export default ThumbnailItem
