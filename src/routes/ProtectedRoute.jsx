import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

export const ProtectedRoute = () => {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Outlet />
    ) : (
        <Navigate to='/login' replace />
    )
}