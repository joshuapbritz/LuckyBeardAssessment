import React from 'react';
import './App.css';
import { Navigation } from './components/navigation/navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';
import { PagePath } from './enums/page-paths';
import { RequestDemoPage } from './pages/request-demo/request-demo.page';

function App() {
  return (
    <React.Fragment>
      <Navigation />

      <main>
        <Routes>
          <Route path={PagePath.Home} element={<HomePage />} />
          <Route path={PagePath.RequestDemo} element={<RequestDemoPage />} />
          <Route path={PagePath.WildCard} element={<Navigate to={PagePath.Home} />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

