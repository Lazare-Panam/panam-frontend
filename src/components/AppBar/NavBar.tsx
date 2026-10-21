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
        elevation={0}
        onMouseLeave={() => actions.setMegaMenuOpen(null)}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.92)" : "#FFFFFF",
          backdropFilter: "saturate(180%) blur(14px)",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          color: "text.primary",
          borderBottom: "1px solid #E8EEF3",
          boxShadow: trigger ? "0 6px 24px rgba(15,34,54,0.08)" : "none",
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