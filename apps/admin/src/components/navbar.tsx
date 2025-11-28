import LightDarkModeButton from "./lightDarkModeButton";
import { SidebarTrigger } from "./ui/sidebar";
import UserSettingsButton from "./userSettingsButton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[11px] bg-primary/2 shadow-xs border-b backdrop-blur-md sticky top-0 z-10">
      <SidebarTrigger />
      <div className="flex items-center gap-6">
        <LightDarkModeButton />
        <UserSettingsButton />
      </div> 
    </div>
  );
};

export default Navbar;
