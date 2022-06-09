import React from "react";
import { NotesProvider } from "../context";

const CombinedProvider = ({ children }) => {
  return (
      <NotesProvider>{children}</NotesProvider>
  );
};
export { CombinedProvider };
