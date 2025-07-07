import { useState, useEffect } from "react";

const QuoteComponent = () => {
  const [randomQuote, setRandomQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      setRandomQuote(data.quotes[randomIndex]);
    } catch (error) {
      console.log("Error fetching quote:", error.message);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <button onClick={fetchQuote}>Generate Quote</button>

      {randomQuote && (
        <div>
          <p style={{ fontSize: "20px" }}>"{randomQuote.quote}"</p>
          <p>- {randomQuote.author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteComponent;
