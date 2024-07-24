export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://media.licdn.com/dms/image/D5603AQG15rhY5hxO6w/profile-displayphoto-shrink_800_800/0/1713254902520?e=1727308800&v=beta&t=xZ-LBsbUUW0fEKlhPBl3Off7acgLtBCUEZJTC8um9RQ"
          alt="myImage"
        />
      </a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          Hello i am Full Stack Developer
        </h5>

        <div className="flex items-center justify-center mt-5">
          <a
            href="https://www.linkedin.com/in/vaishnav-kumbhar-1269a3236/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bxamt9Z9bSMuBIUFtn8BpBg%3D%3D"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Follow Me On Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
