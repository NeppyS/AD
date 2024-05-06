import React, { useState } from 'react';
import './Members.css';

function Members() {
    const [members, setMembers] = useState([
        { id: 1, name: "Jal Devecais", email: "Jal@gmail.com", phone: "+63985986989", status: "Active" },
        { id: 2, name: "Andrei Laguda", email: "Andrei@gmail.com", phone: "+63985986989", status: "Active" },
        { id: 3, name: "Nephten Ilon", email: "Nep@gmail.com", phone: "+63985986989", status: "Inactive" }
    ]);

    const [newMemberData, setNewMemberData] = useState({
        name: '',
        email: '',
        phone: '',
        status: ''
    });

    const [editingMemberId, setEditingMemberId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMemberData({
            ...newMemberData,
            [name]: value
        });
    };

    const addMember = () => {
        const newMember = {
            id: members.length + 1,
            name: newMemberData.name,
            email: newMemberData.email,
            phone: newMemberData.phone,
            status: newMemberData.status
        };
        setMembers([...members, newMember]);
        setNewMemberData({
            name: '',
            email: '',
            phone: '',
            status: ''
        });
    };

    const removeMember = (id) => {
        setMembers(members.filter(member => member.id !== id));
    };

    const startEditing = (id) => {
        const memberToEdit = members.find(member => member.id === id);
        setEditingMemberId(id);
        setNewMemberData(memberToEdit);
    };

    const cancelEditing = () => {
        setEditingMemberId(null);
        setNewMemberData({
            name: '',
            email: '',
            phone: '',
            status: ''
        });
    };

    const saveEditing = () => {
        const updatedMembers = members.map(member =>
            member.id === newMemberData.id ? { ...member, ...newMemberData } : member
        );
        setMembers(updatedMembers);
        setEditingMemberId(null);
        setNewMemberData({
            name: '',
            email: '',
            phone: '',
            status: ''
        });
    };

    return (
        <div className="container">
            <h1>Member Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>
                                {editingMemberId === member.id ? (
                                    <input type="text" name="name" value={newMemberData.name} onChange={handleInputChange} />
                                ) : (
                                    member.name
                                )}
                            </td>
                            <td>
                                {editingMemberId === member.id ? (
                                    <input type="email" name="email" value={newMemberData.email} onChange={handleInputChange} />
                                ) : (
                                    member.email
                                )}
                            </td>
                            <td>
                                {editingMemberId === member.id ? (
                                    <input type="text" name="phone" value={newMemberData.phone} onChange={handleInputChange} />
                                ) : (
                                    member.phone
                                )}
                            </td>
                            <td>
                                {editingMemberId === member.id ? (
                                    <input type="text" name="status" value={newMemberData.status} onChange={handleInputChange} />
                                ) : (
                                    member.status
                                )}
                            </td>
                            <td>
                                {editingMemberId === member.id ? (
                                    <>
                                        <button className="save-button" onClick={saveEditing}>Save</button>
                                        <button className="cancel-button" onClick={cancelEditing}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="edit-button" onClick={() => startEditing(member.id)}>Edit</button>
                                        <button className="remove-button" onClick={() => removeMember(member.id)}>Remove</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="form-container">
                <input type="text" name="name" placeholder="Name" value={newMemberData.name} onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" value={newMemberData.email} onChange={handleInputChange} />
                <input type="text" name="phone" placeholder="Phone" value={newMemberData.phone} onChange={handleInputChange} />
                <input type="text" name="status" placeholder="Status" value={newMemberData.status} onChange={handleInputChange} />
                <button className="add-button" onClick={addMember}>Add Member</button>
            </div>
        </div>
    );
}

export default Members;
