import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterByname, setFilterByname] = useState({ name: '' });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetsData = await response.json();
      setFilteredData(planetsData.results);
      setData(planetsData.results);
    }; fetchData();
  }, []);

  useEffect(() => {
    const filters = data.filter((planet) => planet.name.toLowerCase()
      .includes(filterByname.name.toLowerCase()));
    setFilteredData(filters);
  }, [filterByname.name, data]);

  const value = { data, setFilterByname, filteredData, filterByname };

  return (
    <StarContext.Provider value={ value }>
      { children }
    </StarContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
