import React, { useState, useEffect } from "react";
import { Category } from "../Category/Category";
import { Item, UnorderedList } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://petgram-server-joel-suarez-86194ed31-joelsuarez1101.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    categories,
    loading,
  };
}

function ListOfCategoriesComponent(props) {
  const [showFixed, setShowFixed] = useState(false);

  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <UnorderedList fixed={fixed}>
      {loading && (
        <Item key={'loading'}>
          <Category />
        </Item>
      )}
      {!loading && categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </UnorderedList>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
}

const ListOfCategories = React.memo(ListOfCategoriesComponent)
export { ListOfCategories };
