import { writeFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const file = req.body.video;
    const videoPath = path.join(process.cwd(), 'public/videos', file.name);

    try {
      await writeFile(videoPath, file.data);
      res.status(200).json({ message: 'Video uploaded successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error uploading video', error });
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}
