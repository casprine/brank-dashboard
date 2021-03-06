// @ts-nocheck

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Flex from 'components/layout/Flex';
import theme from 'theme';
import { func, StyleFunction } from 'types';
import { useMeasure } from 'hooks';

export interface ITabRoute {
  label: string;
  render: func | JSX.Element;
}

interface IProps {
  routes?: ITabRoute[];
  gap?: number;
  activeViewIndex?: number;
}

const SampleComponent = ({ index }: { index: number }) => {
  return (
    <p
      css={{
        padding: '20px',
      }}
    >
      <h1>{index}</h1>
      {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis
      sapiente sequi at. Dicta at minus veniam nisi culpa a. Aperiam ducimus eum
      ex in laudantium similique dolorum quod quibusdam. */}
    </p>
  );
};

const sampleRoutes = [
  {
    label: 'People',
    render: <SampleComponent index={1} />,
  },

  {
    label: 'Person',
    render: <SampleComponent index={2} />,
  },

  {
    label: 'Metric',
    render: <SampleComponent index={3} />,
  },
];

const Tab: React.FC<IProps> = ({ routes = sampleRoutes, gap = 24, activeViewIndex = 0 }) => {
  const [value, setValue] = useState(activeViewIndex);
  const childRefs = useRef(new Map());
  const listRef = useRef();
  const [slider, setSlider] = useState({ left: 0, right: 0, hasValue: false });
  const { bounds, ref } = useMeasure();

  React.useEffect(() => {
    const target = childRefs.current.get(value);
    const container: any = listRef?.current;
    if (target) {
      const cRect = container?.getBoundingClientRect?.();

      if (cRect?.width === 0) {
        return;
      }

      const tRect = target.getBoundingClientRect();
      const left = tRect?.left - cRect?.left;
      const right = cRect?.right - tRect?.right;

      setSlider({
        hasValue: true,
        left: left + 8,
        right: right + 8,
      });
    }
  }, [value, bounds]);

  const typeOfActiveTabRenderComponent = typeof routes[value].render;

  return (
    <Flex css={{ ...generateStyles(), marginBottom: `${gap}px` }} stack>
      <div className="tab-container" ref={ref}>
        <div className="list" ref={(listRef as unknown) as string}>
          {routes.map((route, index: number) => {
            return (
              <motion.div
                key={index}
                className="tab-item"
                onClick={() => setValue(index)}
                css={{
                  color: value === index ? theme.colors.primary : theme.colors.blackAlpha[700],
                }}
                ref={(el) => childRefs.current.set(index, el)}
              >
                {route.label}
              </motion.div>
            );
          })}

          {slider.hasValue && (
            <motion.div
              className="slider"
              initial={false}
              style={{
                left: slider.left,
                right: slider.right,
              }}
              layout
            ></motion.div>
          )}
        </div>
      </div>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={value}
          className="content-container"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {typeOfActiveTabRenderComponent === 'object' && <>{routes[value].render}</>}

          {typeOfActiveTabRenderComponent === 'function' && (
            <>
              <>{routes?.[value]?.render?.()}</>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};

const generateStyles: StyleFunction = () => {
  return {
    marginBottom: '4rem',
    width: '100%',

    '.tab-container': {
      overflowY: 'hidden',
      borderBottom: `1px solid ${theme.colors.gray[100]}`,
      boxShadow: theme.shadows.sm,
      borderRadius: 6,
    },

    '.list': {
      position: 'relative',
      width: '100%',
      display: 'flex',
      backgroundColor: 'white',
      padding: '5px 0',
      borderRadius: 6,
    },

    '.tab-item': {
      cursor: 'pointer',
      padding: '10px 1rem',
      textSizeAdjust: 'none',
      textOverflow: 'ellipsis',
      fontSize: '1rem',
    },

    '.slider': {
      height: '4px',
      borderTopRightRadius: '8px',
      borderTopLeftRadius: '8px',
      marginLeft: '2px',
      marginRight: '2px',
      bottom: '0px',
      position: 'absolute',
      background: theme.colors.primary,
    },

    '.content-container': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: '100%',
    },

    '.animated-container': {
      flexDirection: 'row',
      direction: 'ltr',
      willChange: 'transform',
      minHeight: '0',
      flex: 1,
      display: 'flex',
    },

    '.page': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
      flexShrink: 0,
      height: '100%',
      overflow: 'hidden',
      outline: 'none',
    },
  };
};

export default Tab;
