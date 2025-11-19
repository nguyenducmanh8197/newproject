/**
 * Routes Configuration
 * Define application routes
 */

import { AuthLayout } from '@components/templates/AuthLayout';
import { DashboardLayout } from '@components/templates/DashboardLayout';
import { LoginPage } from '@pages/auth/LoginPage';
import { DashboardPage } from '@pages/dashboard/DashboardPage';
import TransactionListPage from '@pages/transactions/TransactionListPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Page imports (lazy loading)
// TODO: import SignupPage from '@pages/auth/SignupPage';
// TODO: import ForgotPasswordPage from '@pages/auth/ForgotPasswordPage';

/**
 * App Routes
 */
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes - Auth */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <div>Signup Page - TODO</div>
          </AuthLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <AuthLayout>
            <div>Forgot Password Page - TODO</div>
          </AuthLayout>
        }
      />

      {/* Private Routes - Dashboard */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* Private Routes - Transactions */}
      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <TransactionListPage />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* Catch all - redirect to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
