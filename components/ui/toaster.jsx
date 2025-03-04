'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

// Toast types
const TOAST_TYPES = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// Context for the toaster
const ToastContext = createContext(null);

// Hook to use the toast functionality
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Individual Toast component
const Toast = ({ id, message, type = TOAST_TYPES.DEFAULT, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  // Determine toast color based on type
  const getTypeStyles = () => {
    switch (type) {
      case TOAST_TYPES.SUCCESS:
        return 'bg-green-500';
      case TOAST_TYPES.ERROR:
        return 'bg-red-500';
      case TOAST_TYPES.WARNING:
        return 'bg-yellow-500';
      case TOAST_TYPES.INFO:
        return 'bg-blue-500';
      default:
        return 'bg-gray-700';
    }
  };

  return (
    <div 
      className={`${getTypeStyles()} text-white p-4 rounded shadow-lg flex justify-between items-center mb-2 transform transition-all duration-300 ease-in-out`}
    >
      <div>{message}</div>
      <button 
        onClick={() => onClose(id)} 
        className="ml-4 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

// Main Toaster component
export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

// Provider component
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const toastIdCounter = useRef(0);

  const addToast = (message, type = TOAST_TYPES.DEFAULT) => {
    const id = toastIdCounter.current++;
    setToasts((prev) => [...prev, { id, message, type }]);
    return id;
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const toast = {
    toasts,
    addToast,
    removeToast,
    success: (message) => addToast(message, TOAST_TYPES.SUCCESS),
    error: (message) => addToast(message, TOAST_TYPES.ERROR),
    warning: (message) => addToast(message, TOAST_TYPES.WARNING),
    info: (message) => addToast(message, TOAST_TYPES.INFO),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
    </ToastContext.Provider>
  );
}

// If you're using this with the layout.js import structure shown earlier,
// you'll want to export both the Toaster component and the ToastProvider
// Then in your layout.js, wrap your app with ToastProvider and include Toaster