const BASE = '/mihomo-zzz-';
const IMAGES_DIR = '/images/';

export const resolveImgUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return `${BASE}${url}`;
    return `${BASE}${IMAGES_DIR}${url}`;
};
