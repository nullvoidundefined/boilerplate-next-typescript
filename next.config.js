/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            dns: false,
            fs: false,
            net: false,
            path: false,
            "pg-native": false,
            tls: false,
        };

        return config;
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
