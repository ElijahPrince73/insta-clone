import React, { useState } from 'react';


const Card = ({ post }) => {
    const [like, setLiked] = useState(false)    
    return (
        <div className="border mt-3 h-full">
            <div className="my-3 flex items-center px-3">
                <img src={post.user.profile_image_url} className="rounded-full object-cover w-10 h-10"/>
                <p className="ml-3">{post.user.name}</p>
            </div>
            <div className="">
                <img src={post.image_url} className="object-cover w-full" style={{ height: '35rem' }} />
            </div>
           <div className="p-3">
            <div className="my-2">
                {!like ? <img src="like_outline_icon.svg" className="w-6 h-6"  alt="heart-icon" onClick={() => setLiked(true)}/> : <img src="like_filled_icon.svg" className="w-6 h-6" alt="heart-icon" onClick={() => setLiked(false)}/> }
            </div>
            <p className="mt-2">{post.caption}</p>
            <p className="mt-2">{post.like_counter} likes</p>
           </div>
        </div>
    )
}

export default Card;