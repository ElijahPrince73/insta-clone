import React from 'react';
import Card from '../Card/Card'

const CardList = ({ posts }) => {
    if(!posts) {
        return <>Loading</>
    }

    return (
        <>
            {posts.map((post) => {
                return <Card post={post} />
            })}
        </>
    )
}

export default CardList