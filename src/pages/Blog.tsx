import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import { blogs } from "../content/blogs";
import { sortingUtility } from "../content/events";

const categories = [
  "All Posts",
  "Adventure",
  "Tips & Tricks",
  "Guides",
  "Events",
  "Community",
];

const Blog = () => {
  const [isDescending, setIsDescending] = useState(true);

  const toggleSortOrder = () => {
    setIsDescending(!isDescending);
  };

  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-200 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Green Riders Blog</h1>
          <p className="text-xl">
            Stories, tips, and adventures from our cycling community
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Sorting Button */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                Blog Posts
                <button
                  onClick={toggleSortOrder}
                  className="ml-2 px-2 py-1 bg-brand-300 text-white rounded-full transition"
                >
                  {isDescending ? (
                    <ArrowDown className="h-5 w-5" />
                  ) : (
                    <ArrowUp className="h-5 w-5" />
                  )}
                </button>
              </h2>
            </div>

            <div className="grid gap-8">
              {sortingUtility(blogs, isDescending).map((blog, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <span className="text-brand-200 text-sm font-semibold">
                        {blog.category}
                      </span>
                      <h2 className="text-xl font-bold mt-2 mb-4">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {blog.highlightText.slice(0, 100)}...
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <div className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {blog.date}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="text-brand-200 font-semibold hover:text-brand-300 inline-flex items-center"
                      >
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="text-gray-600 hover:text-brand-200">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-brand-200 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-4">
                Get the latest updates from our cycling community!
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 border border-white rounded-lg bg-brand-300 placeholder-brand-50 text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full bg-white text-brand-300 px-4 py-2 rounded-lg font-semibold hover:bg-brand-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
