import React from "react";
import "./App.css";
import ServerComposer from "./components/ServerComposer";
import ServerComposerProvider from "@providers/ServerComposerProvider";

function App() {
  return (
    <ServerComposerProvider>
      <ServerComposer testId={"App-ServerComposer"} />
    </ServerComposerProvider>
  );
}

export default App;
