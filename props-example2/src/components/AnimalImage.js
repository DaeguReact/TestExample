import React, {useState} from 'react';
import axios from "axios";

const imageStyle = {
    margin: '20px'
}

const AnimalImage = (props) => {
  const [img, setImg] = useState('')

  const imgBox = {
    width: '50%',
    height: '50%'
  }

  const loadImg = () => {
    axios.get(`https://randomfox.ca/floof/?ref=apilist.fun`)
      .then(res => {
        setImg(res.data.image)
      })
  }

    return (
        <div>
          <button onClick={loadImg}>Load Image</button>
          { img && <img src={img} alt="fox" style={imgBox}/>}
        </div>
    )
}

export default AnimalImage;
