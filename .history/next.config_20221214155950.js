/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports ={
  
  nextConfig,
  Cloudinary:`loader: 'cloudinary'`,
  images: {
		domains: ['cdn.sanity.io'],
		loader: 'Cloudinary'
	}
}

 

