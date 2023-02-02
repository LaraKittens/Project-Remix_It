import { createContext, useContext, useState, useMemo } from "react";

const CurrentUserContext = createContext();
export default CurrentUserContext;

export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ id: null });
  const user = useMemo(
    () => ({ user: currentUser, setCurrentUser }),
    [currentUser]
  );

  return (
    <CurrentUserContext.Provider value={user}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const UseCurrentUserContext = () => useContext(CurrentUserContext);
