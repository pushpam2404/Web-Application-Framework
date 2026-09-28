function StudentCard({ name, rollNumber, course }) {
  return (
    <div className="card">
      <h3>Student Information</h3>
      <p>Name: {name}</p>
      <p>Roll Number: {rollNumber}</p>
      <p>Course: {course}</p>
    </div>
  )
}

function Program2() {
  return (
    <StudentCard
      name="Pushpam Raj Satyarthi"
      rollNumber="2024107717"
      course="BTech"
    />
  )
}

export default Program2
