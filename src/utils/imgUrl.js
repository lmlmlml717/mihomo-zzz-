const BASE = '/mihomo-zzz-';
const IMAGES_DIR = '/images/';

export const resolveImgUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${BASE}${url}`;
};

export const resolveImagesUrl = (filename) => {
    if (!filename) return '';
    if (filename.startsWith('http')) return filename;
    return `${BASE}${IMAGES_DIR}${filename}`;
};
