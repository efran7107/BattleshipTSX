import { createContext, useContext } from "react";
import { ThemeProviderState } from "../types/theme-type";
import { TUserProvider } from "../types/provider-types";

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};
export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export const UserProviderContext = createContext<TUserProvider>(
  {} as TUserProvider
);

export const useUser = () => useContext(UserProviderContext);
