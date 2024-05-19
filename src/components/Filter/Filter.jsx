import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useState } from 'react'; // Importujemy hook useState

export const Filter = ({ filter, onChangeFilter }) => {
  const [inputValue, setInputValue] = useState(filter); // Stan dla wartości wprowadzonej w polu input

  // Funkcja obsługująca zmianę wprowadzonej wartości
  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value); // Ustawienie wartości wprowadzonej w stanie
    onChangeFilter(value); // Wywołanie funkcji onChangeFilter przekazanej z propsów
  };

  return (
    <>
      <label className={css.text}>
        Find contacts by name
        <br />
        <input
          className={css.newContacts}
          onChange={handleChange} // Obsługa zmiany wartości w polu input
          value={inputValue} // Ustawienie wartości pola input na wartość ze stanu
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
