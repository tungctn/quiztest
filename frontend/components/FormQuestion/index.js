import {
  ExclamationCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Radio, Row, Spin } from "antd";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import style from "./index.module.scss";

const index = ({ item, index }) => {
  return (
    <div key={index}>
      <h1>Question {index + 1}: </h1>
      <Form.Item
        rules={[{ required: true, message: "Please input your answer" }]}>
        {item.question}
      </Form.Item>
      <Row>
        <div className={style.col5}>
          <Form.Item
            rules={[{ required: true, message: "Please input your answer" }]}>
            {item.A}
          </Form.Item>
        </div>
        <div className={style.col1} />
        <div className={style.col5}>
          <Form.Item
            rules={[{ required: true, message: "Please input your answer" }]}>
            {item.B}
          </Form.Item>
        </div>
        <div className={style.col1} />
        <div className={style.col5}>
          <Form.Item
            rules={[{ required: true, message: "Please input your answer" }]}>
            {item.C}
          </Form.Item>
        </div>
        <div className={style.col1} />
        <div className={style.col5}>
          <Form.Item
            rules={[{ required: true, message: "Please input your answer" }]}>
            {item.D}
          </Form.Item>
        </div>
      </Row>
      <Radio.Group
        name="answer"
        id={style.select_anwser}
        defaultValue="A"
        buttonStyle="solid"
        style={{ display: "block" }}
        onChange={(e) => {
          // console.log(item)
          item.answer = e.target.value;
          setDocument([...document]);
        }}>
        <Row>
          <div className={style.col5} style={{ display: "flex" }}>
            <Radio.Button style={{ margin: "0 auto" }} value="A">
              A
            </Radio.Button>
          </div>
          <div className={style.col1} />
          <div className={style.col5} style={{ display: "flex" }}>
            <Radio.Button style={{ margin: "0 auto" }} value="B">
              B
            </Radio.Button>
          </div>
          <div className={style.col1} />
          <div className={style.col5} style={{ display: "flex" }}>
            <Radio.Button style={{ margin: "0 auto" }} value="C">
              C
            </Radio.Button>
          </div>
          <div className={style.col1} />
          <div className={style.col5} style={{ display: "flex" }}>
            <Radio.Button style={{ margin: "0 auto" }} value="D">
              D
            </Radio.Button>
          </div>
        </Row>
      </Radio.Group>
    </div>
  );
};

export default index;
