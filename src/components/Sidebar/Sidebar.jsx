import React from 'react'
import {Aside, Header, Menu, MenuItem,Text,Footer,FooterMenu,FooterText} from './Sidebar.styles'
// import {HiBookOpen, HiAcademicCap} from 'react-icons/hi'
import { menuConfig,} from '../../utils/menu'
import { HiUserCircle } from "react-icons/hi";

function Sidebar() {
    console.log(menuConfig)
    return (
        <Aside>
            <Header></Header>
            <Menu>
                {menuConfig.map(({name,icon}) => (
                    <MenuItem key={name}>
                        {icon}<Text>{name}</Text>
                    </MenuItem>
                ))}
                {/* {menuConfig.map(configItem => (
                    <MenuItem key={configItem.name}>
                        {configItem.icon}<Text>{configItem.name }</Text>
                    </MenuItem>
                ))} */}
                {/* <MenuItem>
                    <HiBookOpen/>Университет
                </MenuItem>
                <MenuItem>
                <HiAcademicCap/>Факультеты
                </MenuItem> */}
            </Menu>
            <Footer>
                <FooterMenu>
                    <HiUserCircle />
                    <FooterText>
                        Бил Гейтс
                    </FooterText>
                </FooterMenu>
            </Footer>
        </Aside>
    );
}

export default Sidebar
