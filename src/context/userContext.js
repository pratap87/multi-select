import { createContext, useContext, useState } from "react";

const UserContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [error,setError]=useState("");
  return (
    <UserContext.Provider value={{ userData, setUserData,error,setError }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const { userData, setUserData ,error,setError} = useContext(UserContext);

  return { userData, setUserData };
}

