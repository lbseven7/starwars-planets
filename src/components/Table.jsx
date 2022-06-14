import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Table() {
  const { data } = useContext(StarContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
          </tr>
        </thead>

        <tbody>
          {data.map((planets, index) => (

            <tr key={ index }>
              <td>{planets.name}</td>
              <td>{planets.created}</td>
              <td>{planets.climate}</td>
              <td>{planets.diameter}</td>
              <td>{planets.edited}</td>
              <td>{planets.gravity}</td>
              <td>{planets.orbital_period}</td>
              <td>{planets.population}</td>
              <td>{planets.rotation_period}</td>
              <td>{planets.surface_water}</td>
              <td>{planets.terrain}</td>
              <td>{planets.url}</td>
              <td>{planets.films}</td>
            </tr>

          ))}

        </tbody>
      </table>
    </div>
  );
}

export default Table;
