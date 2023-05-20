import logo from './logo.svg';
import './App.css';
import { AuthorizeRoutes } from './routes/routes/AuthorizeRoutes';
import { Sidebar } from './utils/layouts/sidebar/SideBar';
import { PageLayout } from './utils/layouts/pageLayout/PageLayout';
import Dashboard from './pages/dashboard/pages';

function App() {
  return (
    <>
    <AuthorizeRoutes/>
    </>
  );
}

export default App;
