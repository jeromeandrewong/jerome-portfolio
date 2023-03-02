import classNames from 'classnames';
import { motion } from 'framer-motion';

import useScrollPosition from '@/lib/hooks/useScrollPosition';

import { NavLink } from './NavLink';
import { NavTabGroup } from './NavTabGroup';

export function Navbar() {
  const scrollPosition = useScrollPosition();

  return (
    <nav className="sticky top-0 isolate z-10 flex items-center justify-center py-4 px-1 md:justify-between">
      <NavTabGroup />

      <motion.div
        className={classNames(
          'hidden md:flex',
          'transition-opacity',
          scrollPosition > 20 && 'pointer-events-none !opacity-0'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <NavLink href="https://github.com/jeromeandrewong">GitHub</NavLink>
        <NavLink href="https://medium.com/@jeromeandrewong">Medium</NavLink>
        <NavLink href="">CV</NavLink>
      </motion.div>
    </nav>
  );
}
