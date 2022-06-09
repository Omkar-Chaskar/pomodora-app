import React from "react";
import { NotesProvider, AuthProvider } from "../context";

const CombinedProvider = ({ children }) => {
  return (
    <AuthProvider>
      <NotesProvider>{children}</NotesProvider>
    </AuthProvider>
  );
};
export { CombinedProvider };
