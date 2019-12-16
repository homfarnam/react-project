import React from "react";


const Greet = props => {
 const {name,heroName}=props
  return (
    <div>
      <h1>Hello {name + " " + heroName}</h1>
      {/* {props.children} */}
    </div>
  )
}

export default Greet;


// const Greet = ({name,heroName}) => {
 
//   return (
//     <div>
//       <h1>Hello {name + " " + heroName}</h1>
//       {/* {props.children} */}
//     </div>
//   )
// }

// export default Greet;


//       <h1>Hello {props.name + " " + props.heroName}</h1>
// //  const Greet = props => 