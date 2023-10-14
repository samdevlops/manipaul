import { Navigate, createHashRouter } from "react-router-dom";
import { CancelPolicyContent } from "../layouts/cancel-policy/cancel-policy";
import NavigationBar from "../layouts/navigation-bar";
import { PrivacyPolicyContent } from "../layouts/privacy-policy";
import { TermsAndConditionsContent } from "../layouts/terms-and-conditions";

const allRoutes = createHashRouter([
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Navigate to="home" /> },
          { path: "home", element: <Home /> },
          { path: "products", element: <ProductsPage /> },
          {
            path: "legal",
            element: <LegalPolicyPage />,
            children: [
              { path: "", element: <Navigate to="privacy-policy" /> },
              { path: "privacy-policy", element: <PrivacyPolicyContent /> },
              {
                path: "cancellation-policy",
                element: <CancelPolicyContent />,
              },
              {
                path: "terms-and-conditions",
                element: <TermsAndConditionsContent />,
              },
            ],
          },
          { path: "contact", element: <ContactUsPage /> },
          { path: "industry/:heading", element: <IndustryPage /> },
          { path: "blog", element: <BlogPage /> },
          { path: "blog/:heading", element: <Blog /> },
          { path: "about-us", element: <AboutUsPage /> },
          { path: "*", element: <ErrorPage /> },
        ],
      },
    ],
  },
]);

export default allRoutes;
