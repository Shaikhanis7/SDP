// import React from 'react';
// import { Avatar, Badge, Button, Card, Col, Collapse, Descriptions, Divider, Dropdown, Input, Layout, Menu, Progress, Row, Segmented, Space, Table, Tabs, Tag, Timeline, Typography, Upload } from 'antd';
// import { BarChart, SparkLineChart } from '@mui/x-charts';
// import * as Icons from '@ant-design/icons';

// function Icon(props: { icon: string | number; }) {
//   return React.createElement(Icons[props.icon], { ...props });
// }

// export default function UXPinLayout() {
// //   const [collapsed, setCollapsed] = React.useState(false);
//   const [selectedKeys, setSelectedKeys] = React.useState(['i', 't', 'e', 'm', '-', '1']);
//   const [value, setValue] = React.useState('');
//   const [visible, setVisible] = React.useState(false);
//   const [activeKey, setActiveKey] = React.useState(undefined);

//   return (
//     <Layout hasSider>
//       <Layout.Sider
//         collapsible
//         breakpoint="lg"
//         theme="dark"
//         collapsed={collapsed}
//         onCollapse={(collapsed) => setCollapsed(collapsed)}
//       >
//         <Col flex="1" style={{ textAlign: 'center', padding: '20px 0' }}>
//           <Icon icon="AntDesignOutlined" style={{ fontSize: '50px', color: '#ffffff' }} />
//         </Col>
//         <Menu
//           mode="inline"
//           theme="dark"
//           selectedKeys={selectedKeys}
//           onSelect={({ selectedKeys }) => setSelectedKeys(selectedKeys)}
//         >
//           <Menu.Item key="dashboard" icon={<Icon icon="DashboardOutlined" />}>
//             Dashboard
//           </Menu.Item>
//           <Menu.Item key="mail" icon={<Icon icon="MailOutlined" />}>
//             Mail
//           </Menu.Item>
//           <Menu.Item key="events" icon={<Icon icon="CalendarOutlined" />}>
//             Events
//           </Menu.Item>
//           <Menu.SubMenu key="explore" title="Explore" icon={<Icon icon="DeploymentUnitOutlined" />}>
//             <Menu.Item key="widgets">Widgets</Menu.Item>
//             <Menu.Item key="reports">Reports</Menu.Item>
//           </Menu.SubMenu>
//           <Divider />
//           <Menu.Item key="favorites" icon={<Icon icon="HeartOutlined" />}>
//             Favorites
//           </Menu.Item>
//           <Menu.Item key="support" icon={<Icon icon="QuestionCircleOutlined" />}>
//             Support
//           </Menu.Item>
//         </Menu>
//       </Layout.Sider>
//       <Layout>
//         <Layout.Header style={{ background: '#ffffff' }}>
//           <Row justify="start">
//             <Space size="middle" style={{ flex: 1 }}>
//               <Button
//                 type="text"
//                 size="large"
//                 icon={<Icon icon="MenuOutlined" />}
//                 onClick={() => setCollapsed(!collapsed)}
//               />
//               <Col>
//                 <Typography.Title level={4} style={{ margin: 0 }} type="secondary">
//                   Dashboard
//                 </Typography.Title>
//               </Col>
//             </Space>
//             <Space size="small">
//               <Input
//                 placeholder="Search"
//                 style={{ width: '200px' }}
//                 prefix={<Icon icon="SearchOutlined" />}
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//               />
//               <Dropdown
//                 menu={{ items: [{ key: '1', label: '1st menu item' }, { key: '2', label: '2nd menu item' }, { key: '3', label: 'Danger menu item', danger: true }] }}
//               >
//                 <Button type="text" icon={<Icon icon="UserOutlined" />}>
//                   Sign in
//                 </Button>
//               </Dropdown>
//               <Button type="dashed" shape="circle" icon={<Icon icon="SettingOutlined" />} />
//               <Badge count="4">
//                 <Button type="dashed" shape="circle" icon={<Icon icon="BellOutlined" />} />
//               </Badge>
//             </Space>
//           </Row>
//         </Layout.Header>
//         <Layout.Content>
//           <Space size="middle" direction="horizontal" style={{ marginBottom: '24px' }}>
//             <Typography.Link href="#/">Home</Typography.Link>
//             <Typography.Text>Dashboard</Typography.Text>
//           </Space>
//           <Row gutter={[16, 16]}>
//             <Col xs={24} xl={6} md={12}>
//               <Card style={{ height: '100%' }}>
//                 <Row justify="space-between">
//                   <Col>
//                     <Typography.Text type="secondary" strong>
//                       Today's Sales
//                     </Typography.Text>
//                     <Space size="small" align="baseline">
//                       <Typography.Title level={3} style={{ margin: 0 }} ellipsis>
//                         $53,000
//                       </Typography.Title>
//                       <Typography.Text type="success" strong ellipsis>
//                         +30%
//                       </Typography.Text>
//                     </Space>
//                   </Col>
//                   <Col xs={6} style={{ textAlign: 'center' }}>
//                     <Icon icon="DollarCircleTwoTone" style={{ fontSize: '60px', color: '#1890ff' }} />
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>
//             <Col xs={24} md={12} xl={6}>
//               <Card style={{ height: '100%' }}>
//                 <Row>
//                   <Col xs={18}>
//                     <Typography.Text type="secondary" strong>
//                       Today's Users
//                     </Typography.Text>
//                     <Space size="small" align="baseline">
//                       <Typography.Title level={3} style={{ margin: 0 }}>
//                         $3,200
//                       </Typography.Title>
//                       <Typography.Text type="success" strong>
//                         +20%
//                       </Typography.Text>
//                     </Space>
//                   </Col>
//                   <Col xs={6} style={{ textAlign: 'center' }}>
//                     <Icon icon="RocketTwoTone" style={{ fontSize: '60px', color: '#1890ff' }} />
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>
//             <Col xs={24} md={12} xl={6}>
//               <Card style={{ height: '100%' }}>
//                 <Row>
//                   <Col xs={18}>
//                     <Typography.Text type="secondary" strong>
//                       New Clients
//                     </Typography.Text>
//                     <Space size="small" align="baseline">
//                       <Typography.Title level={3} style={{ margin: 0 }}>
//                         $1,200
//                       </Typography.Title>
//                       <Typography.Text type="danger" strong>
//                         -15%
//                       </Typography.Text>
//                     </Space>
//                   </Col>
//                   <Col xs={6} style={{ textAlign: 'center' }}>
//                     <Icon icon="ContactsTwoTone" style={{ fontSize: '60px', color: '#1890ff' }} />
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>
//             <Col xs={24} md={12} xl={6}>
//               <Card style={{ height: '100%' }}>
//                 <Row>
//                   <Col xs={18}>
//                     <Typography.Text type="secondary" strong>
//                       New Orders
//                     </Typography.Text>
//                     <Space size="small" align="baseline">
//                       <Typography.Title level={3} style={{ margin: 0 }}>
//                         $13,200
//                       </Typography.Title>
//                       <Typography.Text type="warning" strong>
//                         +1%
//                       </Typography.Text>
//                     </Space>
//                   </Col>
//                   <Col xs={6} style={{ textAlign: 'center' }}>
//                     <Icon icon="ShoppingTwoTone" style={{ fontSize: '60px', color: '#1890ff' }} />
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>
//             <Col xs={24} md={12} xl={10}>
//               <Card style={{ height: '100%' }}>
//                 <Typography.Title level={4} style={{ marginTop: 0, marginBottom: '20px' }}>
//                   Active Users
//                 </Typography.Title>
//                 <Segmented
//                   options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
//                   defaultValue="Weekly"
//                   size="small"
//                   block
//                   style={{ marginBottom: '20px' }}
//                 />
//                 <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
//                 <Divider dashed plain />
//                 <Descriptions title="Top user" column={3} size="small" layout="vertical">
//                   <Descriptions.Item label="UserName">JDoe</Descriptions.Item>
//                   <Descriptions.Item label="Name">John Doe</Descriptions.Item>
//                   <Descriptions.Item label="Date">2024-08-09</Descriptions.Item>
//                   <Descriptions.Item label="Posts">18</Descriptions.Item>
//                   <Descriptions.Item label="Comments">120</Descriptions.Item>
//                 </Descriptions>
//               </Card>
//             </Col>
//             <Col xs={24} xl={14}>
//               <Card>
//                 <Typography.Title level={4} style={{ marginTop: 0, marginBottom: '20px' }}>
//                   Sales Overview
//                 </Typography.Title>
//                 <BarChart data={[{ name: 'Jan', sales: 4000 }, { name: 'Feb', sales: 3000 }]} />
//               </Card>
//             </Col>
//             <Col xs={24} xl={10}>
//               <Card>
//                 <Typography.Title level={4} style={{ marginTop: 0, marginBottom: '20px' }}>
//                   Active Tasks
//                 </Typography.Title>
//                 <Timeline>
//                   <Timeline.Item>Created new task</Timeline.Item>
//                   <Timeline.Item>Completed project report</Timeline.Item>
//                 </Timeline>
//               </Card>
//             </Col>
//           </Row>
//         </Layout.Content>
//       </Layout>
//     </Layout>
//   );
// }
