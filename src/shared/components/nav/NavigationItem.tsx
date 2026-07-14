// components/Nav/NavigationItem.tsx

import { Link, useLocation } from 'react-router-dom';
import type { NavItem } from '../../../data/navigations';


interface Props {
  item: NavItem;
  activeSection: string;
  mobile?: boolean;
  onNavigate?: () => void;
}

const NavigationItem = ({
  item,
  activeSection,
  mobile = false,
  onNavigate,
}: Props) => {
  const location = useLocation();

  const href = item.hash
    ? `${item.path}#${item.hash}`
    : item.path;

  const isActive = item.hash
    ? location.pathname === item.path &&
      activeSection === item.hash
    : location.pathname === item.path;

  return (
    <li className={isActive ? 'active' : ''}>
      <Link
        to={href}
        onClick={mobile ? onNavigate : undefined}
      >
        {item.label}
      </Link>
    </li>
  );
};

export default NavigationItem;