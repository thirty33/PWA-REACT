import React from "react";
import { GraphqlContainer } from "../../containers/graphqlContainer";
import { gql } from "@apollo/client";
import PhotoCard from "../PhotoCard/PhotoCard";

const GET_ANIMAL = gql`
    query getSinglePhoto($id: ID!) {
        photo(id: $id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

function PhotoCardDetailedComponent({ data, loading, error }) {
    if (loading) return "Loading...";

    if (error) return <pre>{error.message}</pre>;

    const { photo } =  data;
    
    return <PhotoCard {...photo} />;
}

const PhotoCardDetailed = GraphqlContainer(
    PhotoCardDetailedComponent,
    GET_ANIMAL,
    {}
);

export { PhotoCardDetailed };
