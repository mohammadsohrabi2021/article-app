import React, { useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./AddArticle.css";
import axios from "axios";
import Swal from "sweetalert2";
import FormArticle from "../../components/form/FormArticle";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const resetFormData = () => {
    setFormData({
      title: "",
      desc: "",
      image: "",
      writter: "",
      category: "",
      readingTime: "",
    });
  };
  const addArticleHandler = () => {
    axios
      .post("http://localhost:5000/articles", formData)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            title: "مقاله جدید با موفقیت ساخته شد",
            timer: 1500,
            icon: "success",
            timerProgressBar: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "مقاله  ساخته شد",
          timer: 1500,
          icon: "error",
          timerProgressBar: true,
        });
      });
    resetFormData();
    navigate("/");
  };

  const formInputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <FormArticle
          formData={formData}
          formInputHandler={formInputHandler}
          addArticleHandler={addArticleHandler}
        />
      </div>
    </>
  );
};

export default AddArticle;
