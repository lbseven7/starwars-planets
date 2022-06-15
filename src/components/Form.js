import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Form() {
  const {
    opcoes,
    setOpcoes,
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
    const opcoesFilter = opcoes.filter((option) => option !== column);
    setOpcoes(opcoesFilter);
  };

  // const handleOrder = () => {

  // };

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
            {opcoes.map((option, index) => <option key={ index }>{option}</option>)}

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

        {/* <button
          onClick={ handleOrderOptions }
          type="button"
        >
          Ordenar
        </button> */}
      </form>
    </div>
  );
}

export default Form;
