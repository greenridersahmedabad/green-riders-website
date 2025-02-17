import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      title: "10 Tips for Eco-Friendly Cycling",
      excerpt: "Discover how to make your cycling journey more environmentally conscious with these practical tips.",
      image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Alex Thompson",
      date: "March 1, 2024",
      category: "Tips & Tricks"
    },
    {
      title: "Our Latest Mountain Trail Adventure",
      excerpt: "Join us as we recount our exciting journey through the challenging mountain trails last weekend.",
      image: "https://images.unsplash.com/photo-1544191696-102ad421359b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Sarah Chen",
      date: "February 28, 2024",
      category: "Adventure"
    },
    {
      title: "Beginner's Guide to Group Riding",
      excerpt: "Everything you need to know about joining and enjoying group cycling events safely.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Marcus Rodriguez",
      date: "February 25, 2024",
      category: "Guides"
    }
  ];

  const categories = [
    "All Posts",
    "Adventure",
    "Tips & Tricks",
    "Guides",
    "Events",
    "Community"
  ];

  return (
    <div className="bg-brand-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-200 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Green Riders Blog</h1>
          <p className="text-xl">Stories, tips, and adventures from our cycling community</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid gap-8">
              {blogs.map((blog, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <span className="text-brand-200 text-sm font-semibold">{blog.category}</span>
                      <h2 className="text-xl font-bold mt-2 mb-4">{blog.title}</h2>
                      <p className="text-gray-600 mb-4">{blog.excerpt}</p>
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
                      <button className="text-brand-200 font-semibold hover:text-brand-300 inline-flex items-center">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
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
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4">Get the latest updates from our cycling community!</p>
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