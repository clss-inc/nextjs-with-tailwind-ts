const items = [
  {
    href: 'https://nextjs.org',
    title: 'Powered by Next.js',
  },
  {
    href: 'https://clss.cc',
    title: 'Edited by CLSS',
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 flex h-24 w-full items-center justify-center gap-4 border-t">
      {items.map(({ href, title }) => (
        <a
          key={href}
          className="flex items-center justify-center"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ))}
    </footer>
  );
}
