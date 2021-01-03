import React, {useState} from 'react'
import './style2.css'
import HeroImageCropped from './../riceappsGroupPicCropped.png'
import HeroImage from './../riceappsGroupPic.png'
import useInterval from '@use-it/interval'
function Hero(){
    const [getHeroImage, setHeroImage] = useState(true); 
    const imgArray = ["https://images.unsplash.com/photo-1505662695181-d4b60363d2a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1815&q=80", 
                        "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        ,'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1849&q=80']
                                            
                        
    useInterval(() => {
        setHeroImage(!getHeroImage)}, 1500
    );

    return(
        <div className = "heroImageContainer">
            {/* {heroImage} isn't working */}
            <img src={getHeroImage ? "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" : 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1849&q=80'} className = "heroImage"/>

        </div>
    )
}

export default Hero;