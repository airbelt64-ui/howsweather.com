import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest){
  const form = await req.formData();
  const file = form.get('file') as File | null;
  if (!file) return NextResponse.json({ error: 'no file' }, { status: 400 });
  const buf = Buffer.from(await file.arrayBuffer());
  const base64 = `data:${file.type};base64,` + buf.toString('base64');
  return NextResponse.json({ url: base64 });
}
