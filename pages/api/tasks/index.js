import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // READ ALL DATA
  if (req.method === 'GET') {
    const tasks = await prisma.tasks.findMany();
    res.json(tasks);
  } 
  // CREATE DATA
  else if (req.method === 'POST') {
    const { title, description } = req.body;
    
    const newTask = await prisma.tasks.create({
      data: {
        title,
        description,
      },
    });

    res.json(newTask);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}