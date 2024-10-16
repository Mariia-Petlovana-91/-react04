import { useState } from 'react';
import './App.module.css';
import getDataImages from '../../utils/api';
import toast, { Toaster } from 'react-hot-toast';
import Section from '../Section/Section';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ImageGalery from '../ImageGalery/ImageGalery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function App() {
  const [imagesArray, setImagesArray] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [load, setLoad] = useState(false);
  const [loaderBtn, setLoaderBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchImages(searchValue, pageNumber = 1) {
    if (!searchValue) {
      toast.error("The field cannot be empty!🤷‍♂️");
      return;
    }

    try {
      setLoad(true);
      const data = await getDataImages(searchValue, pageNumber);
      if (data.results.length === 0) {
        setErrorMessage(true);
        setLoaderBtn(false);
        return;
      }
      setImagesArray((prevImages) => [...prevImages, ...data.results]);
      setLoaderBtn(pageNumber < data.total_pages);
      setPage(pageNumber + 1);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to fetch data!🚨");
    } finally {
      setLoad(false);
    }
  }

  function onSearchSubmit(e) {
    e.preventDefault();
    if (!searchTerm) {
      toast.error("Please enter a search term!🚨");
      return;
    }

    setImagesArray([]);
    setPage(1);
    setErrorMessage(false);
    fetchImages(searchTerm, 1);
  }

  return (
    <>
      <Section>
        <SearchBar
          onSubmit={onSearchSubmit}
          setSearchTerm={setSearchTerm}
        />
        {load && <Loader />}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        <ImageGalery array={imagesArray} />
        {loaderBtn &&
          <LoadMoreBtn
            onSearchNext={() => fetchImages(searchTerm, page)}
          />}
        {errorMessage && <ErrorMessage />}
      </Section>
    </>
  );
}
