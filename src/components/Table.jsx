const Table = ({ sat }) => {

  let tableRow = 
    sat.map(({ name, type, launchDate, operational, id }) => (
      <tr key={id}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{launchDate}</td>
        <td>{operational ? 'Active' : 'Inactive'}</td>
      </tr>
    ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tableRow}
      </tbody>
    </table>
  );
};

export default Table;