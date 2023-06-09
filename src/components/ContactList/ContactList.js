import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  console.log(contacts);
  console.log(filterValue);

  const getFoundContacts = () => {
    const filterToLowerCase = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const renderList = getFoundContacts();

  console.log(renderList);

  return (
    <ul className={css.contact__list}>
      {renderList.map(renderListItem => (
        <ContactListItem
          key={renderListItem.id}
          transferRenderListItem={renderListItem}
        />
      ))}
    </ul>
  );
};
