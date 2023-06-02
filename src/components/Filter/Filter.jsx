import css from '../app.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleSearchChange }) => {
  return (
    <div className={css.filterContainer}>
      <h3 className={css.filterTitle}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Ім'я може містити лише літери, апостроф, дефіс та пробіли. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleSearchChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};
