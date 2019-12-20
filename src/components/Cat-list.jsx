import React from 'react'

function CatList (props) {
    return (
        <div>
            CatList in function
            {props.list.map( (el) => <h2 key={el.id}>{el.url}</h2>)}
        </div>
    )
}

export default CatList;