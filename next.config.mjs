/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'www.pexel.com',
            }
        ]
    }
};

export default nextConfig;
