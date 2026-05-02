import React from "react";
import { Gallery } from "./Component/Gallery";

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>🥇 Olympic Champions of India</h1>
      <Gallery />
    </div>
  );
}

const styles = {
  app: {
    textAlign: "center",
    padding: "20px"
  },
  heading: {
    marginBottom: "20px"
  }
};

export default App;