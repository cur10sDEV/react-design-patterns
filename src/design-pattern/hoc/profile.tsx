import type React from "react";
import { withAuth, type AuthState } from "./withAuth";

interface ProfileProps {
  auth: AuthState;
}

const Profile: React.FC<ProfileProps> = ({ auth }) => {
  if (!auth.isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {auth.user?.name}
      </p>
      <p>
        <strong>Email:</strong> {auth.user?.email}
      </p>
      <button onClick={auth.logout} style={{ padding: "8px 16px" }}>
        Logout
      </button>
    </div>
  );
};

// Apply HOC - alternatively you can chain(function inside function) different HOCs but should look out for wrapper hell
export const EnhancedProfile = withAuth(Profile);
