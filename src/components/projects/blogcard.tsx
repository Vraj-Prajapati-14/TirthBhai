import React from "react";

type BlogCardProps = {
  title: string;
  date: string;
  topic: string;
  summary: string;
  onReadMore: () => void;
};

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  topic,
  summary,
  onReadMore,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="text-blue-600 text-sm mb-2">Topic: {topic}</p>
      <p className="text-gray-700">{summary}</p>
      <button
        className="mt-4 text-blue-500 hover:underline"
        onClick={onReadMore}
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard;