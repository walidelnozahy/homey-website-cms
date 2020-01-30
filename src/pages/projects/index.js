import React, {useState} from 'react'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Listings from '../../components/Listings/Listings'




const ProjectsIndexPage = () => {
  const { t } = useTranslation();
  const Header = styled.div`
    height: 300px;
    background-position: center;
    background-size: cover;
    background-image: url("https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571475728/background-blue.jpg");
    display: flex;

  `
  const Title = styled.h1`
    margin: auto;
    color: #fff;
    text-align: center;
    font-size: 100px;
  `
  return (
    <Layout>
      <Header >
        {/* <Title>{t('our projects')}</Title> */}
      </Header>
      
      <Listings />
    </Layout>
  )
}
export default ProjectsIndexPage

