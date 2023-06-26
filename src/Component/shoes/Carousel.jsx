import React from 'react'

const Carousel = () => {
  return (
 <div className="row">
      <div class="col-6">
      <img src="./img/anh2.jpg" alt="..." 
         className='img'
         style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            width: "100%",
           
        }}/>
      </div>
  <div class="col-6">
  <img src="./img/anh1.jpg" alt="..." 
         className='img'
         style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            width: "100%",
           
        }}/>
  </div>
    </div>
  )
}

export default Carousel