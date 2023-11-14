import { useAuth0 } from "@auth0/auth0-react";
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

function App() {
  const{ user ,loginWithRedirect} = useAuth0();

  console.log("Current user", user);

  return (
    <div >
      <LoginSignup/>
      {/* <button  onClick={(e) => loginWithRedirect()}>
          Login with Google
      </button> */}
    </div>
  );
}

export default App;
