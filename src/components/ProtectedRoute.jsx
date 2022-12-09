import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div></div>,
  });

  return <Component />;
};

export default ProtectedRoute;
