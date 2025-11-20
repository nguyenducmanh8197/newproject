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

// Page imports
import ForgotPasswordPage from '@pages/auth/ForgotPasswordPage';
import SignupPage from '@pages/auth/SignupPage';
import { AccountListPage } from '@pages/accounts';
import { CategoryListPage } from '@pages/categories';
import { ReportsPage } from '@pages/reports';
import { TransactionDetailPage } from '@pages/transactions';

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
            <SignupPage />
          </AuthLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <AuthLayout>
            <ForgotPasswordPage />
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
      <Route
        path="/transactions/:id"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <TransactionDetailPage />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* Private Routes - Accounts */}
      <Route
        path="/accounts"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <AccountListPage />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* Private Routes - Categories */}
      <Route
        path="/categories"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <CategoryListPage />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* Private Routes - Reports */}
      <Route
        path="/reports"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <ReportsPage />
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
