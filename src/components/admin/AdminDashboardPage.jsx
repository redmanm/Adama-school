import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboardPage.css';
import { useNavigate } from 'react-router-dom';

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <p className="dashboard-subtitle">Manage the platform's content and features with ease</p>
      </div>
      <Row className="dashboard-row">
        <Col md={6} lg={4}>
          <Card className="admin-card">
            <div className="card-icon">
              <i className="fas fa-newspaper"></i>
            </div>
            <Card.Img variant="top" src=".././photos/adama5.jpg" alt="News Admin" />
            <Card.Body>
              <Card.Title>News Admin</Card.Title>
              <Card.Text>Manage all news posts, images, and videos.</Card.Text>
              <Button className="admin-button" onClick={() => navigate('/NewsAdmin')}>Go to News Admin</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="admin-card">
            <div className="card-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <Card.Img variant="top" src=".././photos/adama7.jpg" alt="E-Learning Admin" />
            <Card.Body>
              <Card.Title>E-Learning Admin</Card.Title>
              <Card.Text>Manage e-learning content, courses, and materials.</Card.Text>
              <Button className="admin-button" onClick={() => navigate('/ELearningAdmin')}>Go to E-Learning Admin</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="admin-card">
            <div className="card-icon">
              <i className="fas fa-school"></i>
            </div>
            <Card.Img variant="top" src=".././photos/adama9.jpg" alt="Schools Admin" />
            <Card.Body>
              <Card.Title>Schools Admin</Card.Title>
              <Card.Text>Manage school information, enrollment, and activities.</Card.Text>
              <Button className="admin-button" onClick={() => navigate('/SchoolsAdmin')}>Go to Schools Admin</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboardPage;
