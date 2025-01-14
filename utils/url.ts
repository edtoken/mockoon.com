/**
 * Transform internal relative links
 *
 * @param docsVersion
 */
export const transformLinkUri = (docsVersion?: string) => (uri: string) => {
  if (uri.includes('docs:') || uri.includes('tutorials:')) {
    const schemeSplit = uri.split(':');
    const pathSplit = schemeSplit[1].split('#');
    let docsSuffix = '';

    if (schemeSplit[0] === 'docs') {
      if (docsVersion) {
        docsSuffix = `/${docsVersion}`;
      } else {
        docsSuffix = '/latest';
      }
    }

    return `/${schemeSplit[0]}${docsSuffix}/${pathSplit[0]}/${
      pathSplit[1] ? '#' + pathSplit[1] : ''
    }`;
  }

  return uri;
};

/**
 * Set target for outgoing links
 *
 * @param uri
 */
export const linkTarget = (uri: string) => {
  if (uri.startsWith('http')) {
    return '_blank';
  }
};
