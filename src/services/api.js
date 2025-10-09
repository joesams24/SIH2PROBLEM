// Mock API service - replace with actual backend endpoints
const API_BASE_URL = 'http://localhost:5000/api';

// Mock data for development
const mockAnalysisResults = (projectData) => {
  return {
    current_prediction: Math.random() * 1000 + 800,
    current_efficiency: Math.random() * 5 + 10,
    optimization_options: [
      {
        scenario: 'current',
        predicted_demand: Math.random() * 1000 + 800,
        budget: projectData.budget_cr,
        cost_efficiency: Math.random() * 5 + 10,
        improvement: 0
      },
      {
        scenario: 'budget_optimized',
        predicted_demand: Math.random() * 1000 + 700,
        budget: projectData.budget_cr * 0.9,
        cost_efficiency: Math.random() * 5 + 12,
        improvement: 15.5
      },
      {
        scenario: 'timing_optimized',
        predicted_demand: Math.random() * 1000 + 750,
        budget: projectData.budget_cr,
        cost_efficiency: Math.random() * 5 + 13,
        improvement: 18.2
      },
      {
        scenario: 'risk_optimized',
        predicted_demand: Math.random() * 1000 + 720,
        budget: projectData.budget_cr,
        cost_efficiency: Math.random() * 5 + 14,
        improvement: 22.1
      },
      {
        scenario: 'fully_optimized',
        predicted_demand: Math.random() * 1000 + 680,
        budget: projectData.budget_cr * 0.85,
        cost_efficiency: Math.random() * 5 + 16,
        improvement: 28.7
      }
    ],
    risk_assessment: [
      {
        type: 'High Geographic Risk',
        level: 'High',
        impact: '15-20% cost overrun possible',
        mitigation: 'Increase safety stock by 15%'
      },
      {
        type: 'Monsoon Construction',
        level: 'Medium',
        impact: 'Potential 30% delay in construction',
        mitigation: 'Plan indoor pre-fabrication work'
      }
    ],
    procurement_strategy: {
      recommended_procurement: Math.random() * 1000 + 900,
      safety_margin: 15,
      timing: 'Immediate procurement recommended',
      lead_time: '4-6 weeks',
      vendor_approach: 'Multiple vendors recommended for bulk materials'
    }
  };
};

export const analyzeProject = async (projectData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return mock data for development
  return mockAnalysisResults(projectData);
  
  // For production, use:
  /*
  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  
  if (!response.ok) {
    throw new Error('Analysis failed');
  }
  
  return response.json();
  */
};

export const getOptimizationScenarios = async (scenario) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { message: 'Optimization applied successfully' };
};