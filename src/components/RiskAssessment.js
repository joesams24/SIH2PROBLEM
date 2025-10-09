import React from 'react';

const RiskAssessment = ({ risks }) => {
  const getRiskIcon = (level) => {
    switch (level) {
      case 'High': return '🔴';
      case 'Medium': return '🟡';
      case 'Low': return '🟢';
      default: return '⚪';
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'High': return 'high-risk';
      case 'Medium': return 'medium-risk';
      case 'Low': return 'low-risk';
      default: return '';
    }
  };

  return (
    <div className="risk-assessment-container">
      <div className="section-header">
        <h2>⚠️ Risk Assessment</h2>
        <p>Identified risks and recommended mitigation strategies</p>
      </div>

      {risks.length === 0 ? (
        <div className="no-risks">
          <div className="success-icon">✅</div>
          <h3>Low Risk Profile</h3>
          <p>Your project parameters indicate a low-risk profile. No major risks identified.</p>
        </div>
      ) : (
        <div className="risks-grid">
          {risks.map((risk, index) => (
            <div key={index} className={`risk-card ${getRiskColor(risk.level)}`}>
              <div className="risk-header">
                <span className="risk-icon">{getRiskIcon(risk.level)}</span>
                <div className="risk-title">
                  <h3>{risk.type}</h3>
                  <span className={`risk-level ${getRiskColor(risk.level)}`}>
                    {risk.level} Risk
                  </span>
                </div>
              </div>
              
              <div className="risk-impact">
                <strong>Potential Impact:</strong> {risk.impact}
              </div>
              
              <div className="risk-mitigation">
                <strong>💡 Mitigation Strategy:</strong> {risk.mitigation}
              </div>
              
              <div className="risk-actions">
                <button className="btn-small">View Details</button>
                <button className="btn-small primary">Apply Mitigation</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="risk-prevention-tips">
        <h3>🛡️ General Risk Prevention Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">📅</div>
            <h4>Seasonal Planning</h4>
            <p>Avoid monsoon months (Jun-Aug) for major construction activities</p>
          </div>
          
          <div className="tip-card">
            <div className="tip-icon">🏔️</div>
            <h4>Geographic Risk</h4>
            <p>Conduct thorough site surveys for hilly/remote areas</p>
          </div>
          
          <div className="tip-card">
            <div className="tip-icon">📦</div>
            <h4>Inventory Buffer</h4>
            <p>Maintain 10-15% safety stock for high-risk projects</p>
          </div>
          
          <div className="tip-card">
            <div className="tip-icon">👥</div>
            <h4>Vendor Management</h4>
            <p>Multiple vendors for critical materials in remote locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;