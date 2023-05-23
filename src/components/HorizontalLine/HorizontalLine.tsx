import React from "react";
import "./HorizontalLine.css";

interface IHorizontalLineProps {
  children: string;
}

const HorizontalLine: React.FC<IHorizontalLineProps> = ({
  children,
}: IHorizontalLineProps) => {
  return (
    <div className="container line-container">
      <h2>
        <span>{children}</span>
      </h2>
    </div>
  );
};

export default HorizontalLine;
