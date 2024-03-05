import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ element }) => {
    const { user } = useAuth();

    return user ? element : <Navigate to="/medic-login" />;
};

export default ProtectedRoute;