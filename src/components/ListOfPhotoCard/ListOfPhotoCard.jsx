import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import { GraphqlContainer } from "../../containers/graphqlContainer";

import { gql } from "@apollo/client";

const withPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

function ListOfPhotoCardComponent({data, loading, error}) {

    if (loading) return "Loading...";

    if (error) return <pre>{error.message}</pre>;

    return (
        <>
            {data.photos.map((photo) => (
                <PhotoCard key={photo.id} {...photo} />
            ))}
        </>
    );
}

const ListOfPhotoCard = GraphqlContainer(ListOfPhotoCardComponent, withPhotos, { categoryId: 2})

export { ListOfPhotoCard };

