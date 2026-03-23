import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./shared/components/layouts/MainLayout";
import ZeldaBOTWPage from "./features/ZeldaBOTW/ZeldaBOTWPage";
import MonstersView from "./features/ZeldaBOTW/Monsters/views/MonstersView";
import MonsterView from "./features/ZeldaBOTW/Monsters/views/MonsterView";
import UpdateMonsterView from "./features/ZeldaBOTW/Monsters/views/UpdateMonsterView";
import CreateMonsterView from "./features/ZeldaBOTW/Monsters/views/CreateMonsterView";
import MaterialsView from "./features/ZeldaBOTW/Materials/views/MaterialsView";
import MaterialView from "./features/ZeldaBOTW/Materials/views/MaterialView";
import CreateMaterialView from "./features/ZeldaBOTW/Materials/views/CreateMaterialView";
import UpdateMaterialView from "./features/ZeldaBOTW/Materials/views/UpdateMaterialView";

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

        <Route path="/" element={<Navigate to="/zelda" replace />} />

        {/* Rutas de Zelda */}
        <Route path="/zelda" element={<MainLayout><ZeldaBOTWPage /></MainLayout>} />

        <Route path="/zelda/monsters" element={<MainLayout><MonstersView /></MainLayout>} />
        <Route path="/zelda/monster" element={<MainLayout><MonsterView /></MainLayout>} />
        <Route path="/zelda/monster/create" element={<MainLayout><CreateMonsterView /></MainLayout>} />
        <Route path="/zelda/monster/edit" element={<MainLayout><UpdateMonsterView /></MainLayout>} />
        
        <Route path="/zelda/materials" element={<MainLayout><MaterialsView /></MainLayout>} />
        <Route path="/zelda/material" element={<MainLayout><MaterialView /></MainLayout>} />
        <Route path="/zelda/material/create" element={<MainLayout><CreateMaterialView /></MainLayout>} />
        <Route path="/zelda/material/edit" element={<MainLayout><UpdateMaterialView /></MainLayout>} />

        {/* Aquí luego añadirías /zelda/materials... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

