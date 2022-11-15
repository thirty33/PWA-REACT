import React, { useEffect, useRef, useState } from "react";
import { ImgWrapper, Image, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Link } from "react-router-dom";
import FavButton from "../FavButton/FavButton";
import { GraphqlMutationContainer } from "../../containers/graphqlMutationContainer";
import { gql } from "@apollo/client";

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

const FavButtonContainer = GraphqlMutationContainer(FavButton, LIKE_PHOTO)

const DEFAULT_IMAGE =
    "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";



function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE, liked }) {
    // const [liked, setLiked] = useLocalStorage(`like-${id}`, false);

    const [show, ref] = useNearScreen();

    const handleFavClick = async (mutateAction, manager) => {
        await mutateAction({variables: {input: {id}}})
        // setLiked(!liked);
    }
    
    return (
        <Article ref={ref}>
            {show && (
                <>
                    <Link to={{
                        pathname: "/search",
                        search: `?details=${id}`
                    }}>
                        <ImgWrapper>
                            <Image src={src} alt="" />
                        </ImgWrapper>
                    </Link>
                    {/* <Button onClick={() => setLiked(!liked)}>
                        {" "}
                        <Icon size={"32px"} /> {likes} likes!
                    </Button> */}
                    <FavButtonContainer  liked={liked} likes={likes} onClick={handleFavClick}/>
                </>
            )}
        </Article>
    );
}

export default PhotoCard;
