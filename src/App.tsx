import { useState, useEffect } from 'react';
import AppRoutes from 'services/routes/AppRoutes';

const LOCAL_STORAGE_KEY = 'contact-login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (window.localStorage.getItem(LOCAL_STORAGE_KEY)) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, `${new Date()}`);
    } else {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [isLoggedIn]);

  return (
    <div className="screen">
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default App;
