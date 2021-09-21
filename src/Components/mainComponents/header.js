import { auth } from "../firebase/firebase";
import { useState } from "react";

const Header = () => {
  const [name, setName] = useState("Hi User");
  const checkUser = auth.onAuthStateChanged((user) => {
    if (user) {
      if (user.displayName.indexOf(" ") > 0) {
        setName(
          "Hi " + user.displayName.substring(0, user.displayName.indexOf(" "))
        );
      } else setName("Hi " + user.displayName);
    }
  });
  checkUser();
  return <h1 className="headerText">{name}</h1>;
};

export default Header;
