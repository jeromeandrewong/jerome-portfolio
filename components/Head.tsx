import NextHead from 'next/head';

type HeadProps = {
  title?: string;
  description?: string;
};

export function Head({
  title,
  description = 'Welcome to my digital portfolio where I share more about myself.',
}: HeadProps) {
  return (
    <NextHead>
      <title>
        {typeof title === 'string' ? `Jerome | ${title}` : `Jerome`}
      </title>
      <meta name="description" content={description} key="description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  );
}
