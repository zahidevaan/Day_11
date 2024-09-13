
const blogs = [
  {
    blogId: "01",
    title: "This is the blog id one",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe totam beatae illo aliquid at inventore id assumenda, amet tenetur. Illo.",
    img: "/src."
  },
  {
    blogId: "02",
    title: "This is the blog id two",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe totam beatae illo aliquid at inventore id assumenda, amet tenetur. Illo."
  },
  {
    blogId: "03",
    title: "This is the blog id three",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe totam beatae illo aliquid at inventore id assumenda, amet tenetur. Illo."
  },
  {
    blogId: "04",
    title: "This is the blog id four",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe totam beatae illo aliquid at inventore id assumenda, amet tenetur. Illo."
  },
  {
    blogId: "05",
    title: "This is the blog id five",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe totam beatae illo aliquid at inventore id assumenda, amet tenetur. Illo."
  },
  {
    blogId: "06",
    title: "This is the blog id six",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe totam beatae illo aliquid at inventore id assumenda, amet tenetur. Illo."
  }
]

function Blogs() {
  return (
    <>
      <h2 className="text-xl font-bold capitalize w-full py-3 mt-12">Disply Blogs Dynamicaly form a Blogs Array with React </h2>
    <div className="blogs flex flex-col gap-3 py-12 md:flex-row">
      {blogs.map((blog) => (
        <div className="single-blgo bg-green-200 p-6 rounded-md" key={blog.blogId}>
        <h2 className="text-3xl font-semibold py-2">{blog.title} </h2>
        <h3 className="text-xl font-medium">Blog Id: {blog.blogId} </h3>
        <p>{blog.desc} </p>
      </div>
    ))}
    </div>
    </>
  )
}

export default Blogs