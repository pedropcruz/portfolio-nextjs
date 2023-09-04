/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: false,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/en',
				permanent: true,
			},
		]
	}
}
