import { useMutation } from 'react-query';
import { logout as logoutApi } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi(),
    onSuccess: () => {
      navigate('/login', { replace: true });
    },
  });

  return (
    <ButtonIcon onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}
