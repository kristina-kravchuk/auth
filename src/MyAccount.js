
import { useAuth0 } from "@auth0/auth0-react";
function MyAccount() {

    const {user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated &&(
    <div>
        <p>{user.nickname}</p>
        <p>{user.email}</p>
        <img src={user.picture} alt="user"/>
    </div>
  ))
}

export default MyAccount