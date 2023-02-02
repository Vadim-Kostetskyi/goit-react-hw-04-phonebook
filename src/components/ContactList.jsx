const ContactList = ({ contacts, visible }) => {
  return (
    <ul className="list">
      {visible.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className="button contact-butoon"
              onClick={() => contacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
