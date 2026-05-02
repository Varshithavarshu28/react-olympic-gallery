import React from "react";
import Profile from "./Profile";

// ✅ IMPORT IMAGES (IMPORTANT)
import neeraj from "../Image/neerajchopra.jpg";
import sindhu from "../Image/pvsindhu.jpg";
import mirabai from "../Image/mirabaichanu.jpeg";

export function Gallery() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🥇 Olympic Champions of India</h1>

      <div style={styles.grid}>
        <Profile
          name="Neeraj Chopra"
          image={neeraj}
          medal="Gold – Javelin Throw, Tokyo Olympics 2020"
        />

        <Profile
          name="PV Sindhu"
          image={sindhu}
          medal="Silver – Badminton, Rio Olympics 2016"
        />

        <Profile
          name="Mirabai Chanu"
          image={mirabai}
          medal="Silver – Weightlifting, Tokyo Olympics 2020"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh"
  },
  title: {
    marginBottom: "20px",
    fontSize: "28px",
    color: "#333"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  }
};

export default Gallery;