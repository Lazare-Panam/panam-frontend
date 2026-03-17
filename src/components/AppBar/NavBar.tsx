import React from "react";
import { AppBar, useScrollTrigger } from "@mui/material";

// Components
import DesktopNavbar from "./components/DesktopNavBar";
import MegaMenu from "./components/MegaMenu";
import MobileDrawer from "./components/MobileDrawer";

// Hooks & Store
import { useNavbar } from "./hooks/useNavbar";
import { useCartStore } from "../store/useCartStore";
import { navConfig } from "./components/config";

const Navbar: React.FC = () => {
  const { state, actions } = useNavbar();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });
  const cart = useCartStore(state => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        onMouseLeave={() => actions.setMegaMenuOpen(null)}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.98)" : "white",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          color: "text.primary",
          borderBottom: trigger ? "none" : "1px solid #E0E0E0",
          zIndex: 1201 // Higher than default to stay above search overlays
        }}
      >
        <DesktopNavbar 
          {...state} 
          {...actions} 
          cartCount={cartCount} 
        />

        {state.megaMenuOpen && !state.isSearchOpen && (
          <MegaMenu 
            isOpen={Boolean(state.megaMenuOpen)} 
            menuData={(navConfig as any)[state.megaMenuOpen] || []} 
            activeTab={state.activeTab} 
            setActiveTab={actions.setActiveTab} 
            handleNavigate={actions.handleNavigate} 
          />
        )}
      </AppBar>

      <MobileDrawer 
        open={state.openDrawer} 
        onClose={() => actions.setOpenDrawer(false)} 
      />
    </>
  );
};

export default Navbar;