export default function Project() {
  return (
    <a
      className="project  shadow-md p-3 my-4 hover:shadow-lg block "
      href="#"
      target="_blank"
    >
      <div className="">
        <i className="fa-solid fa-book  text-xl text-purple-primary"></i>

        <h3 className=" text-2xl inline ml-4">Developer Folio</h3>
      </div>
      <div className="info mt-4 line-clamp-2 text-gray-700">
        <span className="text-orange-600 text-xl mr-2">
          <i className="fa-solid fa-fire "></i>
        </span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        perferendis dicta tenetur veniam saepe enim qui, harum vel fugit beatae?
      </div>
      <div className="mt-4 flex items-center justify-between flex-wrap">
        <div className="flex items-center justify-between text-gray-700">
          <div className=" flex items-center justify-between mr-4">
            <div className=" h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
            <span>Javascript</span>
          </div>
          <div className="flex items-center justify-between mr-4">
            <span className=" mr-2">
              <i className="fa-solid fa-code-fork"></i>
            </span>
            <span className="">181</span>
          </div>
          <div className="flex items-center justify-between mr-4">
            <span className=" text-yellow-400 mr-2">
              <i className="fa-solid fa-star"></i>
            </span>
            <span>21</span>
          </div>
        </div>
        <div className="">
          <span>25MB</span>
        </div>
      </div>
    </a>
  );
}
