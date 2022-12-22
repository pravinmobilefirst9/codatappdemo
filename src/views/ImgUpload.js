import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImgUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fileUpload", selectedFile);
    formData.append("company_name", "jaydeep");
    formData.append("company_id", "12345678900");

    try {
      const response = await axios({
        method: "post",
        url: "http://codatquickbook.betabularasa.com/company_image_upload.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(`Image upload done..!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="max-w-2xl px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex items-center justify-center flex-col">
        <div className="px-10 pb-10">
          <form
            className="flex items-center justify-center flex-col"
            onSubmit={handleSubmit}
          >
            <input
              className="ml-20 p-4 mt-10"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
            />
            {file && (
              <div className="flex items-center justify-center flex-col mt-10">
                <p className="mb-2">Logo Preview : </p>
                <div className="w-40 h-40">
                  <img className="object-cover" src={file} alt="imgprivew" />
                </div>
              </div>
            )}
            <input
              type="submit"
              value="Upload File"
              disabled={file ? false : true}
              className={`${
                file ? "cursor-pointer hover:bg-purple-700" : ""
              }px-10 p-4 m-5 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 focus:outline-none focus:shadow-outline-purple`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImgUpload;
