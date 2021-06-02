import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { clearAllContact, selectAllContact, deleteAllContact } from '../../Redux/Actions/contactActions';
import Contact from '../Contact/Contact';

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false)
    const contacts = useSelector(state => state.contacts.contacts);
    const selectedContacts = useSelector((state) => state.contacts.selectedContacts)
    useEffect(() => {
        if(selectAll){
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        }else{
            dispatch(clearAllContact())
        }
    })
    return (
        <div>
            {
                selectedContacts.length > 0 ? (
                    <button onClick={() => dispatch(deleteAllContact())} className="btn btn-danger mb-3">Delete All</button>
                ) : null
            }
            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                        <th>
                            <div className="custom-control custom-checkbox">
                                <input id="selectAll" type="checkbox" className="custom-control-input" value={selectAll} onClick={() => setSelectAll(!selectAll)} />
                                <label htmlFor="selectAll" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-Mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => <Contact contact={contact} key={contact.id} selectAll={selectAll}></Contact>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;