import React from 'react';
import LoginForm from './screens/auth/login';
import { AppRoutes } from './routes/routes';

function App() {
  return (
      <div className="min-h-screen flex flex-col">
      <AppRoutes />
    </div>
  );
}

export default App;