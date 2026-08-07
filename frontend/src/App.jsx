import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import TransactionDetails from "./pages/TransactionDetails";
import AIAssistant from "./pages/AIAssistant";
import Notifications from "./pages/Notifications";
import Landing from "./pages/Landing";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/analyze" element={<Analyze />} />

        <Route path="/history" element={<History />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

        <Route
    path="/transaction/:id"
    element={<TransactionDetails />}
    />
    <Route
    path="/assistant"
    element={<AIAssistant />}
    />
    <Route
  path="/notifications"
  element={<Notifications />}
    />

    <Route
path="/landing"
element={<Landing />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;