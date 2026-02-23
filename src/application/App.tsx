import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {
          /* implementation example 
           <Route
            path="/login"
            element={
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout>
                  <TaskListPage />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
