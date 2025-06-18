import { type ComponentType, useState } from "react";

export interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// HOC that adds authentication functionality
export function withAuth<P extends object>(
  WrappedComponent: ComponentType<P & { auth: AuthState }>
) {
  const WithAuthComponent = (props: P) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ name: string; email: string } | null>(
      null
    );

    const login = (email: string, password: string) => {
      // Simulate login
      if (email && password) {
        setIsAuthenticated(true);
        setUser({ name: "John Doe", email });
      }
    };

    const logout = () => {
      setIsAuthenticated(false);
      setUser(null);
    };

    const authProps: AuthState = {
      isAuthenticated,
      user,
      login,
      logout,
    };

    return <WrappedComponent {...props} auth={authProps} />;
  };

  // Preserve display name for debugging
  WithAuthComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithAuthComponent;
}
