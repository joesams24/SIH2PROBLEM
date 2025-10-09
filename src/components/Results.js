import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Results = ({ projectData, results, onOptimize }) => {
  const { current_prediction, current_efficiency, optimization_options } = results;

  const efficiencyData = optimization_options.map(opt => ({
    name: opt.scenario.replace(/_/g, ' ').toUpperCase(),
    efficiency: parseFloat(opt.cost_efficiency.toFixed(2)),
    improvement: parseFloat(opt.improvement.toFixed(1)),
    demand: Math.round(opt.predicted_demand),
    budget: opt.budget
  }));

  const bestScenario = optimization_options[0];

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>📈 Analysis Results</h2>
        <p>AI-powered insights for your project optimization</p>
      </div>

      <div className="results-grid">
        <div className="result-card primary">
          <h3>📦 Predicted Material Demand</h3>
          <div className="result-value">{Math.round(current_prediction)} tons</div>
          <div className="result-subtext">Base requirement for your project</div>
        </div>

        <div className="result-card">
          <h3>💰 Cost Efficiency</h3>
          <div className="result-value">{current_efficiency.toFixed(2)} tons/Cr</div>
          <div className="result-subtext">Material per crore spent</div>
        </div>

        <div className="result-card highlight">
          <h3>🏆 Best Optimization</h3>
          <div className="result-value">{bestScenario.scenario.replace(/_/g, ' ')}</div>
          <div className="result-subtext">
            +{bestScenario.improvement.toFixed(1)}% improvement
          </div>
        </div>

        <div className="result-card">
          <h3>🛡️ Safety Margin</h3>
          <div className="result-value">
            {Math.round(results.procurement_strategy.recommended_procurement)} tons
          </div>
          <div className="result-subtext">
            Includes {results.procurement_strategy.safety_margin}% safety
          </div>
        </div>
      </div>

      <div className="efficiency-chart">
        <h3>📊 Cost Efficiency Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={efficiencyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'efficiency') return [value, 'Tons/Cr'];
                if (name === 'improvement') return [value + '%', 'Improvement'];
                return [value, name];
              }}
            />
            <Legend />
            <Bar dataKey="efficiency" name="Cost Efficiency" fill="#4ECDC4" />
            <Bar dataKey="improvement" name="Improvement %" fill="#FF6B6B" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="project-summary">
        <h3>🏗️ Project Summary</h3>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="label">Location:</span>
            <span className="value">{projectData.state}</span>
          </div>
          <div className="summary-item">
            <span className="label">Tower Type:</span>
            <span className="value">{projectData.tower_type}</span>
          </div>
          <div className="summary-item">
            <span className="label">Substation:</span>
            <span className="value">{projectData.substation_type}</span>
          </div>
          <div className="summary-item">
            <span className="label">Budget:</span>
            <span className="value">{projectData.budget_cr} Cr</span>
          </div>
          <div className="summary-item">
            <span className="label">Timeline:</span>
            <span className="value">Month {projectData.month}</span>
          </div>
          <div className="summary-item">
            <span className="label">Risk Level:</span>
            <span className="value">{projectData.geographic_risk}/10</span>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button 
          className="btn-primary"
          onClick={() => onOptimize(bestScenario)}
        >
          🚀 Apply Best Optimization
        </button>
        <button className="btn-secondary">
          💾 Save Analysis
        </button>
        <button className="btn-outline">
          📧 Export Report
        </button>
      </div>
    </div>
  );
};

export default Results;