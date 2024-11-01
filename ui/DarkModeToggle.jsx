import { HiOutlineMoon } from 'react-icons/hi';
import { HiOutlineSun } from 'react-icons/hi';
import ButtonIcon from './ButtonIcon';
import { useDarkMode } from '../src/context/DarkModeContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}
