import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.phonebook__section}>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
