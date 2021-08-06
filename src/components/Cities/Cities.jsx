// import React from "react";
// import Button from "../Button/Button";
// import { Container, Box, Img, Title } from "./Cities.styled";
// import CitiesList from "./CitiesList/CitiesList";
// import src from "./img/pin.png";


// function Cities() {
//   const click = () => {
//     console.log('Hello')
//   };

//   return (
//     <Container>
//       <Box>
//         <Img src={src} alt="cat" />
//         <Title>Города</Title>
//       </Box>
//       <CitiesList />
//       <Button text={"Добавить город"} onClick={click}/>
//       {/* <button onClick={click}>Click me</button> */}
//     </Container>
//   );
// }

// export default Cities;

import React, { Component } from "react";
import Button from "../Button/Button";
import { Container, Box, Img, Title } from "./Cities.styled";
import CitiesList from "./CitiesList/CitiesList";
import data from "../../data/university.json";
import Form from "../Form/Form";
import src from "./img/pin.png";


// export default class Cities extends Component {
//   render() {return (
//       <Container>
//         <Box>
//           <Img src={src} alt="cat" />
//           <Title>Города</Title>
//         </Box>
//         <CitiesList/>
//       <Button text={"Добавить город"} />
//       </Container>
//     );
//   }
// }

export default class Cities extends Component {

  state = {
    isShow: false,
    cities: data.cities,
    inputValue: ''
  };

  // export default class Cities extends Component {
        // constructor() {
        //   super();
        //   this.state = {
        //     isShow: false,
        //   };

  //   this.handlerClick = this.handlerClick.bind(this);
  // }

  // handlerClick() {
  
    // console.log('Hello')
    // this.setState({
    //   isShow: true,
    // });
  
  //   // console.log(this);
  //   this.setState((prevState) => ({
  //     isShow: !prevState.isShow,
  //   }));
  // }

  handlerClick = () => {
    this.setState((prevState) => ({
       isShow: !prevState.isShow,
     }));
  };

    handleChange = ({ target }) => {
      const value = target.value;
      // console.log('value', value)
    this.setState({
      inputValue: value,
    });
  };

  // addCity = () => {
  //   this.setState((prev) => ({
  //     //  cities: [...prev.cities, 'NewYork'],
  //     cities: [...prev.cities, this.state.inputValue]
  //    }))
  // }

  handleSubmit = (e) => {
    const {inputValue}=this.state
    e.preventDefault();
    this.setState((prev) => ({
      cities: [...prev.cities, inputValue], // добовляет елемент в массив городов
      inputValue: "",  //очищает импут
      isShow: false,  // закрывает форму
    }));
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState(({cities}) => ({
  //     cities: [...cities, this.state.inputValue], // добовляет елемент в массив городов
  //     inputValue: "",  //очищает импут
  //     isShow: false,  // закрывает форму
  //   }));
  // };
  render() {

    const { isShow, cities, inputValue} = this.state;

    return (
      <Container>
        <Box>
          <Img src={src} alt="cat" />
          <Title>Города</Title>
        </Box>
        <CitiesList cities={cities} />
        {/* <Button text={"Добавить город"} onClick={this.addCity }/> */}
        <Button
          text={isShow ? "Закрть форму" : "Добавить город"}
          onClick={this.handlerClick} />
        {isShow && 
          <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            name='city'
            // onChange={()=>console.log("change")}
            onChange={this.handleChange}
          />
        </Form>
             }
      </Container>
    );
  }
}
    
    




  // state = {
  
  //   // isShow: false,
  //   // cities: data.cities,
  //   // inputValue: "",
  // };

  // handlerClick = () => {
  //   this.setState((prevState) => ({
  //     isShow: !prevState.isShow,
  //   }));
  // };





  // inputHandler = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ value: e.targrt.value });
  // };

//   render() {
//   // const { isShow, cities, inputValue } = this.state;
//   const { cities} = this.state;
//     return (
//       <Container>
//         <Box>
//           <Img src={src} alt="cat" />
//           <Title>Города</Title>
//         </Box>
//         <CitiesList cities={cities} />
//         <Button text={"Добавить город"} />
//         {/* {isShow && (
//           <Form onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               value={inputValue}
//               name="city"
//               onChange={this.handleChange}
//             />
//           </Form>
//         )} */}
//       </Container>
//     );
//   }
// }