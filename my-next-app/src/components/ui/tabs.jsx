
import React, { useState } from 'react';

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex border-b">
      {React.Children.map(children, (child, index) => (
        <div
          className={`cursor-pointer p-2 ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export function TabsTrigger({ children }) {
  return <div>{children}</div>;
}

export function TabsContent({ children, activeTab }) {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div className={activeTab === index ? 'block' : 'hidden'}>
          {child}
        </div>
      ))}
    </div>
  );
}