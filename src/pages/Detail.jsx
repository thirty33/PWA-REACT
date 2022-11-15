import React from "react";
import { Layout } from "../components/Layout/Layout";
import { PhotoCardDetailed } from "../components/photoCardDetail/PhotoCardDetailed";

function Detail(props) {
    return (
        <Layout title={'detalle de mascota'}>
            <PhotoCardDetailed />
        </Layout>
    );
}

export { Detail };
