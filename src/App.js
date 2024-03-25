import { HelmetProvider } from "react-helmet-async";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import SnackBar from "./components/snackBar";
import ProtectedRoute from "./components/protectedRoute";
import Loading from "components/loading";
import ThemeProvider from "./theme";
import DashboardLayout from "layout/dashboard/DashboardLayout";
import ProtectedRole from "components/withRole";
import features from "features";
import { Suspense } from "react";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<features.auth.useCases.login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          path="medicalRecord"
          element={
            <ProtectedRoute>
              <ProtectedRole roles={["patient"]}>
                <features.medicalRecord.useCases.Main />
              </ProtectedRole>
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  )
);
export default function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
      <Loading />
      <SnackBar />
    </>
  );
}
