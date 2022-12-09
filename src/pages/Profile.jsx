import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../layout/Layout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <Layout>
        <div>
          <img
            src={user.picture}
            alt={user.name}
            className="w-20 rounded-full"
          />
          <h2>{user.name}</h2>
        </div>
      </Layout>
    )
  );
};

export default Profile;
