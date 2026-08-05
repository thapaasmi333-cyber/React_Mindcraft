import { useState } from "react";

export default function RegisterForm() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    course: "React",
    agree: false,
  });
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            // value={register.name}
            name="name"
            placeholder="name"
          />
          <input
            type="email"
            // value={register.email}
            name="email"
            placeholder="email"
          />
          <input
            type="password"
            // value={register.password}
            name="password"
            placeholder="password"
          />
          <select
            type="course"
            // value={register.course}
            name="course"
            placeholder="course"
          >
            <option value="html">Html</option>
            <option value="js">js</option>
            <option value="react">react</option>
          </select>
          <label>
            <input
              type="checkbox"
              name="agree"

              // checked={register.agree}
            />
            I agree to the terms
          </label>
        </form>
      </div>
    </>
  );
}
