import classNames from "classnames";

type NavLinkProps = {
  href: string;
  children: string;
};

export function NavLink(props: NavLinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        " rounded py-1 px-2 text-sm text-neutral-400",
        // Text decoration
        "decoration-wavy underline-offset-4",
        // State: focus
        "focus-visible:ring-4 focus-visible:ring-blue-200",
        "focus:text-neutral-900",
        // State: hover
        "cursor-alias transition-colors hover:text-neutral-900 hover:underline"
      )}
    >
      {props.children}
    </a>
  );
}
