/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'i.pinimg.com',
                port : '',
                pathname : '/564x/d9/bc/1a/**'
            }
        ]
    }
};


export default nextConfig;
