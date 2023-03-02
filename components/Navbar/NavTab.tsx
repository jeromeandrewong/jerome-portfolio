import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

type NavTabProps = {
  path: string;
  children: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function NavTab(props: NavTabProps) {
  const { path, children, ...anchorProps } = props;
  const router = useRouter();

  return (
    <Link
      href={path}
      className={classNames(
        "rounded py-1 px-2 text-sm transition-colors",
        // State: focus
        "focus-visible:ring-4 focus-visible:ring-blue-200",
        "focus:text-neutral-900",
        // State: hover
        "hover:text-neutral-900 ",
        router.asPath === path ? "text-neutral-900" : "text-neutral-400"
      )}
      {...anchorProps}
    >
      {children}
    </Link>
  );
}
