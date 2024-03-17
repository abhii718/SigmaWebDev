import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({ email: "abhi", phone: "singh" });

  const handleClicked = () => {
    alert("Hey I am clicked");
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  };
  return (
    <>
      <div className="button">
        <button onClick={handleClicked}>hello</button>
      </div>
      <div className="button">
        <button onMouseOut={handleClicked}>hello</button>
      </div>
      <input type="text" name="email" value={form.email} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} />
    </>
  );
}

export default
  App;