import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm';
import Results from './components/Results';
import RiskAssessment from './components/RiskAssessment';
import OptimizationScenarios from './components/OptimizationScenarios';
import ProcurementStrategy from './components/ProcurementStrategy';
import { analyzeProject, getOptimizationScenarios } from './services/api';
import './styles/App.css';

function App() {
  const [projectData, setProjectData] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleProjectSubmit = async (projectData) => {
    setLoading(true);
    try {
      const results = await analyzeProject(projectData);
      setProjectData(projectData);
      setAnalysisResults(results);
      setActiveTab('results');
    } catch (error) {
      console.error('Analysis failed:', error);
      alert('Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOptimize = async (scenario) => {
    setLoading(true);
    try {
      const optimizedResults = await getOptimizationScenarios(scenario);
      setAnalysisResults(optimizedResults);
    } catch (error) {
      console.error('Optimization failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <img src="/powergrid-logo.png" alt="POWERGRID" className="logo" />
          <h1>POWERGRID Decision Support System</h1>
          <span className="subtitle">Material Demand Forecasting & Optimization</span>
        </div>
      </header>

      <nav className="navigation">
        <button 
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button 
          className={`nav-btn ${activeTab === 'project' ? 'active' : ''}`}
          onClick={() => setActiveTab('project')}
        >
          🏗️ New Project
        </button>
        {analysisResults && (
          <>
            <button 
              className={`nav-btn ${activeTab === 'results' ? 'active' : ''}`}
              onClick={() => setActiveTab('results')}
            >
              📈 Results
            </button>
            <button 
              className={`nav-btn ${activeTab === 'optimization' ? 'active' : ''}`}
              onClick={() => setActiveTab('optimization')}
            >
              💡 Optimization
            </button>
            <button 
              className={`nav-btn ${activeTab === 'risks' ? 'active' : ''}`}
              onClick={() => setActiveTab('risks')}
            >
              ⚠️ Risk Assessment
            </button>
            <button 
              className={`nav-btn ${activeTab === 'procurement' ? 'active' : ''}`}
              onClick={() => setActiveTab('procurement')}
            >
              🛒 Procurement
            </button>
          </>
        )}
      </nav>

      <main className="main-content">
        {loading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>Analyzing project data...</p>
          </div>
        )}

        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'project' && (
          <ProjectForm onSubmit={handleProjectSubmit} loading={loading} />
        )}
        {activeTab === 'results' && analysisResults && (
          <Results 
            projectData={projectData} 
            results={analysisResults} 
            onOptimize={handleOptimize}
          />
        )}
        {activeTab === 'optimization' && analysisResults && (
          <OptimizationScenarios scenarios={analysisResults.optimization_options} />
        )}
        {activeTab === 'risks' && analysisResults && (
          <RiskAssessment risks={analysisResults.risk_assessment} />
        )}
        {activeTab === 'procurement' && analysisResults && (
          <ProcurementStrategy strategy={analysisResults.procurement_strategy} />
        )}
      </main>

      <footer className="app-footer">
        <p>© 2024 POWERGRID - Powering Nation's Progress | AI-Powered Decision Support System</p>
      </footer>
    </div>
  );
}

export default App;