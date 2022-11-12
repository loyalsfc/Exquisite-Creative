import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App px-4 md:px-0">
      <Outlet />
    </div>
  )
}

export default App
