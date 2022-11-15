import React from "react";
import { ListOfFavsQuery } from "../components/ListOfFavs/ListOfFavs";
import { Layout } from "../components/Layout/Layout";

function Favs(props) {
    return (
        <Layout title={'Petgram - Tus favoritos'} subtitle='Aqui puedes encontrar tus favoritos'>
            <ListOfFavsQuery />
        </Layout>
    );
}

export default Favs;
