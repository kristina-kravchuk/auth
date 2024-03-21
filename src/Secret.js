import { useAuth0 } from "@auth0/auth0-react";
const Secret = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
        <p>Classified!</p>
    ))
}
export default Secret;