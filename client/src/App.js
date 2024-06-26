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
            // <ProtectedRole roles={["patient"]}>
            <features.medicalRecord.useCases.Main />
            // </ProtectedRole>
          }
        />
        <Route
          path="authorisedDoctors"
          element={
            // <ProtectedRole roles={["patient"]}>
            <features.authorisedDoctors.useCases.Main />
            // </ProtectedRole>
          }
        />
        <Route
          path="patients"
          element={
            // <ProtectedRole roles={["patient"]}>
            <features.patients.useCases.Main />
            // </ProtectedRole>
          }
        />
        <Route
          path="prescriptions"
          element={
            // <ProtectedRole roles={["patient"]}>
            <features.prescription.useCases.Main />
            // </ProtectedRole>
          }
        />
        <Route
          path="pharmacy"
          element={
            // <ProtectedRole roles={["patient"]}>
            <features.pharmacy.useCases.Main />
            // </ProtectedRole>
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
