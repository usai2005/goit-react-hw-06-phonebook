import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { contactDelete } from '../../redux/contactsSlice';

export const ContactListItem = ({
  transferRenderListItem: { id, name, number },
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>
        <p>
          {name}:<span>{number}</span>
        </p>
        <button
          className={css.item__button}
          type="button"
          onClick={() => dispatch(contactDelete(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  transferRenderListItem: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
