import { useState } from "react";

function Feedback() {

  const [name, setName] = useState("");
  const [airline, setAirline] = useState("");
  const [flight, setFlight] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const feedback = {
      name,
      airline,
      flight,
      rating,
      message
    };

    const existing =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    existing.push(feedback);

    localStorage.setItem(
      "feedbacks",
      JSON.stringify(existing)
    );

    alert("Feedback Submitted Successfully!");

    setName("");
    setAirline("");
    setFlight("");
    setRating("");
    setMessage("");
  };

  return (
    <div className="feedback-page">

      <h1>Submit Feedback</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Passenger Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Airline Name"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Flight Number"
          value={flight}
          onChange={(e) => setFlight(e.target.value)}
          required
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="">
            Select Rating
          </option>

          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>

        <textarea
          placeholder="Write your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

    </div>
  );
}

export default Feedback;