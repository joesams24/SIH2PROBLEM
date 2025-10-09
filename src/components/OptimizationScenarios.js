import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OptimizationScenarios = ({ scenarios }) => {
  const chartData = scenarios.map(scenario => ({
    name: scenario.scenario.replace(/_/g, '\n'),
    demand: Math.round(scenario.predicted_demand),
    budget: scenario.budget,
    efficiency: parseFloat(scenario.cost_efficiency.toFixed(2)),
    improvement: parseFloat(scenario.improvement.toFixed(1))
  }));

  return (
    <div className="optimization-container">
      <div className="section-header">
        <h2>💡 Optimization Scenarios</h2>
        <p>Compare different project configurations for optimal results</p>
      </div>

      <div className="scenarios-grid">
        {scenarios.map((scenario, index) => (
          <div key={scenario.scenario} className={`scenario-card ${index === 0 ? 'best' : ''}`}>
            <div className="scenario-header">
              <h3>{scenario.scenario.replace(/_/g, ' ').toUpperCase()}</h3>
              {index === 0 && <span className="best-badge">🏆 BEST</span>}
            </div>
            
            <div className="scenario-metrics">
              <div className="metric">
                <span className="metric-label">Predicted Demand</span>
                <span className="metric-value">{Math.round(scenario.predicted_demand)} tons</span>
              </div>
              
              <div className="metric">
                <span className="metric-label">Budget</span>
                <span className="metric-value">{scenario.budget} Cr</span>
              </div>
              
              <div className="metric">
                <span className="metric-label">Cost Efficiency</span>
                <span className="metric-value highlight">
                  {scenario.cost_efficiency.toFixed(2)} tons/Cr
                </span>
              </div>
              
              <div className="metric">
                <span className="metric-label">Improvement</span>
                <span className={`metric-value ${scenario.improvement > 0 ? 'positive' : 'negative'}`}>
                  {scenario.improvement > 0 ? '+' : ''}{scenario.improvement.toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="scenario-description">
              {getScenarioDescription(scenario.scenario)}
            </div>
          </div>
        ))}
      </div>

      <div className="comparison-chart">
        <h3>📈 Scenario Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="demand" name="Demand (tons)" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="budget" name="Budget (Cr)" fill="#82ca9d" />
            <Bar yAxisId="right" dataKey="efficiency" name="Efficiency (tons/Cr)" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const getScenarioDescription = (scenario) => {
  const descriptions = {
    'budget_optimized': 'Adjusted budget to optimal range based on historical successful projects',
    'timing_optimized': 'Changed construction timeline to avoid monsoon and leverage peak season',
    'risk_optimized': 'Reduced geographic risk factors through better site selection',
    'fully_optimized': 'Combined budget, timing, and risk optimizations for maximum efficiency',
    'current': 'Original project parameters without optimization'
  };
  
  return descriptions[scenario] || 'Custom optimization scenario';
};

export default OptimizationScenarios;