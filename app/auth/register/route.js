import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    
    try {
      const user = await prisma.user.create({
        data: { email, password: hashedPassword },
      });
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error registering user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
