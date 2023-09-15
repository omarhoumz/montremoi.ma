const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { experimental: { mdxRs: true } }

const withMDX = require('@next/mdx')()
module.exports = withMDX(withContentlayer(nextConfig))
