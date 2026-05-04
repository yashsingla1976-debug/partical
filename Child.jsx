function Child({ name, age, hobby }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Hobbies: {hobby.join(", ")}</p>
    </div>
  );
}

export default Child;