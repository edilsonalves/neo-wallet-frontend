import React from 'react';

import * as styled from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <styled.Tooltip className={className}>
      {children}
      <span>{title}</span>
    </styled.Tooltip>
  );
};

export default Tooltip;
