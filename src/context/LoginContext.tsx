import React, { Children, createContext, useContext, useState } from "react";

interface ILoginContext {
  isLogin: boolean;
}
export const LoginContext = createContext({} as ILoginContext);

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default function ILoginContext() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <ILoginContext>{isLogin}</ILoginContext>
    </>
  );
}
