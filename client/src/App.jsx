import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function fetchSERVER() {
    try {
      const response = await fetch(import.meta.env.VITE_BACK_URL);

      if (!response.ok) {
        throw new Error("Erreur lors de la connexion au serveur");
      }

      const data = await response.json();

      console.log(data.message);

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSERVER();
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;