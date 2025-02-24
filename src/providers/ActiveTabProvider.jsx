import { TabContext } from "@/context";
import { useState } from "react";

const ActiveTabProvider = ({children}) => {
    const [defaultTab, setDefaultTab] = useState('dashboard')
  return (
    <TabContext.Provider value={{defaultTab, setDefaultTab}}>
        {children}
    </TabContext.Provider>
  );
};

export default ActiveTabProvider;