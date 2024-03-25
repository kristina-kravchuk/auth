// import { useAuth0 } from "@auth0/auth0-react";
//   const Secret = () => {

//     const { isAuthenticated } = useAuth0();
//     return(

//         !isAuthenticated && 
//         <p>Classified!</p>
//     )
// }


// export default Secret;
import { useAuth0 } from '@auth0/auth0-react';

const Secret = () => {
  const {isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <div>
      <p>Secret</p>
      </div>
  ))
}

export default Secret;
