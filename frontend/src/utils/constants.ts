/**
 * Application Constants
 */

/**
 * Application Configuration
 */
export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'Expense Flow',
  version: import.meta.env.VITE_APP_VERSION || '0.1.0',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000', 10),
};

/**
 * Storage Keys
 */
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
};

/**
 * Route Paths
 */
export const ROUTES = {
  // Auth
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password/:token',

  // Public
  HOME: '/',
  LANDING: '/landing',

  // Private - Dashboard
  DASHBOARD: '/dashboard',

  // Transactions
  TRANSACTIONS: '/transactions',
  TRANSACTIONS_CREATE: '/transactions/create',
  TRANSACTIONS_EDIT: '/transactions/:id',

  // Accounts
  ACCOUNTS: '/accounts',
  ACCOUNTS_CREATE: '/accounts/create',
  ACCOUNTS_EDIT: '/accounts/:id',

  // Categories
  CATEGORIES: '/categories',
  CATEGORIES_CREATE: '/categories/create',
  CATEGORIES_EDIT: '/categories/:id',

  // Budgets
  BUDGETS: '/budgets',
  BUDGETS_CREATE: '/budgets/create',
  BUDGETS_EDIT: '/budgets/:id',

  // Reports
  REPORTS: '/reports',

  // Settings
  SETTINGS: '/settings',
  PROFILE: '/settings/profile',

  // 404
  NOT_FOUND: '*',
};

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },

  // Users
  USERS: {
    GET_PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    GET_BY_ID: '/users/:id',
  },

  // Accounts
  ACCOUNTS: {
    LIST: '/accounts',
    CREATE: '/accounts',
    GET_BY_ID: '/accounts/:id',
    UPDATE: '/accounts/:id',
    DELETE: '/accounts/:id',
  },

  // Categories
  CATEGORIES: {
    LIST: '/categories',
    CREATE: '/categories',
    GET_BY_ID: '/categories/:id',
    UPDATE: '/categories/:id',
    DELETE: '/categories/:id',
  },

  // Transactions
  TRANSACTIONS: {
    LIST: '/transactions',
    CREATE: '/transactions',
    GET_BY_ID: '/transactions/:id',
    UPDATE: '/transactions/:id',
    DELETE: '/transactions/:id',
  },

  // Budgets
  BUDGETS: {
    LIST: '/budgets',
    CREATE: '/budgets',
    GET_BY_ID: '/budgets/:id',
    UPDATE: '/budgets/:id',
    DELETE: '/budgets/:id',
  },

  // Goals
  GOALS: {
    LIST: '/goals',
    CREATE: '/goals',
    GET_BY_ID: '/goals/:id',
    UPDATE: '/goals/:id',
    DELETE: '/goals/:id',
  },

  // Debts
  DEBTS: {
    LIST: '/debts',
    CREATE: '/debts',
    GET_BY_ID: '/debts/:id',
    UPDATE: '/debts/:id',
    DELETE: '/debts/:id',
  },

  // Reports
  REPORTS: {
    SUMMARY: '/reports/summary',
    TRANSACTIONS: '/reports/transactions',
    INCOME_EXPENSE: '/reports/income-expense',
  },
};

/**
 * Date Formats
 */
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  DISPLAY_TIME: 'DD/MM/YYYY HH:mm',
  ISO: 'YYYY-MM-DD',
  ISO_TIME: 'YYYY-MM-DDTHH:mm:ss',
  API: 'YYYY-MM-DD',
};

/**
 * Currency Format
 */
export const CURRENCY_FORMAT = {
  DEFAULT: 'VND',
  SYMBOLS: {
    VND: '₫',
    USD: '$',
    EUR: '€',
  },
  LOCALES: {
    VND: 'vi-VN',
    USD: 'en-US',
    EUR: 'en-DE',
  },
};

/**
 * Pagination
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

/**
 * Validation
 */
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_AMOUNT: 0,
  MAX_AMOUNT: 999999999,
};
