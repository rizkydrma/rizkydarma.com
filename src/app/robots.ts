export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://rizkydarma.com/sitemap.xml',
    host: 'https://rizkydarma.com',
  };
}
