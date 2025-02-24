import { SidebarContext } from "@/context";
import { useState } from "react";

const SidebarProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
        {children}
    </SidebarContext.Provider>
  )
};

export default SidebarProvider;
