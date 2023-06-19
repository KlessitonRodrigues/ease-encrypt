import IonIcons from '@expo/vector-icons/Ionicons';
import { StyleProp, TextStyle } from 'react-native';
import { useTheme } from 'styled-components';

const Icons = (props: IconsProps) => {
  const { type, color, size, style, onPress } = props;
  const theme = useTheme();

  const iconProps = {
    size: size || 20,
    color: color || theme.colors.white,
    style: style as StyleProp<TextStyle>,
    onPress,
  };

  switch (type) {
    case 'lock':
      return <IonIcons name="lock-closed-outline" {...iconProps} />;
    case 'lock-fill':
      return <IonIcons name="lock-closed" {...iconProps} />;
    case 'lock-open':
      return <IonIcons name="lock-open-outline" {...iconProps} />;
    case 'copy':
      return <IonIcons name="copy-outline" {...iconProps} />;
    case 'settings':
      return <IonIcons name="settings-outline" {...iconProps} />;
    case 'sun':
      return <IonIcons name="sunny-outline" {...iconProps} />;
    case 'moon':
      return <IonIcons name="moon-outline" {...iconProps} />;
    case 'moon-fill':
      return <IonIcons name="moon" {...iconProps} />;
  }
};

export default Icons;
