import React from "react";
export interface CollapseProps {
  title: string;
  child: React.ReactNode;
  active?: boolean;
}
