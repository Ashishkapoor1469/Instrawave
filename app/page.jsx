export default function Home() {
  return (
    <>
   <main className="min-w-screen h-auto flex justify-center bg-gradient-to-l from-gray-700 via-blue-400 to-red-400">
   <div className="hero min-h-screen md:w-9/12">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.pinimg.com/736x/55/5a/6c/555a6cbae422bb75d0e4d90e506dede8.jpg"
      className="max-w-sm rounded-lg w-full h-120 shadow-2xl" />
    <div>
      <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold md:px-4">Computer Science Courses and Programs for students</h1>
      <p className="py-6 md:px-4">
      Whether you're interested in pursuing a career in computer science or simply want to better understand the technology we use every day, INTRAWAVE courses can help. Learn the fundamentals, specific programming languages, and more on EDUVIBE.
      </p>
      <button className="btn btn-primary md:mx-4 hover:bg-neutral-300 transition-all duration-700 hover:scale-105 hover:translate-x-1.5">Get Started</button>
    </div>
  </div>
</div>
   </main>
  <main className="min-h-screen min-w-screen">

  </main>
    </>
  );
}
