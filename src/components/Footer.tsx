export default function Footer() {
  return (
    <footer className=" text-xl text-center p-2 mt-6">
      <p>
        Made With{" "}
        <i
          className="fas fa-heart text-red-500 mr-2 animate-pulse"
          aria-hidden="true"
        ></i>
        By Prasad Shinde
      </p>
      <p className=" text-sm ">
        Theme inspired from{" "}
        <a
          href="https://github.com/saadpasta/developerFolio"
          target="_blank"
          className=" underline text-purple-primary dark:text-white"
        >
          developerFolio
        </a>
      </p>
    </footer>
  );
}
