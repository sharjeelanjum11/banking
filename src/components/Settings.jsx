import React from 'react'
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Settings = () => {











    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Validate input
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
  
      // Call API
      const response = await fetch('/api/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          currentPassword,
          newPassword
        })
      });
  
      // Handle response
      const data = await response.json();
      if (response.ok) {
        setError('');
        alert('Password changed successfully');
      } else {
        setError(data.message);
      }
    }

















  return (
    <div>
          <form onSubmit={handleSubmit}>
      <TextField
        label="Current Password"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="New Password"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        margin="normal"
        required
        fullWidth
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        margin="normal"
        required
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
      {error && <div>{error}</div>}
    </form>
    </div>
  )
}

export default Settings
