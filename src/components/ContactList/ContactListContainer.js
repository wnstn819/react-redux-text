import React, { PureComponent } from "react";
import ContactListPresenter from "./ContactListPresenter";

let contactListWrite = [
  {
    id: 1,
    name: "이지훈1",
  },
  {
    id: 2,
    name: "왕준수2",
  },
  {
    id: 3,
    name: "이지훈3",
  },
];
let num = 4;
let value;
class ContactListContainer extends PureComponent {
  handleChangeContactList = (e) => {
    value = e.target.value;
  };
  listAdd = () => {
    const { setContactList } = this.props;

    // contactListWrite.push({
    //   id: num,
    //   name: value,
    // });

    contactListWrite = contactListWrite.concat({ id: num, name: value });

    setContactList(contactListWrite);
    num++;
  };

  render() {
    return (
      <ContactListPresenter
        {...this.props}
        contactListWrite={contactListWrite}
        handleChangeContactList={this.handleChangeContactList}
        listAdd={this.listAdd}
      />
    );
  }
}

export default ContactListContainer;
