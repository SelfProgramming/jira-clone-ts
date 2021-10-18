import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../../services/hooks/use-app-routes';

const tabs = [{ path: routes.yourWork, label: 'Your work' }];

export const useNavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const activeTabIndex = tabs.findIndex(
      (tab) => tab.path === location.pathname,
    );
    setActiveTab(activeTabIndex);
  }, [location.pathname]);

  return [activeTab, tabs] as const;
};
