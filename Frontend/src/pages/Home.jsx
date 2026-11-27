
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Learning Web Development",
    description: "Learn HTML, CSS and JavaScript step by step.",
    author: "Rahul Sharma",
    date: "November 24, 2026"
  },
  {
    id: 2,
    title: "Importance of Education",
    description: "Education helps us learn new skills and improve our knowledge.",
    author: "Ananya Verma",
    date: "November 22, 2026"
  },
  {
    id: 3,
    title: "My Coding Journey",
    description: "My experience of starting a journey in programming.",
    author: "Priya Singh",
    date: "November 20, 2026"
  }
];

function Home() {
  return (
    <>
      <div className="home-container">

        <div className="home-heading">
          <h1>Discover Amazing Stories</h1>
          <p>Read blogs and explore new ideas from different writers.</p>
        </div>

        <div className="blog-list">

          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>

              <h2>{blog.title}</h2>

              <p>{blog.description}</p>

              <div className="blog-info">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More →
              </Link>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Home;
