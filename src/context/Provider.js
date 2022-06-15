import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function Provider({ children }) {
  // questão 01
  const [data, setData] = useState([]);
  // questão 02
  const [filteredData, setFilteredData] = useState([]);
  const [filterByname, setFilterByname] = useState({ name: '' });
  // questão 03
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetsData = await response.json();
      setFilteredData(planetsData.results);
      setData(planetsData.results);
    }; fetchData();
  }, []);

  useEffect(() => {
    const filtersPlanet = data.filter((planet) => planet.name.toLowerCase()
      .includes(filterByname.name.toLowerCase()));

    const filtersByNumeric = filterByNumericValues
      .reduce((acc, current) => acc.filter((planet) => {
        switch (current.comparison) {
        case 'maior que':
          return Number(planet[current.column]) > Number(current.value);
        case 'menor que':
          return Number(planet[current.column]) < Number(current.value);
        case 'igual a':
          return Number(planet[current.column]) === Number(current.value);
        default:
          return true;
        }
      }), filtersPlanet);
    setFilteredData(filtersByNumeric);
  }, [filterByname.name, data, filterByNumericValues]);

  const contextValue = {
    data,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    setFilterByname,
    filteredData,
    filterByname,
    setFilterByNumericValues,
    filterByNumericValues };

  return (
    <StarContext.Provider value={ contextValue }>
      { children }
    </StarContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
