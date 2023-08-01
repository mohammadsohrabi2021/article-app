import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Article.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { BsPencilSquare } from "react-icons/bs";
import { BiTimeFive, BiCategoryAlt } from "react-icons/bi";
import { MdDelete, MdOutlineEditCalendar } from "react-icons/md";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";
const Article = () => {
  const articleId = useParams().articleId;
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);
  const deleteHandler = (id) => {
    Swal.fire({
      title: "مطمئنی میخوای مقاله رو حذف کنی؟",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "آره حذفش کن",
      cancelButtonText: "نه حذفش نکن",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "مقاله با موفقیت حذف شد",
          icon: "success",
        });
        axios.delete(`http://localhost:5000/articles/${id}`);
        navigate("/");
      }
    });
  };
  const editArticleHandler = (id) => {
    navigate(`/edit-article/${id}`);
  };
  return (
    <>
      <MyNavbar />
      <Container>
        <Row style={{ marginTop: "70px" }}>
          <Col lg={4}>
            <div className="articleCardContainer">
              <div className="cardHeader">
                <img src={articleData.image} alt={articleData.title} />
                <h4>{articleData.title}</h4>
              </div>
              <div className="cardBody">
                <p>
                  <BsPencilSquare size={"20px"} />
                  نویسنده : <b>{articleData.writter}</b>
                </p>
                <p>
                  <BiTimeFive size={"20px"} />
                  مدت زمان : <b>{articleData.readingTime} دقیقه</b>
                </p>
                <p>
                  <BiCategoryAlt size={"20px"} />
                  دسته بندی : <b>{articleData.category}</b>
                </p>
              </div>
              <div className="cardFooter">
                <Button
                  variant="outline-danger"
                  onClick={() => deleteHandler(articleId)}
                >
                  <MdDelete size="25px" />
                  حذف مقاله
                </Button>
                <Button
                  onClick={() => editArticleHandler(articleId)}
                  variant="outline-primary"
                >
                  <MdOutlineEditCalendar size="25px" />
                  ویرایش مقاله
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <p>{articleData.desc}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Article;
