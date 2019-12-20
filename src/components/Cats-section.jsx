import React from 'react'
import CatList from './Cat-list'

// class Button extends React.Component {
//     this.addCat()
//     render() {
//         return (
//             <button onClick={this.addCat}
//         )
//     }
// }

class CatsSection extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            catArray: [
                {
                     id: 1,
                     url: 'url here'
                }
            ]
        }
    }


    render() {

        
        return(
            <div>
                <CatList list={this.state.catArray}/>
                <button onClick={(newCat) => {
                    console.log('hi');
                    this.setState( {catArray: [newCat, ...this.state.catArray]}) 
                    }}>Click to Add</button>
            </div>
        )
    }
}

export { CatsSection }