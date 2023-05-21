import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  return NextResponse.redirect(redirectURL, {
    headers: {
      'set-cookie': `token=; Path=/; max-age=0`,
    },
  })
}
