/* eslint-disable no-undef */
// import React from "react";
// import Button from "../Button/Button";
// import { Container, Box, Img, Title } from "./Departments.styled";
// import DepartmentsList from "../Departments/DepartmentsList/DepartmentsList";
// import src from "./img/robot.png";

// function Departments() {
//   return (
//     <Container>
//       <Box>
//         <Img src={src} alt="cat" />
//         <Title>Факультет</Title>
//       </Box>
//       <DepartmentsList />
//       <Button text={"Добавить факультет"} />
//     </Container>
//   );
// }

// export default Departments;

import React, { Component } from "react";
import Button from "../Button/Button";
import { Container, Box, Img, Title } from "./Departments.styled";
import DepartmentsList from "../Departments/DepartmentsList/DepartmentsList";
import data from "../../data/university.json";
import Form from "../Form/Form";
import src from "./img/robot.png";

export default class Departments extends Component {

    state = {
    isShow: false,
    departments: data.department,
    inputValue: '',
    };
  
    handlerClick = () => {
    this.setState((prevState) => ({
       isShow: !prevState.isShow,
     }));
    };
  
  handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
       //console.log('value', value, name)
    this.setState({
      inputValue: value,
      name: name,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state)
    const { inputValue } = this.state
    // console.log(inputValue)
    e.preventDefault();
    this.setState((prev) => ({
      departments: [...prev.departments, { name: inputValue }],
      inputValue:'',
      isShow: false,
    }));
  };
  render() {
    return (
      <Container>
       <Box>
         <Img src={src} alt="cat" />
         <Title>Факультет</Title>
       </Box>
        <DepartmentsList department={this.state.departments}/>
        <Button
          text={this.state.isShow ? "Закрть форму" : "Добавить факультет"}
          onClick={this.handlerClick}
        />
        {this.state.isShow &&
          <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            name='name'
            //  onChange={()=>console.log("change")}
            onChange={this.handleChange}
          />
          </Form>
        }
     </Container>
    )
  }
}
