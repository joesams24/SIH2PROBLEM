import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const ProcurementStrategy = ({ strategy }) => {
  const { recommended_procurement, safety_margin, timing, lead_time, vendor_approach } = strategy;

  const baseDemand = recommended_procurement / (1 + safety_margin / 100);
  
  const procurementData = [
    { name: 'Base Demand', value: Math.round(baseDemand) },
    { name: 'Safety Stock', value: Math.round(recommended_procurement - baseDemand) }
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  const getTimingColor = (timing) => {
    if (timing.includes('Immediate')) return '#ff6b6b';
    if (timing.includes('schedule')) return '#4ecdc4';
    return '#45b7d1';
  };

  const getVendorColor = (approach) => {
    if (approach.includes('Multiple')) return '#ff9ff3';
    return '#feca57';
  };

  return (
    <div className="procurement-container">
      <div className="section-header">
        <h2>🛒 Procurement Strategy</h2>
        <p>Optimal purchasing plan for your project requirements</p>
      </div>

      <div className="procurement-overview">
        <div className="procurement-card primary">
          <h3>📦 Recommended Procurement</h3>
          <div className="procurement-value">{Math.round(recommended_procurement)} tons</div>
          <div className="procurement-subtext">
            Includes {safety_margin}% safety margin
          </div>
        </div>

        <div className="procurement-details">
          <div className="detail-item">
            <span className="detail-label">⏰ Timing</span>
            <span 
              className="detail-value timing"
              style={{ color: getTimingColor(timing) }}
            >
              {timing}
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">🚚 Lead Time</span>
            <span className="detail-value">{lead_time}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">🏢 Vendor Strategy</span>
            <span 
              className="detail-value vendor"
              style={{ color: getVendorColor(vendor_approach) }}
            >
              {vendor_approach}
            </span>
          </div>
        </div>
      </div>

      <div className="procurement-breakdown">
        <div className="breakdown-chart">
          <h3>📊 Procurement Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={procurementData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value} tons`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {procurementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} tons`, 'Quantity']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="procurement-actions">
          <h3>🚀 Recommended Actions</h3>
          <div className="action-list">
            <div className="action-item">
              <span className="action-icon">📋</span>
              <div className="action-content">
                <strong>Create Purchase Order</strong>
                <p>Initiate procurement process immediately</p>
              </div>
            </div>

            <div className="action-item">
              <span className="action-icon">👥</span>
              <div className="action-content">
                <strong>Vendor Coordination</strong>
                <p>Contact suppliers based on the recommended strategy</p>
              </div>
            </div>

            <div className="action-item">
              <span className="action-icon">📦</span>
              <div className="action-content">
                <strong>Warehouse Planning</strong>
                <p>Arrange storage for the safety stock</p>
              </div>
            </div>

            <div className="action-item">
              <span className="action-icon">🚛</span>
              <div className="action-content">
                <strong>Logistics Setup</strong>
                <p>Plan transportation considering lead time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="procurement-timeline">
        <h3>📅 Procurement Timeline</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker current">1</div>
            <div className="timeline-content">
              <h4>Week 1-2: Vendor Selection</h4>
              <p>Finalize vendors and negotiate contracts</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2</div>
            <div className="timeline-content">
              <h4>Week 3-4: Purchase Orders</h4>
              <p>Issue POs and confirm delivery schedules</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">3</div>
            <div className="timeline-content">
              <h4>Week 5-8: Material Delivery</h4>
              <p>Receive materials at site with quality checks</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">4</div>
            <div className="timeline-content">
              <h4>Week 9-12: Safety Stock</h4>
              <p>Ensure safety stock is available on-site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementStrategy;