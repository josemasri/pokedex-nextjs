import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface UserContextInterface {
  user: User;
  setUser?: Dispatch<SetStateAction<User>>;
}

interface User {
  username: string;
  level: number;
  phrase: string;
  avatar: string;
}

const userData: User = {
  username: 'ash123',
  level: 1,
  phrase: 'Work hard on your tests',
  avatar: 'avatar.png',
};

export const UserContext = createContext<UserContextInterface>({
  user: userData,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
