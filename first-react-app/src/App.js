function App() {
  const title = `Blog post`;
  const body = `This is a blog body`;

  const peoples = [
    { id: 1, firstName: 'Ashutosh', lastName: 'Satapathy' },
    { id: 2, firstName: 'Ronnie', lastName: 'Sharma' },
    { id: 3, firstName: 'Megladon', lastName: 'Singh' },
  ];

  //   const createDiv= document.createElement('table');
  //   createDiv.className='table1';

  return (
    <div className="container">
      <h3>{title.toUpperCase()}</h3>
      <p>{body}</p>
      <br />
      <div className="peoples">
        <h4>The lenght of the people array is: ({peoples.length})</h4>
        <ol>
          {peoples.map((people) => (
            <li key={people.id}>{people.firstName} , {people.lastName}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default App;
