import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navConfig, type NavCategory } from "../components/config";

export const useNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [openDrawer, setOpenDrawer] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<NavCategory | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Auto-close everything on route change
  useEffect(() => {
    setMegaMenuOpen(null);
    setOpenDrawer(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleMouseEnter = (menuId: string) => {
    if (isSearchOpen || !navConfig[menuId]) return;
    setMegaMenuOpen(menuId);
    setActiveTab(navConfig[menuId][0]);
  };

  const handleNavigate = (link: string) => {
    setMegaMenuOpen(null);
    navigate(link);
  };

  return {
    state: { openDrawer, megaMenuOpen, activeTab, isSearchOpen },
    actions: { 
      setOpenDrawer, 
      setMegaMenuOpen, 
      setActiveTab, 
      setIsSearchOpen, 
      handleMouseEnter, 
      handleNavigate 
    }
  };
};