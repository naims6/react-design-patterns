import React, { createContext, use, useState } from "react";

interface ITabsContext {
  active: string | null;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
}

// eslint(react-refresh/only-export-components)
const TabsContext = createContext<ITabsContext | null>(null);

const Tabs = ({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue: string;
}) => {
  const [active, setActive] = useState<string | null>(defaultValue);

  const data = {
    active,
    setActive,
  };

  return (
    <div>
      <TabsContext.Provider value={data}>{children}</TabsContext.Provider>
    </div>
  );
};

function TabsList({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "flex", gap: 10 }}>{children}</div>;
}

function TabsTrigger({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const context = use<ITabsContext | null>(TabsContext);
  if (!context) {
    throw new Error("TabsTrigger must be used inside Tabs");
  }
  const { active, setActive } = context;

  return (
    <button
      onClick={() => setActive(value)}
      style={{
        background: active === value ? "lightblue" : "white",
      }}
    >
      {children}
    </button>
  );
}

function TabsContent({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const context = use<ITabsContext | null>(TabsContext);
  if (!context) {
    throw new Error("TabsTrigger must be used inside Tabs");
  }
  const { active } = context;

  if (active !== value) {
    return null;
  }

  return <div>{children}</div>;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
