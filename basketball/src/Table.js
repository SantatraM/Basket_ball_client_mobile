import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importe le CSS de Bootstrap
import './Table.css';
const Table = () => {
  const data = [
    { id: 1, equipe: 'John Doe', nation: 25 },
    { id: 2, equipe: 'Jane Doe', nation: 30 },
    { id: 3, equipe: 'Bob Smith', nation: 22 },
  ];

  return (
<div class="card">
<div class="table-responsive text-nowrap">
  <table class="table">
    <thead>
    <tr >
                  <th><strong>Id Equipe</strong></th>
                     <th><strong>Nom Equipe</strong></th>
                     <th><strong>Nation</strong></th>
                     <th><strong></strong></th>
                 </tr>
    </thead>
    <tbody class="table-border-bottom-0">
                     {data.map((item) => (
                     <tr class="table-danger" key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.equipe}</td>
                         <td>{item.nation}</td>
                         <td>voirs details</td>
                     </tr>
                     ))}
                 </tbody>
  </table>
</div>
</div>
  );
};



export default Table;


