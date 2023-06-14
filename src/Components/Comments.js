import { useState, useRef, useEffect } from "react";
import AuthenticationService from "../Services/AuthenticationService";

export default function Comments({ id }) {
  const comment = useRef("");
  const ProjectID = localStorage.getItem("ProjectID");
  const UserID = localStorage.getItem("UserID");

  const [allComment, setAllComment] = useState([]);

  function handlePost(event) {
    event.preventDefault();
    var payload = {
      id: Number(ProjectID),
      user_id: Number(UserID),
      description: comment.current.value,
    };
    console.log("commentttt", payload);
    AuthenticationService.postComment(payload)
      .then((response) => {
        console.log(response.data);
        console.log("addeddddd");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    var payload = {
      id: Number(ProjectID),
    };

    AuthenticationService.allComment(payload)
      .then((response) => {
        console.log(response.data);
        setAllComment(response.data);
      })
      .catch((error) => {
        console.log("ERROR" + error.data);
      });
  }, []);

  const handleMenuToggle = (index) => {
    setAllComment((prevState) =>
      prevState.map((comment, i) => {
        if (i === index) {
          return {
            ...comment,
            showMenu: !comment.showMenu,
          };
        }
        return comment;
      })
    );
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
    console.log("Edit comment:", id);
  };

  const handleDelete = (comment_id) => {
    // Handle delete functionality here
    console.log("Delete comment:", comment_id);
   var payload={
    comment_id:comment_id
   }
   console.log("payload...",payload);
   AuthenticationService.deleteComment(payload).then((response) => {
    console.log(response.data);
    setAllComment(response.data);
  }).catch((error) => {
    console.log("ERROR..." + error.data);
  });

  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (5)
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required=""
                ref={comment}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              onClick={handlePost}
            >
              Post comment
            </button>
          </form>
          <div className="h-[24rem] overflow-y-scroll">
            {allComment.map((data, index) => (
              <article
                className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
                key={index}
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough"
                      />
                      {data.author_name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
                        {Date(data.date)}
                      </time>
                    </p>
                  </div>
                  {/* Three-dot menu */}
                  <div className="relative inline-block text-left">
                    <button
                      className="focus:outline-none"
                      onClick={() => handleMenuToggle(index)}
                    >
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 9a2 2 0 114 0 2 2 0 01-4 0zm6 0a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {data.showMenu && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul className="py-1">
                          <li>
                            <button
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={() => handleEdit(data.comment_id)}
                            >
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700"
                              onClick={() => handleDelete(data.comment_id)}
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">{data.description}</p>
                <div className="flex items-center mt-4 space-x-4"></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
