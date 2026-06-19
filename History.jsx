function History() {

  const feedbacks =
    JSON.parse(localStorage.getItem("feedbacks")) || [];

  return (
    <div className="page-container">

      <h1>Feedback History</h1>

      {feedbacks.length === 0 ? (
        <p>No Feedback Available</p>
      ) : (
        feedbacks.map((item, index) => (
          <div className="card" key={index}>

            <h3>{item.name}</h3>

            <p>
              <strong>Airline:</strong> {item.airline}
            </p>

            <p>
              <strong>Flight:</strong> {item.flight}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {item.rating}
            </p>

            <p>{item.message}</p>

          </div>
        ))
      )}

    </div>
  );
}

export default History;