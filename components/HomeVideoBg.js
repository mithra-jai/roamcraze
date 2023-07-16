import React from 'react'
import Link from 'next/link'


export default function HomeVideoBg(){
    return(
        <>
        <div className="video-container">
  <video src="/home-video.mp4" autoPlay loop muted ></video>
  <div className="text-overlay">
    <h1 className='vid-span'>ROAMCRAZE <br/>
    <Link href="/About"><span className='vid-abt-btn'>ABOUT</span></Link>
    
    </h1>
    
  </div>
  <div>
  
  </div>
</div>
    

        </>
    )
}


{/* <header
  class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
>
  <div
    class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
  >
    Welcome to my site!
  </div>
  <video
    autoplay
    loop
    muted
    class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header> */}