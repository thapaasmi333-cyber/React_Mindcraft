import StudentItem from "../StudentItem/Studentitems";

// Receives `students` from SchoolCard
function StudentList({ students }) {
  return (
    <ul>
      {/* Level 2 ➜ Level 3: pass ONE student to each StudentItem */}
      {students.map((student) => (
        <StudentItem
          key={student.id}
          name={student.name}
          grade={student.grade}
          age={student.age}
        />
      ))}
    </ul>
  );
}

export default StudentList;
