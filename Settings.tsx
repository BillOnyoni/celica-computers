import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, User, Info, LogOut, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Settings: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Settings
        </h1>

        <div className="space-y-6">
          {/* Theme Setting */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isDark ? (
                  <Moon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Sun className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Theme
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Switch between light and dark mode
                  </p>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isDark ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDark ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* User Profile */}
          {user && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <Link
                to="/profile"
                className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-2 -m-2 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Profile
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Manage your account information
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          )}

          {/* Admin Panel */}
          {user?.isAdmin && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <Link
                to="/admin"
                className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-2 -m-2 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Admin Panel
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Manage users, products, and orders
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          )}

          {/* About */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <Link
              to="/about"
              className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-2 -m-2 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    About Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learn more about Celica Computers Villa
                  </p>
                </div>
              </div>
              <div className="text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Logout */}
          {user && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <button
                onClick={logout}
                className="flex items-center justify-between w-full hover:bg-gray-50 dark:hover:bg-gray-700 p-2 -m-2 rounded-lg transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <LogOut className="w-6 h-6 text-red-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-500">
                      Logout
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Sign out of your account
                    </p>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;