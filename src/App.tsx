import { AppProvider } from "./state/AppContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
