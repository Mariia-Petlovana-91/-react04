import { useState, useEffect } from 'react'
import './App.module.css'
import getDataImages from '../../utils/api'
import Section from '../Section/Section'
import SearchBar from '../SearchBar/SearchBar'
import ImageGalery from '../ImageGalery/ImageGalery'

export default function App() {

  const [dataArray, setData] = useState([]);

  function handleSearchSubmit (searchTerm) {
    console.log('Термін пошуку:', searchTerm.search);
    getDataImages(searchTerm.search, 1);


  };
  
  return (
    <>
      <Section>
        <SearchBar onSubmit={handleSearchSubmit}/>
        <ImageGalery array={dataArray}/>
      </Section>

    </>
  )
}
