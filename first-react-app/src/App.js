function App() {
  const title = `Blog post`;
  const body = `This is a blog body`;

  const peoples = [
    { id: 1, firstName: 'Ashutosh', lastName: 'Satapathy' },
    { id: 2, firstName: 'Ronnie', lastName: 'Sharma' },
    { id: 3, firstName: 'Megladon', lastName: 'Singh' },
  ];

  // Use of conditional statements
  const showComments = true;
  const commentBlock = (
    <div className="peoples">
      <h4>The lenght of the people array is: ({peoples.length})</h4>
      <ol>
        {peoples.map((people) => (
          <li key={people.id}>
            {people.firstName} , {people.lastName}
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <div className="container">
      <h3>{title.toUpperCase()}</h3>
      <p>{body}</p>
      <br />
      {showComments ? commentBlock : <h1>Loading...</h1>}
    </div>
  );
}
export default App;
