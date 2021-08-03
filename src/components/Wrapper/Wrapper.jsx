
import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";//import Paper from "../Paper/Paper";
import { Container } from "./Wrapper.styles";
const Wrapper = () => {
    return (
        <Container>
            <Sidebar/>
            <Main/>
        {/* <Main>
            <Paper gap='12'>
              <button>Click me</button>  
          </Paper>
        </Main> */}
    </Container>
    );
};

export default Wrapper;