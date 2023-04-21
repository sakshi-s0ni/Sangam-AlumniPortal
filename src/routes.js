import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import Home from "./components/Home/Home"
import Login from "./components/Home/Login/Login"
import Feed from './components/Feed/Feed';
import AddPost from './components/Feed/AddPost';
// import DashboardApp from './components/Dashboard/DashboardApp';


export default function Router() {
  const routes = useRoutes([
    // {
    //   path: '/dashboard',
    //   element: <Dashboard />,
    //   children: [
    //     { element: <Navigate to="/dashboard" />, index: true },
    //     // { element: <Navigate to="/login" />, index: true },
    //     { path: 'app', element: <DashboardApp /> },
    //     { path: 'patientRegister', element: <RegisterPatient /> },
    //     // { path: 'patientinfo', element: <PatientInformation /> }
    //   ],
    // },
    
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'home',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: 'feed',
        element: <Feed />,
    },
    {
        path: 'addpost',
        element: <AddPost />,
    },
    

  ]);

  return routes;
}