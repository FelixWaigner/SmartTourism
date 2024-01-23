import fsPromises from 'fs/promises';
import path from 'path';
import data from '@/app/data/business-data.json'

// make an api endpoint for uploading files in nextjs
export async function POST(request: Request) {
  // get data from request body
  const newData = await request.json();
  data.push(newData);
  const filePath = path.join(process.cwd(), "src", "app", "data", "business-data.json");
  await fsPromises.writeFile(filePath, JSON.stringify(data, null, 2))
  return Response.json({ success: true })


  // const { parseDat, error } = await getDocument("users", "Wzlm9FkCFS3DPv7LEg2n");
  // const result = parseDat; // Assign the value of parseDat to result
  // return Response.json({ data: result })
}

