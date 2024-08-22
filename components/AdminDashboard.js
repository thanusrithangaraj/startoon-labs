import React, { useEffect, useState } from 'react';
import axios from '../axios/axiosConfig';
import { Bar } from 'react-chartjs-2';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('/api/admin/users')
      .then(response => {
        setUsers(response.data.users);
        const userCount = response.data.userCount;
        
        setChartData({
          labels: Object.keys(userCount),
          datasets: [{
            label: 'User Count',
            data: Object.values(userCount),
            backgroundColor: 'rgba(75,192,192,0.4)',
          }],
        });
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>All Registered Users</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Count</th>
              <th>Gender</th>
              <th>Last Login Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.count}</td>
                <td>{user.gender}</td>
                <td>{user.lastLoginDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>User Count by Date/Month</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default AdminDashboard;
