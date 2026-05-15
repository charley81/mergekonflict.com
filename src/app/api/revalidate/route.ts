import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = { _type: string }

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        'Missing environment variable SANITY_REVALIDATE_SECRET',
        { status: 500 },
      )
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true, // wait for Content Lake propagation (important — prevents stale data)
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 })
    }

    revalidateTag(body._type, 'max')

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
    })
  } catch (err: unknown) {
    console.error(err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    return new Response(message, { status: 500 })
  }
}
