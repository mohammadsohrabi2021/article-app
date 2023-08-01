import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import Navbar from "../../components/navbar/MyNavbar";
import "./Home.css";
const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => setArticles(response.data));
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          {articles.map((article) => (
            <Col key={article.id}>
              <ArticleItem {...article}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
