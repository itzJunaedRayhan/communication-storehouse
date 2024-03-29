import React from 'react';
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';
import { deleteContact } from "../../Redux/Actions/contactActions";
import { useDispatch } from "react-redux"

const Contact = ({ contact, selectAll }) => {
    const dispatch = useDispatch()
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar className="mr-2" name={name} size="30" round={true} /> {name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}><span className="material-icons mr-2">edit</span></Link>
                <span onClick={() => dispatch(deleteContact(id))} className="material-icons text-danger">remove_circle</span>
            </td>
        </tr>
    );
};

export default Contact;