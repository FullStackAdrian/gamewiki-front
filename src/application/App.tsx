import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./shared/components/layouts/MainLayout";
import MonstersView from "./features/ZeldaBOTW/Monsters/views/MonstersView";
import MonsterView from "./features/ZeldaBOTW/Monsters/views/MonsterView";
import UpdateMonsterView from "./features/ZeldaBOTW/Monsters/views/UpdateMonsterView";

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
        <Route
          path="/monster"
          element={
            <MainLayout>
              <MonsterView />
            </MainLayout>
          }
        />
        <Route
          path="/edit"
          element={
            <MainLayout>
              <UpdateMonsterView />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

