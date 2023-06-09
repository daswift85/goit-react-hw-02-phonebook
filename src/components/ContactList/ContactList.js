import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                < ContactListItem id={id} key={id} name={name} number={number} onDeleteContact={onDeleteContact}/>
            //     <li key={id}>{name} : {number}
            //     <button type="button" onClick={() => onDeleteContact(id)}>
            //     Delete
            // </button></li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };
