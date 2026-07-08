import React, { useState } from 'react';
import './ToggleSwitch.scss';

interface ToggleSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
}) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <div
      className={`
      toggle-switch
      ${checked ? 'on' : 'off'}
      ${disabled ? 'disabled' : ''}
    `}
      onClick={handleToggle}
    >
      <div className="toggle-thumb"></div>
    </div>
  );
};

export default ToggleSwitch;
