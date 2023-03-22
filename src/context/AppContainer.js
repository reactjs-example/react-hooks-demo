import { UserProvider } from "./UserProvider";

/**
 * create context using createContext
 * assign value to context using provider 
 * provider should wrap the child elements
 * now child elements should get the context using useContext
 * access context object
 * @returns 
 */
export const AppContainer = () => {
  return (
    <>
      <h1>Context API</h1>
      <UserProvider />
    </>
  );
};
