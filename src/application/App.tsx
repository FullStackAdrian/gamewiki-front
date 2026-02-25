import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import MonstersView from "./features/ZeldaBOTW/Monsters/views/MonstersView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* implementation example 
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
        <Route
          path="/"
          element={
            <MainLayout>
              <MonstersView />
            </MainLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
