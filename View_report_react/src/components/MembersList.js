import React, { useEffect, useState } from 'react';
import { getMyChildren } from '../api/api';
import "./styles.css";

const MembersList = ({ selectedChildId, setSelectedChildId }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getMyChildren();
        setMembers(response.data);
        if (response.data.length > 0 && !selectedChildId) {
          setSelectedChildId(response.data[0].id);
        }
      } catch (err) {
        console.error('Failed to fetch members:', err);
        setError('Unable to load members. Please login again.');
      }
    };
    fetchMembers();
  }, [selectedChildId, setSelectedChildId]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  if (!members.length) return <p>No children found.</p>;

  return (
    <div>
      <h2>Your Children</h2>
      <select
        value={selectedChildId || ''}
        onChange={(e) => setSelectedChildId(Number(e.target.value))}
      >
        <option value="" disabled>
          -- Select Child --
        </option>
        {members.map((member) => (
          <option key={member.id} value={member.id}>
            {member.username}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MembersList;