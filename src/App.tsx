import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListExpenses from './pages/expenses/list-expenses';
import CreateExpenses from './pages/expenses/create-expenses';
import Layout from './pages/Layout';
import Home from './pages/home';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/expenses' element={<ListExpenses />} />
              <Route path='/expenses/create' element={<CreateExpenses />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
