import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { MdOutlineEditCalendar } from "react-icons/md";

const FormArticle = ({ formData, formInputHandler, addArticleHandler }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control
          value={formData.title}
          name="title"
          onChange={formInputHandler}
          type="text"
          placeholder="عنوان مقاله را وارد کنید"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> توضیح کوتاه</Form.Label>
        <Form.Control
          type="text"
          value={formData.desc}
          name="desc"
          onChange={formInputHandler}
          placeholder="یه توضیح کوتاه درمورد مقاله وارد کنید"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> نویسنده مقاله </Form.Label>
        <Form.Control
          type="text"
          name="writter"
          value={formData.writter}
          onChange={formInputHandler}
          placeholder="نام نویسنده مقاله را وارد کنید"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> موضوع مقاله </Form.Label>
        <Form.Control
          name="category"
          value={formData.category}
          onChange={formInputHandler}
          type="text"
          placeholder="موضوع مقاله را وارد کنید"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> عکس مقاله </Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={formData.image}
          onChange={formInputHandler}
          placeholder="آدرس عکس مقاله را وارد کنید"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> مدت زمان خواندن</Form.Label>
        <Form.Control
          name="readingTime"
          value={formData.readingTime}
          onChange={formInputHandler}
          type="number"
          placeholder=""
        />
      </Form.Group>
      {currentPath === "/add-article" ? (
        <Button onClick={addArticleHandler} variant="primary" type="button">
          ساخت مقاله
        </Button>
      ) : (
        <Button onClick={addArticleHandler} variant="success" type="button">
         <MdOutlineEditCalendar size="25px" />  ویرایش مقاله
        </Button>
      )}
    </Form>
  );
};

export default FormArticle;
