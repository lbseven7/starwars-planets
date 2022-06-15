import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Form() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByname,
    setFilterByname,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarContext);

  const handleInput = ({ target }) => {
    setFilterByname({ name: target.value });
  };

  const handleNumeric = () => {
    const newFilter = { column, comparison, value };
    setFilterByNumericValues([
      ...filterByNumericValues, newFilter,
    ]);
  };

  return (
    <div>
      <h1>Projeto StarWars - @Léo Barbosa</h1>
      <form>
        <label htmlFor="byName">
          Planeta:
          <input
            data-testid="name-filter"
            type="text"
            id="byName"
            onChange={ handleInput }
            value={ filterByname.name }
          />
        </label>
        <label htmlFor="byNumericValues">
          Coluna:
          <select
            className="select"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
            value={ column }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          Operador:
          <select
            className="select"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparison(target.value) }
            value={ comparison }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="valueFilter">
          <input
            onChange={ ({ target }) => setValue(target.value) }
            data-testid="value-filter"
            type="number"
            id="valueFilter"
            value={ value }
          />
        </label>
        <button
          data-testid="button-filter"
          onClick={ handleNumeric }
          type="button"
        >
          Filter
        </button>
      </form>
    </div>
  );
}

export default Form;
