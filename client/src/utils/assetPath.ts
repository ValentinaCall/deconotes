export const assetPath = (path: string): string => {
  const base = import.meta.env.PROD ? '/deconotes' : '';
  return `${base}${path}`;
}; 