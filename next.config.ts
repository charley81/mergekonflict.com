import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  transpilePackages: ['@payloadcms/next', 'payload', 'react-image-crop'],
  experimental: {
    reactCompiler: false,
  },
  serverExternalPackages: [
    'drizzle-kit',
    'drizzle-orm',
    'pg',
    'esbuild',
    '@libsql/linux-x64-gnu',
    '@libsql/linux-arm64-gnu',
    '@libsql/darwin-x64',
    '@libsql/darwin-arm64',
  ],
}

const config = withPayload(nextConfig)

// Next.js 16+ with Turbopack and Payload 3.0 CSS handling:
// Ensure Payload packages are NOT external so Next.js bundles their CSS
if (config.serverExternalPackages) {
  config.serverExternalPackages = config.serverExternalPackages.filter(
    (p) => !p.startsWith('@payloadcms/next') && p !== 'payload'
  )
}

export default config
