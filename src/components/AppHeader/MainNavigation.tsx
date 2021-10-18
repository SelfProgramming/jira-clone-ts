import { Tab, Tabs } from '@mui/material';
import { useNavigationTabs } from './use-navigation-tabs';

export const MainNavigation = () => {
  const [activeTab, tabs] = useNavigationTabs();

  return (
    <Tabs value={activeTab} aria-label="basic tabs example">
      {tabs.map((tab) => (
        <Tab key={tab.path} label={tab.label} />
      ))}
    </Tabs>
  );
};
