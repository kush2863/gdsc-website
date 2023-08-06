import React from 'react'
import "./gallery.css"

const Gallery = () => {
  return (
    <section>
    <div className="Gallery_Container center-div">
    <div>
        <img src="https://eos.io/wp-content/uploads/2021/01/hero_hackathons.jpg" alt="" />
    </div>
    <div className="v-block">
        <img src="https://images.pexels.com/photos/2513612/pexels-photo-2513612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" / >
    </div>

    <div>
        <img src="https://miro.medium.com/v2/resize:fit:9796/1*aCPx34GziDiyxNmf1aLsMA.jpeg" alt="" />
    </div>
    <div className="v-small-block">
        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684450243157/a3a8d65e-44e0-490d-9706-a4311934cdd3.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="" / >
    </div>
    <div>
        <img src="https://hackathon.sick.com/_files/2bdbbc17-d59d-4135-9312-27ace4f99d05/SICK-Solution-Hackathon-2022-Day-2-044.jpg" alt="" />
    </div>

    <div>
        <img src="https://careersatagoda.com/wp-content/uploads/2023/04/20230227_115248417_iOS-2-e1680668881604.jpg" alt="" />
    </div>


    </div>
</section>
  )
}

export default Gallery
