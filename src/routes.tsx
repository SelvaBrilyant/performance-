import { createBrowserRouter } from 'react-router-dom';
import NodePerformance from '@/components/sections/NodePerformance';
import MongoDBPerformance from '@/components/sections/MongoDBPerformance';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'node',
        element: <NodePerformance />,
      },
      {
        path: 'react',
        element: <HomePage />,
      },
      {
        path: 'mongodb',
        element: <MongoDBPerformance />,
      },
    ],
  },
]); 