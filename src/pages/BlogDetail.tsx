import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { blogs } from "../content/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h1 className="text-center text-2xl mt-10">Blog not found</h1>;
  }

  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-200 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <div className="flex items-center text-gray-200 mt-2">
            <User className="h-4 w-4 mr-1" />
            {blog.author} &nbsp; | &nbsp;
            <Calendar className="h-4 w-4 mr-1" />
            {blog.date}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <img loading="lazy" src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg mb-6" />
        {/* <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p> */}
        <div className="prose text-lg text-style-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }} />

        {/* Back to Blog Button */}
        <div className="mt-8">
          <Link to="/blog" className="text-brand-200 font-semibold hover:text-brand-300 inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;