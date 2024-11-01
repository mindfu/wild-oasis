import styled from 'styled-components';
import HeaderMenu from '../ui/HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  color: #fff;
  padding: 1.6rem 2.8rem;
  border-bottom: 0.1rem solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
