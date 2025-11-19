/**
 * Ant Design Theme Configuration
 */

import { ThemeConfig } from 'antd';

/**
 * Light theme configuration
 */
export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1890ff',
    colorTextBase: 'rgba(0, 0, 0, 0.85)',
    colorBgBase: '#ffffff',
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
};

/**
 * Dark theme configuration
 */
export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#177ddc',
    colorSuccess: '#58d9f9',
    colorWarning: '#ffb220',
    colorError: '#ff4d4f',
    colorInfo: '#177ddc',
    colorTextBase: 'rgba(255, 255, 255, 0.85)',
    colorBgBase: '#141414',
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
};
