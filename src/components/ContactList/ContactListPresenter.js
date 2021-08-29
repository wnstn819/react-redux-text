import React from "react";
let num = 4;

const ContactListPresenter = (props) => {
  const { handleChangeContactList, contactListWrite, listAdd } = props;
  console.log("props");
  console.log(props);

  // const listAdd = () => {
  //   contactListWrite.push({
  //     id: num,
  //     name: value,
  //   });
  //   num++;

  //   setContactList(contactListWrite);
  // };
  return (
    <div>
      {contactListWrite.map((contact) => (
        <div key={contact.id}>{contact.name}</div>
      ))}

      <input type="text" onChange={handleChangeContactList} />
      <input type="button" value="submit" onClick={listAdd} />
    </div>
  );
};

export default ContactListPresenter;
