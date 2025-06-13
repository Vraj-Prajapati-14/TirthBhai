import React, { useState, useEffect } from "react";
import { AdminLayout } from "../../components/admin/Layout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Blog {
  _id: string;
  title: string;
  date: string;
  topic: string;
  summary: string;
  content: string;
}

export const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [topics, setTopics] = useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [newBlog, setNewBlog] = useState<Partial<Blog>>({ title: "", topic: "", summary: "", content: "" });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data: Blog[] = await response.json();
      setBlogs(data);
      const uniqueTopics = ["all", ...new Set(data.map((blog) => blog.topic))];
      setTopics(uniqueTopics);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs");
    }
  };

  const handleFilter = () => {
    return blogs.filter((blog) => {
      return (
        (selectedTopic === "all" || blog.topic === selectedTopic) &&
        (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.summary.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  };

  const handleCreateBlog = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      setNewBlog({ title: "", topic: "", summary: "", content: "" });
      fetchBlogs();
      toast.success("Blog created successfully");
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Failed to create blog");
    }
  };

  const handleDeleteBlog = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      fetchBlogs();
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <ToastContainer />
        <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

        {/* Blog Creation Form */}
        <div className="mb-8 p-4 border rounded-lg shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Create New Blog</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Title"
              value={newBlog.title || ""}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              className="p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Topic"
              value={newBlog.topic || ""}
              onChange={(e) => setNewBlog({ ...newBlog, topic: e.target.value })}
              className="p-2 border rounded w-full"
            />
            <textarea
              placeholder="Summary"
              value={newBlog.summary || ""}
              onChange={(e) => setNewBlog({ ...newBlog, summary: e.target.value })}
              className="p-2 border rounded w-full col-span-1 md:col-span-2"
            />
            <textarea
              placeholder="Content"
              value={newBlog.content || ""}
              onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
              className="p-2 border rounded w-full col-span-1 md:col-span-2"
            />
          </div>
          <button
            onClick={handleCreateBlog}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Create Blog
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by title or summary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded w-full md:w-auto"
          />
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="p-2 border rounded"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {handleFilter().map((blog) => (
            <div
              key={blog._id}
              className="p-4 border rounded-lg shadow-md bg-white relative"
            >
              <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{blog.date}</p>
              <p className="text-sm text-gray-700 mb-4">{blog.summary}</p>
              <span className="text-sm font-semibold text-blue-500">{blog.topic}</span>
              <button
                onClick={() => handleDeleteBlog(blog._id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default BlogList;