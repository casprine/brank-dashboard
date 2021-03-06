import { CSSObject } from '@emotion/react';
import React from 'react';
import { ColorGroupType, DefaultHTMLProps, sizes } from 'types';
import { Flex } from 'components/layout';
import theme from 'theme';

type TagType = 'error' | 'success' | 'info' | 'disabled' | 'warning';
interface ITag {
  type?: TagType;
  shape?: 'pill' | 'rounded';
  color?: ColorGroupType;
  isSolid?: boolean;
  size?: sizes;
  prependComponent?: any;
  appendComponent?: any;
  label?: string;
}

const tagSizeStyles: Record<sizes, CSSObject> = {
  '3xs': { height: 12, fontSize: 8, padding: '0, 8px' },
  '2xs': { height: 18, fontSize: 10, padding: '0 8px' },
  xs: { height: 20, fontSize: 12, padding: '0 8px' },
  sm: { height: 24, fontSize: 12, padding: '0 12px' },
  md: { height: 24, fontSize: 14, padding: '0 12px' },
  lg: { height: 28, fontSize: 14, padding: '0 16px' },
  xl: { height: 32, fontSize: 14, padding: '0 16px' },
  '2xl': { height: 36, fontSize: 20, padding: '0 16px' },
};

const typeColors: Record<TagType, ColorGroupType> = {
  error: 'red',
  success: 'green',
  info: 'blue',
  disabled: 'gray',
  warning: 'amber',
};

const Tag: React.FC<ITag & DefaultHTMLProps<HTMLDivElement>> = ({
  children,
  className,
  prependComponent,
  appendComponent,
  color = 'gray',
  size = 'sm',
  label,
  shape = 'pill',
  type,
  isSolid,
  ...rest
}) => {
  return (
    <div
      className={className}
      css={() =>
        generateStyles({
          color,
          size,
          shape,
          type,
          isSolid,
        })
      }
      {...rest}
    >
      <Flex ai="center">
        {prependComponent && (
          <Flex ai="center" jc="center" className="add-on prepend">
            {prependComponent}
          </Flex>
        )}
        <div className="tag_content">
          {children} {label && <span className="label">{label}</span>}
        </div>
        {appendComponent && (
          <Flex ai="center" jc="center" className="add-on append">
            {appendComponent}
          </Flex>
        )}
      </Flex>
    </div>
  );
};

type StyleFunction<T> = (props?: Partial<T>) => CSSObject;

const generateStyles: StyleFunction<ITag> = (props: ITag) => {
  const height = tagSizeStyles[props?.size as sizes].height as number;

  function getColors(): CSSObject {
    if (props?.type) {
      return {
        color: props.isSolid ? 'white' : theme.colors[typeColors[props.type]][600],
        background: theme.colors[typeColors[props.type]][props.isSolid ? 600 : 100],
      };
    }
    return {
      background: theme.colors[props?.color as ColorGroupType][props?.isSolid ? 600 : 100],
      color: props?.isSolid ? 'white' : theme.colors[props?.color as ColorGroupType][600],
    };
  }

  return {
    ...tagSizeStyles[props?.size as sizes],
    ...getColors(),
    flexGrow: 0,
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height * (props?.shape === 'pill' ? 0.5 : 0.15),
    '.prepend': { marginRight: 4, height: height },
    '.append': { marginLeft: 4, height: height },
    '.tag_content': {},
    '.label': {
      textTransform: 'uppercase',
      fontSize: 'inherit',
      fontFamily: theme.typography.fonts.sans,
      fontWeight: 600,
    },
  };
};

export default Tag;
