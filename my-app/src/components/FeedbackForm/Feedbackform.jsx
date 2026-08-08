import { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: " ",
    rating: "1",
    comment: "",
  });
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setFeedback(form);
  };

  return (
    <>
      <h1> FEEDBACK FORM</h1>
      <form onSubmit={handleSubmit}>
        <imput
          type="text"
          name="name"
          placeholder="Enter ur name"
          value={form.name}
          onChange={handleChange}
        />

        <select name="rating" value={form.rating} onChange={handleChange}>
          <option value="1">1 - POOR</option>
          <option value="3">3 - GOOD</option>
          <option value="5">5 - EXCELLENT</option>
        </select>
        <textarea
          name="comment"
          placeholder="Write ur comment"
          value={handleChange}
        />

        <br></br>

        <button type="submit">SUBMIT FEEDBACK</button>
      </form>

      {feedback && (
        <>
          <h2> FEEDBACK</h2>
          <p> name: {feedback.name}</p>
          <p>rating: {feedback.rating}</p>
          <p>comment: {feedback.comment}</p>
        </>
      )}
    </>
  );
}
