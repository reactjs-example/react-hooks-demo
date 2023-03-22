import { UserContext } from "./UserContext";
import React from "react";
import { Header, Section } from "./PageContent";

export const UserProvider = () => {
  const userInfo = { id: 1, username: "john123" };
  return (
    <>
      <UserContext.Provider value={userInfo}>
        <Page />
      </UserContext.Provider>
    </>
  );
};

const Page = () => {
  return (
    <>
      <Header />
      <Section />
    </>
  );
};
