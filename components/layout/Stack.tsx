import * as React from 'react';

// components
import Flex, { IFlex } from './Flex';

const cloneElement = (element: any, props: any) => {
  return jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });
};

const Stack: React.FC<
  {
    spacing?: string | number;
    isInline?: boolean;
    className?: string;
    id?: string;
    children: any;
  } & IFlex
> = ({ spacing = 16, children, isInline = false, className, id, ...rest }) => {
  const count = React.Children.count(children);

  if (!children) {
    return <div></div>;
  }

  return (
    <Flex
      id={id}
      css={{ width: 'auto', position: 'relative' }}
      stack={!isInline}
      className={className}
      {...rest}
    >
      {React.Children.map(children, (child, index) => {
        if (!child) {
          return;
        }

        return cloneElement(child, {
          css: {
            marginBottom: isInline === false && index !== count - 1 && `${spacing}px`,
            marginRight: isInline === true && index !== count - 1 && `${spacing}px`,
          },
        });
      })}
    </Flex>
  );
};

export default Stack;
