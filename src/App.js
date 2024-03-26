
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import MyAccount from './MyAccount';



function App() {
  const { isLoading} = useAuth0();
  if(isLoading) return <h1>LOADING!!!!</h1>
  return (
    <div className="App">
      <Login/>
      <Logout/>
      <MyAccount/>
    </div>
  );
}

export default App;
