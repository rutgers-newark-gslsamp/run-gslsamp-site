import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
    try {
      const form = formidable();
  
      const data = await new Promise((resolve, reject) => {
        form.uploadDir = "./public/hero";
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

  
      const { image } = data.files; // Extract the 'image' file from the parsed data
  
      if (!image[0]) {
        return res.status(400).json({ error: "No file provided." });
      }
  
      // Check if the file has the originalFilename property
      if (!image[0].originalFilename) {
        console.error("Invalid file name:", image[0]);
        return res.status(400).json({ error: "Invalid file name." });
      }
  
      const oldPath = image[0].filepath;
      const newPath = path.join(process.cwd(), 'public/hero', image[0].originalFilename);
  
      await fs.rename(oldPath, newPath);
  
      res.status(200).json({ url: `/hero/${image[0].originalFilename}` });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ error: "An error occurred while uploading the file." });
    }
  }
  