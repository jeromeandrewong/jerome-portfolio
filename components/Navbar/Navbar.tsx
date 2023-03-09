import classNames from 'classnames';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import useScrollPosition from '@/lib/hooks/useScrollPosition';

import { NavLink } from './NavLink';
import { NavTabGroup } from './NavTabGroup';

export function Navbar() {
  const scrollPosition = useScrollPosition();
  const [darkmode, setDarkmode] = useState(false);

  return (
    <nav className="sticky top-0 isolate z-10 flex items-center justify-center py-4 px-1 sm:justify-between">
      <NavTabGroup />

      <motion.div
        className={classNames(
          'hidden sm:flex',
          'transition-opacity',
          scrollPosition > 20 && 'pointer-events-none !opacity-0'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <div
          className="cursor-alias text-zinc-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove('dark');
              setDarkmode(false);
            } else {
              document.body.classList.add('dark');
              setDarkmode(true);
            }
          }}
        >
          <div
            className="rounded py-1 px-2 h-full flex justify-center items-center
          "
          >
            {darkmode ? (
              <RiSunFill className="h-4 w-4 text-zinc-600 " />
            ) : (
              <RiMoonFill className="h-4 w-4 text-zinc-600 " />
            )}
          </div>
        </div>
        <NavLink href="https://github.com/jeromeandrewong">GitHub</NavLink>
        <NavLink href="https://medium.com/@jeromeandrewong">Medium</NavLink>
        <NavLink href="">CV</NavLink>
      </motion.div>
    </nav>
  );
}
