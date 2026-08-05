// Receives `name` and `grade` — finally USES the data!
function StudentItem({ name, grade, age }) {
  return (
    <li>
      {name} — Grade: <strong>{grade}</strong> age:{age}
    </li>
  );
}

export default StudentItem;
