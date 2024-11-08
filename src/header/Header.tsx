import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

import { BedSingle } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useSignOutManager } from "@/services/auth";
import { LoadingSpinner } from "@/components/extension/loading-spinner";

import logoImage from "@/assets/logo.png";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const LogoLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NavLink
      to={href}
      className="flex items-center gap-2 font-semibold text-base"
    >
      {children}
    </NavLink>
  );
};

const HeaderLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${
          isActive ? "text-foreground" : "text-muted-foreground"
        } transition-colors hover:text-foreground"`
      }
    >
      {children}
    </NavLink>
  );
};

const Header = () => {
  const {
    mutate: signOutManager,
    isPending: isSignOutPending,
    // isError,
    // error,
  } = useSignOutManager();

  return (
    <header className="sticky top-0 w-full flex h-16 items-center gap-4 border-b bg-background px-6 z-50 bg-purple-700">
      <nav className="flex font-medium flex-row items-center gap-5 text-sm">
        <LogoLink href="/">
        <img src={logoImage} alt="Logo" className="w-8 h-8" />
        </LogoLink>
        <HeaderLink href="/flights"><div className="text-white">Flights</div></HeaderLink>
        <HeaderLink href="/rooms"><div className="text-white">Analysis</div></HeaderLink>
        <HeaderLink href="/hotels"><div className="text-white">Inventory</div></HeaderLink>
        
      </nav>
      <div className="flex items-center ml-auto gap-2">
        <ModeToggle />
        {isSignOutPending ? (
          <LoadingSpinner />
        ) : (
          <Button className="bg-purple-950">Log Out</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
