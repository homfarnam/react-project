import React from "react"

const Hello = () => {
    // return(
    //     <div>Hello world</div>
    // )

    return React.createElement('div',
    {id:'hello',className:'newclass'},
    React.createElement('h2',null,'salam'))
}

export default Hello