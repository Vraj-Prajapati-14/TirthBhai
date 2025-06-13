import express from "express";
import Blog from "../models/blog.js";

const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// Create a new blog
router.post("/", async (req, res) => {
  try {
    const { title, topic, summary, content } = req.body;

    if (!title || !topic || !summary || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newBlog = new Blog({
      title,
      topic,
      summary,
      content,
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// Delete a blog by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

export default router;