/**
 * Main App Component
 */

import { AppRoutes } from '@routes/index';
import { lightTheme } from '@styles/theme';
import { ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Root App Component
 */
export default function App(): JSX.Element {
  return (
    <ConfigProvider locale={viVN} theme={lightTheme}>
      <Router>
        <AppRoutes />
      </Router>
    </ConfigProvider>
  );
}
