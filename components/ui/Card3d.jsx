import Link from "next/link"
export default function Card3d(props) {
    return (
        <>
        <div className="group relative  h-92 w-72 [perspective:1000px]">
          <div
            className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] hover:[transform:rotateX(180deg)]"
          >
            <div
              className="absolute w-full h-full rounded-3xl bg-neutral  p-6 text-white [backface-visibility:hidden]"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start">
                  <div className="text-3xl font-bold">{props.card}</div>
                  <div className="text-5xl">🌟</div>
                </div>
                <div className="mt-4 flex flex-col md:h-auto h-full justify-end">
                  <p className="text-lg">
                    {props.dis}
                  </p>
                  <button
                    className="px-4 py-2 md:hidden block bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    <Link href="/user/Courses">{props.btn}</Link>
                    
                  </button>
                </div>
                <div className="mt-auto">
                  <p className="text-sm opacity-75">{props.hover}</p>
                </div>
              </div>
            </div>
        
            <div
              className="absolute w-full h-full rounded-xl bg-muted-foreground p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]"
            >
              <div className="flex flex-col h-full">
                <div className="text-2xl font-bold mb-4">{props.back}</div>
                <div className="flex-grow">
                  <p className="text-lg">
                   {props.backdis}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <button
                    className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    <Link href="/user/Courses">{props.btn}</Link>
                    
                  </button>
                  <span className="text-3xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}