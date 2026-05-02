import React from "react";

function Profile({ name, image, medal }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.medal}>{medal}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px"
  },
  name: {
    fontSize: "18px",
    margin: "5px 0"
  },
  medal: {
    fontSize: "14px",
    color: "#555"
  }
};

export default Profile;