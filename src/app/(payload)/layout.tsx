import config from '@/payload.config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from './admin/importMap'
import '@payloadcms/next/css'
import './custom.css'
import type { ServerFunctionClient } from 'payload'

export const metadata = {
  title: 'Payload Admin',
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={serverFunction}
    htmlProps={{ suppressHydrationWarning: true }}
  >
    <div className="payload">{children}</div>
  </RootLayout>
)

export default Layout
