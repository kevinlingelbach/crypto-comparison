import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/prices").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.prices === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.prices.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}

export default App
