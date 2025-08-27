import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Dashboard from './pages/Admin/Dashboard';
import ProductManagement from './pages/Admin/ProductManagement';
import UserManagement from './pages/Admin/UserManagement';
import OrderManagement from './pages/Admin/OrderManagement';

// Initialize demo data
const initializeDemoData = () => {
  // Check if demo users already exist
  const existingUsers = localStorage.getItem('users');
  if (!existingUsers) {
    const demoUsers = [
      {
        id: '1',
        username: 'admin',
        email: 'admin@celicacomputers.co.ke',
        phoneNumber: '+254700123456',
        isAdmin: true,
        walletBalance: 50000,
        address: 'Nairobi, Kenya',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        username: 'user',
        email: 'user@example.com',
        phoneNumber: '+254711987654',
        isAdmin: false,
        walletBalance: 15000,
        address: 'Mombasa, Kenya',
        createdAt: new Date().toISOString(),
      },
    ];
    
    localStorage.setItem('users', JSON.stringify(demoUsers));
    localStorage.setItem('password_1', 'admin123');
    localStorage.setItem('password_2', 'user123');
    
    console.log('Demo data initialized:');
    console.log('Admin login: admin/admin123');
    console.log('User login: user/user123');
  }
};

const ProtectedRoute: React.FC<{ children: React.ReactNode; requireAuth?: boolean }> = ({ 
  children, 
  requireAuth = true 
}) => {
  const { user } = useAuth();
  
  if (requireAuth && !user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App: React.FC = () => {
  useEffect(() => {
    initializeDemoData();
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route 
                    path="/cart" 
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/settings" 
                    element={<Settings />}
                  />
                  <Route 
                    path="/profile" 
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/admin" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/admin/products" 
                    element={
                      <ProtectedRoute>
                        <ProductManagement />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/admin/users" 
                    element={
                      <ProtectedRoute>
                        <UserManagement />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/admin/orders" 
                    element={
                      <ProtectedRoute>
                        <OrderManagement />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;