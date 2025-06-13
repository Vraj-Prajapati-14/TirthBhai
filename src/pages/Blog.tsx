// import React, { useState, useEffect } from "react";

// interface Blog {
//   _id: string;
//   title: string;
//   date: string;
//   topic: string;
//   summary: string;
//   content: string;
// }

// const BlogViewer: React.FC = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedDateRange, setSelectedDateRange] = useState<string>("latest");
//   const [topics, setTopics] = useState<string[]>([]);
//   const [selectedTopic, setSelectedTopic] = useState<string>("all");

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/blogs");
//       if (!response.ok) {
//         throw new Error("Failed to fetch blogs");
//       }
//       const data: Blog[] = await response.json();
//       setBlogs(data);

//       const uniqueTopics = ["all", ...new Set(data.map((blog) => blog.topic))];
//       setTopics(uniqueTopics);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   const filterBlogs = () => {
//     const today = new Date();

//     return blogs
//       .filter((blog) => {
//         // Filter by topic
//         const matchesTopic =
//           selectedTopic === "all" || blog.topic === selectedTopic;

//         // Filter by search term
//         const matchesSearch =
//           blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           blog.summary.toLowerCase().includes(searchTerm.toLowerCase());

//         // Filter by date range
//         const blogDate = new Date(blog.date);
//         const dateDiff = Math.floor(
//           (today.getTime() - blogDate.getTime()) / (1000 * 60 * 60 * 24)
//         );

//         const matchesDateRange =
//           selectedDateRange === "latest" ||
//           (selectedDateRange === "today" && dateDiff === 0) ||
//           (selectedDateRange === "twoDays" && dateDiff <= 2) ||
//           (selectedDateRange === "fiveDays" && dateDiff <= 5);

//         return matchesTopic && matchesSearch && matchesDateRange;
//       })
//       .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort latest first
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Blogs</h1>

//       {/* Search and Filters */}
//       <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
//         <input
//           type="text"
//           placeholder="Search by title or summary"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="p-2 border rounded w-full md:w-auto"
//         />
//         <select
//           value={selectedTopic}
//           onChange={(e) => setSelectedTopic(e.target.value)}
//           className="p-2 border rounded"
//         >
//           {topics.map((topic) => (
//             <option key={topic} value={topic}>
//               {topic}
//             </option>
//           ))}
//         </select>
//         <select
//           value={selectedDateRange}
//           onChange={(e) => setSelectedDateRange(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="latest">Latest</option>
//           <option value="today">Today</option>
//           <option value="twoDays">Last 2 Days</option>
//           <option value="fiveDays">Last 5 Days</option>
//         </select>
//       </div>

//       {/* Blog List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filterBlogs().map((blog) => (
//           <div
//             key={blog._id}
//             className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
//           >
//             <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
//             <p className="text-sm text-gray-600 mb-2">{new Date(blog.date).toLocaleDateString()}</p>
//             <p className="text-sm text-gray-700 mb-4">{blog.summary}</p>
//             <span className="text-sm font-semibold text-blue-500">{blog.topic}</span>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
//               onClick={() => alert(blog.content)}
//             >
//               Read More
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* No Blogs Found */}
//       {filterBlogs().length === 0 && (
//         <div className="text-center text-gray-600 mt-10">
//           <p>No blogs found for your filters.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogViewer;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Blog {
  _id: string;
  title: string;
  date: string;
  topic: string;
  summary: string;
  content: string;
}

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [topics, setTopics] = useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Discover our latest insights, news, and updates.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section ref={ref} className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <input
              type="text"
              placeholder="Search blogs by title or summary..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 border rounded-lg w-full md:w-1/3"
            />
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="p-3 border rounded-lg w-full md:w-1/4"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handleFilter().map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Published on: {blog.date}
                  </p>
                  <p className="text-gray-700 mb-4">{blog.summary}</p>
                  <span className="text-sm text-blue-500 font-semibold">
                    {blog.topic}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
