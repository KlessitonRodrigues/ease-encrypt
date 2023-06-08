import IonIcons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';

export const Icons = (props: IconsProps) => {
  const { type } = props;
  const theme = useTheme();

  const iconProps = {
    color: theme.colors.white,
    size: 20,
    ...props,
  };

  switch (type) {
    case 'lock':
      return <IonIcons name="lock-closed-outline" {...iconProps} />;
    case 'lock-fill':
      return <IonIcons name="lock-closed-outline" {...iconProps} />;
    case 'lock-open':
      return <IonIcons name="lock-open-outline" {...iconProps} />;
    case 'copy':
      return <IonIcons name="copy-outline" {...iconProps} />;
    case 'settings':
      return <IonIcons name="settings-outline" {...iconProps} />;
  }
};
