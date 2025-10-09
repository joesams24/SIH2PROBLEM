import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Mock data for dashboard
  const efficiencyData = [
    { month: 'Jan', efficiency: 14.2, projects: 45 },
    { month: 'Feb', efficiency: 15.1, projects: 52 },
    { month: 'Mar', efficiency: 14.8, projects: 48 },
    { month: 'Apr', efficiency: 13.5, projects: 38 },
    { month: 'May', efficiency: 12.9, projects: 35 },
    { month: 'Jun', efficiency: 11.2, projects: 28 }
  ];

  const projectStats = [
    { type: 'Type-A', count: 120, avgDemand: 850 },
    { type: 'Type-B', count: 85, avgDemand: 1100 },
    { type: 'Type-C', count: 65, avgDemand: 1350 },
    { type: 'Type-D', count: 30, avgDemand: 1850 }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>📊 POWERGRID Dashboard</h1>
        <p>Real-time insights and project performance metrics</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏗️</div>
          <div className="stat-content">
            <div className="stat-value">300</div>
            <div className="stat-label">Active Projects</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <div className="stat-value">42.5K</div>
            <div className="stat-label">Tons Material Managed</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <div className="stat-value">14.3</div>
            <div className="stat-label">Avg Efficiency (tons/Cr)</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <div className="stat-value">92%</div>
            <div className="stat-label">On-Time Delivery</div>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3>📈 Monthly Efficiency Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={efficiencyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="efficiency" stroke="#4ECDC4" strokeWidth={2} />
              <Line type="monotone" dataKey="projects" stroke="#FF6B6B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>🏗️ Project Distribution by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="count" name="Project Count" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="avgDemand" name="Avg Demand (tons)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="quick-actions">
        <h3>🚀 Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-btn primary">
            🏗️ New Project Analysis
          </button>
          <button className="action-btn secondary">
            📊 View Reports
          </button>
          <button className="action-btn outline">
            📧 Export Data
          </button>
          <button className="action-btn outline">
            ⚙️ System Settings
          </button>
        </div>
      </div>

      <div className="recent-activity">
        <h3>📋 Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">✅</span>
            <div className="activity-content">
              <strong>Project P201 Analysis Completed</strong>
              <p>Tamil Nadu | Type-C | 400kV | Predicted: 1,250 tons</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">🔄</span>
            <div className="activity-content">
              <strong>Project P198 Optimization Applied</strong>
              <p>Cost efficiency improved by 18.2%</p>
              <span className="activity-time">5 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">📦</span>
            <div className="activity-content">
              <strong>Procurement Order Generated</strong>
              <p>Project P195 - 1,450 tons with 15% safety margin</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;