import fsPromises from 'fs/promises';
import path from 'path';
// make an api endpoint for uploading files in nextjs
export const dynamic = 'force-dynamic' 
export async function GET() {
    const filePath = path.join(process.cwd(), "src", "app", "data", "business-data.json");
    const file = await fsPromises.readFile(filePath, 'utf-8')
    const data = JSON.parse(file);
    return Response.json({ data })
}

