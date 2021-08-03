import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authContext = useContext(AuthContext);
  const submitHandler = async event => {
    event.preventDefault();
    const newPassword = passwordInputRef.current.value;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhze8aUPB1vgWjjM7kn2mhCDa0u2IZ43M",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authContext.token,
            password: newPassword,
            returnSecureToken: false
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        let errorMessage = "Authentication failed!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
