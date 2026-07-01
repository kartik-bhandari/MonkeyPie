import express  from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/').get((req,res) => {
    res.send("Hello from Pollinations.ai!")
})

router.route('/').post(async(req,res)=>{
    try {
        const { prompt } = req.body;
        
        // Pollinations.ai offers a free, keyless GET endpoint for image generation
        const promptEncoded = encodeURIComponent(prompt);
        const endpoint = `https://image.pollinations.ai/prompt/${promptEncoded}`;
        
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`Pollinations API Error: ${response.statusText}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const base64Image = Buffer.from(arrayBuffer).toString('base64');

        res.status(200).json({ photo: base64Image });

    } catch (error) {
        console.error(error);
        res.status(500).send(error?.message || 'Something went wrong');
    }
})

export default router;
