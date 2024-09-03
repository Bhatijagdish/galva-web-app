import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/chat";
import LANDINGPAGE from "./pages/LANDINGPAGE..tsx";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthProvider";
import DashBoard from "./components/ChatStarter.tsx"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LANDINGPAGE />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat/>
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
