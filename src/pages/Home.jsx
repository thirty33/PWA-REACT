import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../components/ListOfPhotoCard/ListOfPhotoCard";
import { Layout } from "../components/Layout/Layout";

function HomePage(props) {
    return (
        <Layout title='Petgram - Tu app de fotos de mascotas' subtitle='Fotos de animales domésticos muy bonitos'>
            <ListOfCategories />
            <ListOfPhotoCard />
        </Layout>
    );
}

const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.id === props.id
})

export { Home };
