import React, { useState } from 'react';

const ProjectForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    state: 'Tamil Nadu',
    tower_type: 'Type-B',
    substation_type: '400kV',
    budget_cr: '',
    tax_rate: '',
    month: '',
    geographic_risk: ''
  });

  const states = [
    'Tamil Nadu', 'Gujarat', 'Assam', 'Rajasthan', 'Maharashtra',
    'Karnataka', 'Uttar Pradesh', 'West Bengal', 'Odisha', 'Andhra Pradesh',
    'Madhya Pradesh', 'Bihar'
  ];

  const towerTypes = ['Type-A', 'Type-B', 'Type-C', 'Type-D'];
  const substationTypes = ['132kV', '220kV', '400kV', '765kV'];
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="project-form-container">
      <div className="form-header">
        <h2>🏗️ New Project Analysis</h2>
        <p>Enter project details to get AI-powered material demand predictions and optimization recommendations</p>
      </div>

      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="state">📍 State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tower_type">🗼 Tower Type</label>
            <select
              id="tower_type"
              name="tower_type"
              value={formData.tower_type}
              onChange={handleChange}
              required
            >
              {towerTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <small>Type-D requires most materials, Type-A requires least</small>
          </div>

          <div className="form-group">
            <label htmlFor="substation_type">⚡ Substation Type</label>
            <select
              id="substation_type"
              name="substation_type"
              value={formData.substation_type}
              onChange={handleChange}
              required
            >
              {substationTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <small>Higher voltage requires more materials</small>
          </div>

          <div className="form-group">
            <label htmlFor="budget_cr">💰 Budget (Crores)</label>
            <input
              type="number"
              id="budget_cr"
              name="budget_cr"
              value={formData.budget_cr}
              onChange={handleChange}
              min="10"
              max="500"
              step="0.1"
              required
              placeholder="Enter budget in crores"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tax_rate">🏛️ Tax Rate (%)</label>
            <input
              type="number"
              id="tax_rate"
              name="tax_rate"
              value={formData.tax_rate}
              onChange={handleChange}
              min="0"
              max="30"
              required
              placeholder="Enter tax percentage"
            />
          </div>

          <div className="form-group">
            <label htmlFor="month">📅 Construction Month</label>
            <select
              id="month"
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            >
              <option value="">Select month</option>
              {months.map(month => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <small>Jan-Mar: Peak season | Jun-Aug: Monsoon challenges</small>
          </div>

          <div className="form-group full-width">
            <label htmlFor="geographic_risk">
              🏔️ Geographic Risk: {formData.geographic_risk || 0}/10
            </label>
            <input
              type="range"
              id="geographic_risk"
              name="geographic_risk"
              value={formData.geographic_risk}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
            <div className="risk-labels">
              <span>Low Risk</span>
              <span>Medium Risk</span>
              <span>High Risk</span>
            </div>
            <small>1-3: Plains | 4-7: Hills | 8-10: Mountains/Remote</small>
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
        >
          {loading ? '🔮 Analyzing...' : '🚀 Analyze Project'}
        </button>
      </form>

      <div className="form-info">
        <h3>💡 Quick Tips</h3>
        <ul>
          <li>Higher geographic risk increases material requirements by 5-15%</li>
          <li>Monsoon months (Jun-Aug) may cause construction delays</li>
          <li>Type-D towers require 80% more materials than Type-A</li>
          <li>765kV substations need 2x materials of 132kV substations</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectForm;