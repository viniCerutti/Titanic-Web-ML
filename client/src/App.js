import React, { useState } from 'react';
import { Form, InputNumber, Button, Radio, Row, Col } from 'antd';
import { Text,Linking  } from "react-native";
import "antd/dist/antd.css";
import './App.css';

function App() {

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

   const onFinish = values => {
    fetch("https://titanic-web-ml.herokuapp.com/predict", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values.passager)
        }
    ).then(response => {return response.json()})
    .then(json => {setResult(json)})
  };

  const [result, setResult] = useState({});
  const pclass = [1,2,3]
  const embarked = ["C","Q","S"]
  const percentage = result.percentage * 100
  const textPercentage = Object.keys(result).length === 0 ? "": `${result.value} with ${percentage.toFixed(2)} %`

  return (
    <div className="page-container">
      <div className="container content-wrap">
      <Row className="title">
      Titanic Survivors
      </Row>
      <Row>
      <Col xs={24} xl={12}>
      <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        
        <Row>
        <Form.Item name={['passager','pclass']}
          label='P-class'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            {pclass.map((c,index) => (<Radio key={index} value={c}>{c}st Ticket class</Radio>))}
          </Radio.Group>
        </Form.Item>
        </Row>
        <Row>
          <Col span={12}>
          <Form.Item
            name={['passager', 'fare']}
            label="Fare"
            rules={[
              {
                required: true,
                type: 'number',
                min: 0,
                max: 513.000,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          </Col>
          <Col span={12}>
           <Form.Item
            name={['passager', 'age']}
            label="Age"
            rules={[
              {
                required: true,
                type: 'number',
                min: 0,
                max: 80,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          </Col>
        </Row>


        <Row>
        <Col span={12}>
        <Form.Item
          name={['passager', 'sibsp']}
          label="Sibps"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
              max: 8,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        </Col>
        <Col span={12}>
         <Form.Item
          name={['passager', 'parch']}
          label="Parch"
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
              max: 6,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        </Col>
        </Row>

        <Row>
        <Col span={12}>

        <Form.Item name={['passager','sex']}
          label="Sex"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio value="female">Female</Radio>
            <Radio value="male">Male</Radio>
          </Radio.Group>
        </Form.Item>


        </Col>
        <Col span={12}>

        <Form.Item name={['passager','embarked']}
          label='Embarked'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            {embarked.map((e,index) => (<Radio key={index} value={e}>{e}</Radio>))}
          </Radio.Group>
        </Form.Item>

        </Col>
        </Row>
        <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6
            }}
          >
         <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Col>
      <Col className="answer" xs={24} xl={12}>
      Would you survive? {textPercentage}
      </Col>
      </Row>
      <Row className="legend">
        <Text>
        <h5>About:</h5>
          This is a the <a href="https://www.kaggle.com/c/titanic" target="_blank">titanic disaster</a> solution. Its purpose is to predict whether a passenger will be able to survive the disaster
        </Text>
        <Text>
          <h5>Form description:</h5>
          <ul>
            <li>Pclass - Ticket class (A proxy for socio-economic status) 1 = Upper, 2=Middle, 3=Lower</li>
            <li>Fare - Ticket value</li>
            <li>Age - Age in years </li>
            <li>Sibps - Number of siblings / spouses aboard the Titanic </li>
            <li>Parch - Number of parents / children aboard the Titanic </li>
            <li>Sex - Sex </li>
            <li>Embarked - Port of Embarkation C = Cherbourg, Q = Queenstown, S = Southampton</li>
          </ul>
        </Text>
        <Text><h5>Algorithm:</h5>
        Logistic regression was used as predictor with an 80% accuracy.
        </Text>
      </Row>
      </div>
      <footer className="footer">
      Create By - <a href="https://github.com/viniCerutti" target="_blank"> Vinicius Cerutti </a>
      </footer>
    </div>
  );
}

export default App;
