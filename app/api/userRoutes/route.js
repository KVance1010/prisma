import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json(data);
}
export async function GET(request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json(data);
}
export async function PUT(request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json(data);
}
export async function DELETE(request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json(data);
}