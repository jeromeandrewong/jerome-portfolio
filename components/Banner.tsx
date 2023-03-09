import Card from '../components/Card';
import Image from 'next/image';
import banner from '../public/banner2.png';
import avatar from '../public/avatar.jpeg';
import medium from '../public/medium-icon.svg';
import github from '../public/github.svg';
import linkedin from '../public/linkedin-icon.svg';
import Link from 'next/link';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import useScrollPosition from '@/lib/hooks/useScrollPosition';

const Banner = () => {
  const scrollPosition = useScrollPosition();

  return (
    <motion.div
      className={classNames(
        'flex',
        'transition-opacity',
        scrollPosition > 20 && 'pointer-events-none !opacity-0'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <Card extra={'items-center w-full h-full p-[16px] bg-cover'}>
        {/* Background and profile */}
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={{ backgroundImage: `url(${banner.src})` }}
        >
          <div className="absolute -bottom-12 flex h-32 w-32 items-center justify-center rounded-full border-[4px] border-zinc-50 dark:border-zinc-500">
            <Image
              className="h-full w-full rounded-full"
              src={avatar}
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Name and position */}
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
            Jerome Andre Wong
          </h4>
          <p className="text-base font-normal text-neutral-400 dark:text-neutral-300">
            Aspiring Software Engineer
          </p>
        </div>

        {/* socials */}
        <div className="mt-6 mb-3 flex gap-2 md:gap-6">
          <div className="flex flex-col items-center justify-center">
            {/* <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p> */}
            <Link
              className={classNames(
                ' rounded-xl p-1 text-sm text-neutral-400',
                // State: hover
                'cursor-alias transition-colors hover:text-neutral-900 hover:bg-zinc-200 dark:hover:bg-zinc-400'
              )}
              target="_blank"
              href="https://github.com/jeromeandrewong"
            >
              <div className="h-12 w-12 rounded-xl flex justify-center">
                <Image src={github} alt="" height={32} width={32} />
              </div>
            </Link>
            {/* <p className="text-sm font-normal text-zinc-600">Github</p> */}
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              className={classNames(
                ' rounded-xl p-1 text-sm text-neutral-400',
                // State: hover
                'cursor-alias transition-colors hover:text-neutral-900 hover:bg-zinc-200 dark:hover:bg-zinc-400'
              )}
              target="_blank"
              href="https://medium.com/@jeromeandrewong"
            >
              <div className="h-12 w-12 rounded-xl flex justify-center">
                <Image src={medium} height={32} width={32} alt="" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              className={classNames(
                ' rounded-xl p-1 text-sm text-neutral-400',
                // State: hover
                'cursor-alias transition-colors hover:text-neutral-900 hover:bg-zinc-200 dark:hover:bg-zinc-400'
              )}
              target="_blank"
              href="https://www.linkedin.com/in/jeromeandrewong/"
            >
              <div className="h-12 w-12 rounded-xl flex justify-center">
                <Image src={linkedin} height={32} width={32} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Banner;
