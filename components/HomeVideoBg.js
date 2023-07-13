import React from 'react'



export default function HomeVideoBg(){
    return(
        <>
         <div className='main'>
        <div className="overlay"></div>
        <video src='/home-video.mp4' autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To RoamCraze</p>
        </div>
    </div>

        </>
    )
}