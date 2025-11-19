/**
 * Dashboard Page (MVP)
 * Shows user summary: total balance, income/expense overview, recent transactions
 */

import { ArrowDownOutlined, ArrowUpOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { usePagination } from '@hooks/usePagination';
import { formatCurrency, formatDate } from '@utils/formatters';
import { Button, Card, Col, Empty, Progress, Row, Statistic, Table } from 'antd';
import React, { useMemo } from 'react';
import styled from 'styled-components';

/**
 * Styled Components
 */
const DashboardWrapper = styled.div`
  .stats-row {
    margin-bottom: 24px;
  }

  .stat-card {
    border-left: 4px solid var(--primary-color);
    height: 100%;

    &.income {
      border-left-color: #52c41a;
    }

    &.expense {
      border-left-color: #ff4d4f;
    }

    &.balance {
      border-left-color: var(--primary-color);
    }
  }

  .stat-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-color);

    &.income-text {
      color: #52c41a;
    }

    &.expense-text {
      color: #ff4d4f;
    }
  }

  .section-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.85);
  }

  .action-buttons {
    display: flex;
    gap: 8px;
  }

  .transactions-table {
    .amount {
      font-weight: 600;

      &.income {
        color: #52c41a;
      }

      &.expense {
        color: #ff4d4f;
      }
    }
  }
`;

/**
 * Mock data for demonstration
 */
const MOCK_TRANSACTIONS: ITransaction[] = [
  {
    id: '1',
    date: new Date('2024-11-19'),
    category: 'Ăn uống',
    amount: 150000,
    type: 'expense',
    account: 'Ví tiền mặt',
    description: 'Lunch at restaurant',
  },
  {
    id: '2',
    date: new Date('2024-11-18'),
    category: 'Lương',
    amount: 5000000,
    type: 'income',
    account: 'Tài khoản ngân hàng',
    description: 'Monthly salary',
  },
  {
    id: '3',
    date: new Date('2024-11-18'),
    category: 'Điện nước',
    amount: 250000,
    type: 'expense',
    account: 'Tài khoản ngân hàng',
    description: 'Electricity bill',
  },
  {
    id: '4',
    date: new Date('2024-11-17'),
    category: 'Giáo dục',
    amount: 500000,
    type: 'expense',
    account: 'Ví tiền mặt',
    description: 'Online course',
  },
  {
    id: '5',
    date: new Date('2024-11-17'),
    category: 'Công việc thêm',
    amount: 1000000,
    type: 'income',
    account: 'Tài khoản ngân hàng',
    description: 'Freelance project',
  },
];

interface ITransaction {
  id: string;
  date: Date;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  account: string;
  description: string;
}

/**
 * Dashboard Page Component
 */
export const DashboardPage: React.FC = () => {
  // Calculate statistics from mock data
  const stats = useMemo(() => {
    const totalIncome = MOCK_TRANSACTIONS.filter((t) => t.type === 'income').reduce(
      (sum, t) => sum + t.amount,
      0
    );
    const totalExpense = MOCK_TRANSACTIONS.filter((t) => t.type === 'expense').reduce(
      (sum, t) => sum + t.amount,
      0
    );
    const balance = totalIncome - totalExpense;
    const expensePercent = (totalExpense / (totalIncome || 1)) * 100;

    return {
      totalIncome,
      totalExpense,
      balance,
      expensePercent: Math.min(100, expensePercent),
    };
  }, []);

  // Paginate transactions
  const { data: paginatedTransactions, pagination, goToPage } = usePagination(MOCK_TRANSACTIONS, 5);

  // Table columns
  const columns = [
    {
      title: 'Ngày',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      render: (date: Date) => formatDate(date, 'DD/MM/YYYY'),
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      width: 120,
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Tài khoản',
      dataIndex: 'account',
      key: 'account',
      width: 150,
    },
    {
      title: 'Số tiền',
      dataIndex: 'amount',
      key: 'amount',
      width: 120,
      align: 'right' as const,
      render: (amount: number, record: ITransaction) => (
        <span className={`amount ${record.type}`}>
          {record.type === 'income' ? '+' : '-'}
          {formatCurrency(amount)}
        </span>
      ),
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 100,
      render: () => (
        <Button type="text" size="small" icon={<EyeOutlined />}>
          Xem
        </Button>
      ),
    },
  ];

  return (
    <DashboardWrapper>
      {/* Statistics Row */}
      <Row gutter={[24, 24]} className="stats-row">
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card balance" size="small">
            <Statistic
              title="Số dư"
              value={stats.balance}
              prefix="₫"
              valueStyle={{ color: 'var(--primary-color)' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card income" size="small">
            <Statistic
              title="Tổng thu nhập"
              value={stats.totalIncome}
              prefix="₫"
              suffix={<ArrowUpOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card expense" size="small">
            <Statistic
              title="Tổng chi tiêu"
              value={stats.totalExpense}
              prefix="₫"
              suffix={<ArrowDownOutlined style={{ color: '#ff4d4f' }} />}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="stat-card" size="small">
            <div>
              <div style={{ marginBottom: '8px', fontSize: '12px', color: 'rgba(0,0,0,0.45)' }}>
                Tỷ lệ chi tiêu
              </div>
              <Progress type="circle" percent={Math.round(stats.expensePercent)} width={50} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Recent Transactions */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 className="section-title" style={{ margin: 0 }}>
            Giao dịch gần đây
          </h3>
          <div className="action-buttons">
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm giao dịch
            </Button>
            <Button icon={<EyeOutlined />}>Xem tất cả</Button>
          </div>
        </div>

        {paginatedTransactions.length > 0 ? (
          <Table
            className="transactions-table"
            columns={columns}
            dataSource={paginatedTransactions}
            rowKey="id"
            pagination={{
              current: pagination.page,
              pageSize: pagination.pageSize,
              total: pagination.total,
              onChange: goToPage,
              showSizeChanger: false,
              showTotal: (total) => `Tổng ${total} giao dịch`,
            }}
            size="small"
            style={{ marginTop: '16px' }}
          />
        ) : (
          <Empty description="Không có giao dịch" style={{ marginTop: '24px' }} />
        )}
      </Card>

      {/* Quick Actions */}
      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Button block size="large" type="dashed">
            Thêm tài khoản
          </Button>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Button block size="large" type="dashed">
            Thêm danh mục
          </Button>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Button block size="large" type="dashed">
            Xem báo cáo
          </Button>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Button block size="large" type="dashed">
            Cài đặt
          </Button>
        </Col>
      </Row>
    </DashboardWrapper>
  );
};

export default DashboardPage;
