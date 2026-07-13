// components/Nav/Navigation.tsx

import type { NavItem } from '../../../data/navigations';
import NavigationItem from './NavigationItem';

interface Props {
  items: NavItem[];
  activeSection: string;
  mobile?: boolean;
  onNavigate?: () => void;
}

const Navigation = ({
  items,
  activeSection,
  mobile = false,
  onNavigate,
}: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <NavigationItem
          key={`${item.path}-${item.hash ?? ''}`}
          item={item}
          activeSection={activeSection}
          mobile={mobile}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
};

export default Navigation;