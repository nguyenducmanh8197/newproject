/**
 * DashboardLayout Component
 * Template layout for dashboard and main application pages
 * Includes header, sidebar, and footer
 */

import {
  BarChartOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SwapOutlined,
  TagsOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { ROUTES } from '@utils/constants';
import { Avatar, Button, Dropdown, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Styled Components
 */
const DashboardContainer = styled(Layout)`
  min-height: 100vh;
`;

const AppHeader = styled(Layout.Header)`
  background: white;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  .logo {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary-color);
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

const AppSider = styled(Layout.Sider)`
  background: #001529;

  .ant-layout-sider-children {
    background: #001529;
  }

  .ant-menu {
    background: #001529 !important;
    border-right: 1px solid #1890ff;
  }

  .ant-menu-item {
    color: rgba(255, 255, 255, 0.65) !important;

    &:hover {
      color: #1890ff !important;
    }

    &.ant-menu-item-selected {
      background-color: #1890ff !important;
      color: white !important;
    }
  }
`;

const AppContent = styled(Layout.Content)`
  margin: 24px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
`;

const AppFooter = styled(Layout.Footer)`
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
`;

/**
 * DashboardLayout Component
 */
export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  /**
   * Menu items for sidebar
   */
  const menuItems = [
    {
      key: ROUTES.DASHBOARD,
      icon: <HomeOutlined />,
      label: 'Dashboard',
      onClick: () => (window.location.href = ROUTES.DASHBOARD),
    },
    {
      key: ROUTES.TRANSACTIONS,
      icon: <SwapOutlined />,
      label: 'Giao dịch',
      onClick: () => (window.location.href = ROUTES.TRANSACTIONS),
    },
    {
      key: ROUTES.ACCOUNTS,
      icon: <WalletOutlined />,
      label: 'Tài khoản',
      onClick: () => (window.location.href = ROUTES.ACCOUNTS),
    },
    {
      key: ROUTES.CATEGORIES,
      icon: <TagsOutlined />,
      label: 'Danh mục',
      onClick: () => (window.location.href = ROUTES.CATEGORIES),
    },
    {
      key: ROUTES.REPORTS,
      icon: <BarChartOutlined />,
      label: 'Báo cáo',
      onClick: () => (window.location.href = ROUTES.REPORTS),
    },
  ];

  /**
   * User menu items
   */
  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Hồ sơ',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      onClick: () => {
        // TODO: Dispatch logout action
        localStorage.clear();
        window.location.href = ROUTES.LOGIN;
      },
    },
  ] as any[];

  return (
    <DashboardContainer>
      {/* Header */}
      <AppHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div className="logo">💰 ExpenseFlow</div>
        </div>

        <div className="header-right">
          <Dropdown menu={{ items: userMenuItems } as any}>
            <Avatar
              icon={<UserOutlined />}
              style={{ backgroundColor: 'var(--primary-color)', cursor: 'pointer' }}
            />
          </Dropdown>
        </div>
      </AppHeader>

      {/* Main Layout */}
      <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
        {/* Sidebar */}
        <AppSider collapsible collapsedWidth={80} collapsed={collapsed} width={200} theme="dark">
          <Menu mode="inline" defaultSelectedKeys={[ROUTES.DASHBOARD]} items={menuItems} />
        </AppSider>

        {/* Content */}
        <Layout>
          <AppContent>{children}</AppContent>

          {/* Footer */}
          <AppFooter>
            <p>&copy; 2024 Expense Flow. Quản lý chi tiêu của bạn một cách thông minh.</p>
          </AppFooter>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
};

export default DashboardLayout;
