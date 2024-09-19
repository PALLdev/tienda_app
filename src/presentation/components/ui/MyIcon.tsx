import {Icon, useTheme} from '@ui-kitten/components';

type MyIconProps = {
  name: string;
  color?: string;
  white?: boolean;
};

export const MyIcon = ({name, color, white = false}: MyIconProps) => {
  const theme = useTheme();

  if (white) {
    color = theme['color-info-100'];
  } else if (!color) {
    color = theme['text-basic-color'];
  } else {
    color = theme[color] ?? theme['text-basic-color'];
  }

  return <Icon name={name} style={{width: 32, height: 32}} fill={color} />;
};
