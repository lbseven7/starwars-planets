import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetsData = await response.json();
      setData(planetsData.results);
      // console.log(planetsData.results);
    }; fetchData();
  }, []);

  const value = { data };

  return (
    <StarContext.Provider value={ value }>
      { children }
    </StarContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
