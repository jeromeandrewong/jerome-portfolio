import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { NavTab } from './NavTab';

type Tab = {
  label: string;
  path: string;
};

const tabs: Tab[] = [
  {
    label: 'Jerome',
    path: '/',
  },
  {
    label: 'Projects',
    path: '/',
  },
  {
    label: 'Cafes',
    path: '/',
  },
  {
    label: 'Room',
    path: '/',
  },
];

export function NavTabGroup() {
  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(
    null
  );
  const [highlightedTab, setHighlightedTab] = useState<Tab | null>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  function repositionHighlight(
    ev: React.MouseEvent<HTMLAnchorElement>,
    tab: Tab
  ) {
    const target = ev.target as Element;
    setTabBoundingBox(target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current?.getBoundingClientRect() ?? null);
    setIsHoveredFromNull(highlightedTab === null);
    setHighlightedTab(tab);
  }

  function resetHighlight() {
    setHighlightedTab(null);
  }

  let highlightStyles: Record<string, string | number> = {};

  if (tabBoundingBox !== null && wrapperBoundingBox !== null) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 0.6 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <motion.div
      ref={wrapperRef}
      onMouseLeave={resetHighlight}
      className="relative flex rounded-lg border border-neutral-200 bg-white/70 p-1 shadow-md backdrop-blur-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Highlighter */}
      <div
        ref={highlightRef}
        style={highlightStyles}
        className="absolute left-0 -z-10 h-7 rounded bg-neutral-200 backdrop-blur transition-[width,transform,opacity]"
      />
      {tabs.map((tab) => (
        <NavTab
          key={tab.label}
          path={tab.path}
          onMouseOver={(ev) => repositionHighlight(ev, tab)}
        >
          {tab.label}
        </NavTab>
      ))}
    </motion.div>
  );
}
