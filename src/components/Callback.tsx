import { useEffect, useState } from "react";
import { UserManager, User } from "oidc-client-ts";

type Props = {
  authenticated: boolean | null;
  setAuth: (authenticated: boolean | null) => void;
  userManager: UserManager;
  handleLogout: any;
};

const Callback = ({
  authenticated,
  setAuth,
  userManager,

  handleLogout,
}: Props) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    if (authenticated === null) {
      userManager.signinRedirectCallback().then((user: any) => {
        if (user) {
          //saving the tokens to local storage
          localStorage.setItem("access_token", user.access_token)
          localStorage.setItem("refresh_token", user.refresh_token)
          localStorage.setItem("id_token", user.id_token)

          setAuth(true)
          //if needed put navigation here
        } else {
          setAuth(false)
        }
      }).catch((error: any) => {
        console.error("Error in callback: ", error)
        setAuth(false)
      })
    }
    if (authenticated === true && userInfo === null) {
      userManager
        .getUser()
        .then((user) => {
          if (user) {
            setAuth(true);
            setUserInfo(user);
          } else {
            setAuth(false);
          }
        })
        .catch((error: any) => {
          setAuth(false);
        });
    }
  }, [authenticated, userManager, setAuth]);
  if (authenticated === true && userInfo) {
    return (
      <div className="user">
        <h2>Welcome, {userInfo.profile.name}!</h2>
        <p className="description">Your ZITADEL Profile Information</p>
        <p>Name: {userInfo.profile.name}</p>
        <p>Email: {userInfo.profile.email}</p>
        <p>Email Verified: {userInfo.profile.email_verified ? "Yes" : "No"}</p>
        <p>
          Roles:{" "}
          {JSON.stringify(
            userInfo.profile[
              "urn:zitadel:iam:org:project:roles"
            ]
          )}
        </p>

        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Callback;