type props = {
  children: string | JSX.Element | JSX.Element[];
  extra: string;
};
function Card({ extra, children, ...rest }: props) {
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-zinc-100 bg-clip-border shadow-3xl shadow-shadow-500 dark:bg-zinc-500 dark:shadow-none ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
