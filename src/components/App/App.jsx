import { useState, useEffect } from 'react'
import './App.module.css'
import Section from '../Section/Section'
import SearchBar from '../SearchBar/SearchBar'

export default function App() {

  return (
    <>
      <Section>
        <SearchBar/>
      </Section>

    </>
  )
}
