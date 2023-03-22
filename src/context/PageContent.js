import { React, useContext } from "react";
import { UserContext } from "./UserContext";
export const Header = () => {
  const userContext = useContext(UserContext);
  return <>Welcome {userContext.username}</>;
};

export const Section = () => {
  return <><br/>This is section</>;
};
