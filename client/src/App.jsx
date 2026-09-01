import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function fetchSERVER() {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();

    console.log(data.message);

    setMessage(data.message);
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