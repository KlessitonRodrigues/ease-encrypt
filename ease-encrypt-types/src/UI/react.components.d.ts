type HeaderProps = {
  icon: React.ReactElement;
  title: string;
  ghIcon: React.ReactElement;
};

type TextAreaProps = {
  label?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

type ButtonProps = {
  label: string;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  p?: string;
  variant?: 'base' | 'outline' | 'solid';
  onClick?: () => void;
};

type InputProps = {
  label?: string;
  type?: string;
  value?: string | number;
  placeHolder?: string;
  required?: boolean;
  description?: string;
  onChange?: (value: string) => void;
};

type InfoTagProps = {
  required?: boolean;
  description?: string;
  expandTo?: 'top' | 'right';
};

type IfProps = {
  check: boolean;
  true?: React.ReactElement;
  false?: React.ReactElement;
  children?: React.ReactElement;
};
