import React from 'react'
// import { Loader } from './styles'
//
// export default class Loading extends Component {
//   render(){
//     return(
//       <Loader />
//     )
//   }
// }


function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else {
    return <div>Loading...</div>;
  }
}

export default Loading
