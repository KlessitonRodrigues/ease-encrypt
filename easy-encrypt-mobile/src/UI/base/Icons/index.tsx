import IonIcons from '@expo/vector-icons/Ionicons';

export const Icons = (props: IconsProps) => {
  const { type } = props;

  const iconProps = {
    color: 'white',
    size: 20,
    ...props,
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
  }
};
