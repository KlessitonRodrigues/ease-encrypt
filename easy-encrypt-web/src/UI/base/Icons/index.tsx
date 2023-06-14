import { CSSProperties } from 'react';
import { BsGithub } from 'react-icons/bs';
import {
  IoCopyOutline,
  IoLockClosed,
  IoLockClosedOutline,
  IoLogoGithub,
  IoMoon,
  IoMoonOutline,
  IoOpenOutline,
  IoSettingsOutline,
  IoSunnyOutline,
} from 'react-icons/io5';
import { useTheme } from 'styled-components';

const Icons = (props: IconsProps) => {
  const { type, size, marginX, marginY, onChange } = props;
  const theme = useTheme();

  const iconStyle: CSSProperties = {
    color: theme.colors.white,
    margin: `${theme.size(marginY)} ${theme.size(marginX)}`,
    fontSize: theme.size(size || 6),
    cursor: 'pointer',
    ...props,
  };

  switch (type) {
    case 'lock':
      return <IoLockClosedOutline style={iconStyle} onClick={onChange} />;
    case 'lock-fill':
      return <IoLockClosed style={iconStyle} onClick={onChange} />;
    case 'lock-open':
      return <IoOpenOutline style={iconStyle} onClick={onChange} />;
    case 'copy':
      return <IoCopyOutline style={iconStyle} onClick={onChange} />;
    case 'settings':
      return <IoSettingsOutline style={iconStyle} onClick={onChange} />;
    case 'sun':
      return <IoSunnyOutline style={iconStyle} onClick={onChange} />;
    case 'moon':
      return <IoMoonOutline style={iconStyle} onClick={onChange} />;
    case 'moon-fill':
      return <IoMoon style={iconStyle} onClick={onChange} />;
    case 'gh-logo':
      return <BsGithub style={iconStyle} onClick={onChange} />;
  }
};

export default Icons;
