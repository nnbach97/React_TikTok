import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DefaultLayout from './Components/layouts/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello</h1>
        <Link to="/">Home </Link>
        <Link to="/fowlling">Fowlling </Link>
        <Link to="/upload">Upload</Link>
      </div>
      <Routes>
        {publicRoutes.map((item, index) => {
          let Layout = DefaultLayout;
          const Element = item.component;

          if (item.layout === null) {
            Layout = Fragment;
          } else if (item.layout) {
            Layout = item.layout;
          }

          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
