import React from 'react'
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import PropTypes from "prop-types";
import Paper from '../Paper/Paper'
//import data from '../../data/university.json'
import { Actions, Name, OrganizationType, Image } from './Card.styles'

function Card({name}) {
    //const {name} = data;
    return (
        <Paper gap={32}>
            <Image src="./images/logo.png" alt="logo" />
            <OrganizationType>университет</OrganizationType>
            <Name>{name}</Name>
            <Actions>
                <HiPencilAlt size={24} />
                <HiTrash size={24} />
            </Actions>
        </Paper>
    )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card
