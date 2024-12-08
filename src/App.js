// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import JobList from './Components/JobList';
import Profile from './Components/Profile';
import MatchResults from './Components/MatchResults';
import Login from './Components/Login';
import Register from './Components/Register';
import ApplicationForm from './Components/ApplicationForm';
// import Footer from './Components/Footer';
import MostSearchedJobs from './Components/MostSearchedJobs'; // Import MostSearchedJobs
import MostRecruiters from './Components/MostRecruiters'; // Import MostRecruiters
import MostRecruitedCompanies from './Components/MostRecruitedCompanies'; // Import MostRecruitedCompanies

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Main Routes block */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<MatchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/most-searched-jobs" element={<MostSearchedJobs />} />
          <Route path="/most-recruiters" element={<MostRecruiters />} />
          <Route path="/most-recruited-companies" element={<MostRecruitedCompanies />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;