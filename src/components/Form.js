import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Form() {
  const { filterByname, setFilterByname } = useContext(StarContext);

  const handleInput = ({ target }) => {
    setFilterByname({ name: target.value });
  };

  return (
    <div>
      <form>
        <label htmlFor="byName">
          <input
            data-testid="name-filter"
            type="text"
            id="byName"
            onChange={ handleInput }
            value={ filterByname.name }
          />
        </label>
      </form>
    </div>
  );
}

export default Form;
