import React from 'react'
import Video from "next-video"

const page = () => {
  return (
    <div>
      <Video src={"/videos/intro.mp4"}/>
    </div>
  )
}

export default page