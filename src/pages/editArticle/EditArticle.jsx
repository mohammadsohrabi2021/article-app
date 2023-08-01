import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import FormArticle from "../../components/form/FormArticle";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./EditArticle.css";
const EditArticle = () => {
  const articleId = useParams().articleId;
  const navigate = useNavigate();
  const [dataEditArticle, setDataEditArticle] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${articleId}`)
      .then((response) => setDataEditArticle(response.data));
  }, []);
  const resetFormData = () => {
    setDataEditArticle({
      title: "",
      desc: "",
      image: "",
      writter: "",
      category:'',
      readingTime: "",
    });
  };
  const editArticleHandler = () => {
    axios
      .put(`http://localhost:5000/articles/${articleId}`, dataEditArticle)
      .then((response) => {
        if (response.status <= 304) {
          Swal.fire({
            title: "مقاله با موفقیت ویرایش شد",
            timer: 1500,
            icon: "success",
            timerProgressBar: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "ویرایش مقاله با خطا مواجعه شد",
          timer: 1500,
          icon: "error",
          timerProgressBar: true,
        });
      });
    resetFormData();
    navigate("/");

  };
  const formInputHandler = (e) => {
    setDataEditArticle({ ...dataEditArticle, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <FormArticle
          formData={dataEditArticle}
          addArticleHandler={editArticleHandler}
          formInputHandler={formInputHandler}
        />
      </div>
    </>
  );
};

export default EditArticle;
