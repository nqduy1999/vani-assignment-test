/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const nextConfig = withImages({
    images: {
        dangerouslyAllowSVG: true,
    },
})

module.exports = nextConfig
