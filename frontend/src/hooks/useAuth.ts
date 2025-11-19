/**
 * Custom Hooks - useAuth
 * Authentication state and methods
 */

import { useCallback } from 'react';

/**
 * useAuth hook - Get auth state and methods
 */
export function useAuth() {
  // const authState = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch<AppDispatch>();

  const login = useCallback(async (email: string, password: string) => {
    // TODO: Implement login dispatch
    console.log('Login:', email, password);
  }, []);

  const logout = useCallback(async () => {
    // TODO: Implement logout dispatch
    console.log('Logout');
  }, []);

  const signup = useCallback(async (email: string, _password: string, fullName: string) => {
    // TODO: Implement signup dispatch
    console.log('Signup:', email, fullName);
  }, []);

  return {
    // ...authState,
    login,
    logout,
    signup,
  };
}
