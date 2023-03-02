import s from "./Photos.module.css"
import classNames from 'classnames/bind'

import photo1 from "assets/photos/travelphoto1.jpg"
import photo1_480 from "assets/photos/670/travelphoto/tp1.png"
import photo1_1030 from "assets/photos/1140/travelphoto/tp1.png"

import photo2 from "assets/photos/travelphoto2.jpg"

import photo3 from "assets/photos/travelphoto3.jpg"
import photo3_1030 from "assets/photos/1140/travelphoto/tp3.png"

import photo4 from "assets/photos/travelphoto4.jpg"
import photo4_480 from "assets/photos/670/travelphoto/tp4.png"
import photo4_1030 from "assets/photos/1140/travelphoto/tp4.png"

import photo5 from "assets/photos/travelphoto5.png"

import photo6 from "assets/photos/travelphoto6.jpg"
import photo6_1030 from "assets/photos/1140/travelphoto/tp6.png"

import photo7 from "assets/photos/travelphoto7.jpg"

import photo8 from "assets/photos/travelphoto8.png"
import photo8_480 from "assets/photos/670/travelphoto/tp8.png"
import photo8_1030 from "assets/photos/1140/travelphoto/tp8.png"

import photo9 from "assets/photos/travelphoto9.png"
import photo9_480 from "assets/photos/670/travelphoto/tp9.png"
import photo9_1030 from "assets/photos/1140/travelphoto/tp9.png"

import photo10 from "assets/photos/travelphoto10.jpg"
import photo10_480 from "assets/photos/670/travelphoto/tp10.png"
import photo10_1030 from "assets/photos/1140/travelphoto/tp10.png"

import photo11 from "assets/photos/travelphoto11.jpg"
import photo11_480 from "assets/photos/670/travelphoto/tp11.png"
import photo11_1030 from "assets/photos/1140/travelphoto/tp11.png"

import photo12 from "assets/photos/travelphoto12.jpg"
import photo12_1030 from "assets/photos/1140/travelphoto/tp12.png"

import photo13 from "assets/photos/travelphoto13.jpg"

import { BlockTitle, BlockSubtitle } from "components/commons/texts"
import { PropTypes } from "prop-types"


let cx = classNames.bind(s)

const PhotoItem = ({id, url, url480, url1030}) => {
  let className = cx({
    item: true, 
    ["photo" + id]: true
  })

  return <picture key={id} className={className}>
    {url480 && <source media="(max-width: 480px)" srcSet={url480} />}
    {url1030 && <source media="(max-width: 1030px)" srcSet={url1030} />}
    <img src={url} alt="" />
  </picture>
}

PhotoItem.propsType = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  url480: PropTypes.string,
  url1030: PropTypes.string,
}

const PhotoRow = ({ rowId, photos }) => {
  let className = cx({
    row: true, 
    ["row" + rowId]: true
  })

  return <div className={className}>
    {photos.map(photo => <PhotoItem key={photo.id} id={photo.id} url={photo.url} url480={photo.url480 || null } url1330={photo.url1330 || null }/>)}
  </div>
}

PhotoRow.propsType = {
  rowId: PropTypes.number.isRequired,
  photos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    url480: PropTypes.string,
    url1030: PropTypes.string,
  }).isRequired,
}

export const Photos = () => {
  const photos = [
    { id: 1, url: photo1, url480: photo1_480, url1030: photo1_1030 },
    { id: 2, url: photo2 },
    { id: 3, url: photo3, url1030: photo3_1030 },
    { id: 4, url: photo4, url480: photo4_480, url1030: photo4_1030 },
    { id: 5, url: photo5 },
    { id: 6, url: photo6, url1030: photo6_1030 },
    { id: 7, url: photo7 },
    { id: 8, url: photo8, url480: photo8_480, url1030: photo8_1030 },
    { id: 9, url: photo9, url480: photo9_480, url1030: photo9_1030 },
    { id: 10, url: photo10, url480: photo10_480, url1030: photo10_1030 },
    { id: 11, url: photo11, url480: photo11_480, url1030: photo11_1030 },
    { id: 12, url: photo12, url1030: photo12_1030 },
    { id: 13, url: photo13 },]
    
  return <div className={s.photos}>
      <BlockTitle title="Фотографии путешествий" />
      <BlockSubtitle title="Идейные соображения высшего порядка, а также рамки и место обучения кадров" />

      <div className={s.items}>
        <PhotoRow rowId={1} photos={photos.slice(0, 4)} />
        <PhotoRow rowId={2} photos={photos.slice(4, 9)} />
        <PhotoRow rowId={3} photos={photos.slice(9, 13)} />
      </div>
  </div>
}