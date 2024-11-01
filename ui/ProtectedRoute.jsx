import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import styled from 'styled-components';
import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load authenticated user from the server
  const { isLoading, isAuthenticated } = useUser();

  // 2. If user is not authenticated redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If user is authenticated show children
  if (isAuthenticated) return children;
}
