import Header from "./mainComponents/header.js";
import { useAuth } from './firebase/AuthContext';
import { useHistory } from "react-router-dom";

export const Account = () => {
  const history = useHistory();
  const { signout } = useAuth();
  const handleSignout = () => {
    signout(); 
    history.push('/signin');
  };
  return (
    <main>
      <div className="mainContainer">
        <Header />
        <div className="accountContainer">
          <div className="btnContainer">
            <button>Change Password</button>
            <button>Reset All Data</button>
            <button onClick={()=>handleSignout()}>Logout</button>
          </div>
        </div>
      </div>
    </main>
  );
};
