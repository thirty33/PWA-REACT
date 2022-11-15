import React from "react";
import { GraphqlContainer } from "../../containers/graphqlContainer";
import { gql } from "@apollo/client";
import { Grid, Image, Link } from './styles'
import PropTypes from "prop-types";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

function ListOfFavs({data, loading, error}) {

    if (loading) return "Loading...";

    if (error) return <pre>{error.message}</pre>;

    console.log('data favs', data)

    return (
        <Grid>
            {data.favs.map((fav) => (
                <Link key={fav.id} to={`/detail/${fav.id}`}>
                    <Image src={fav.src} />
                </Link>
            ))}
        </Grid>
    );
}

ListOfFavs.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      favs: PropTypes.arrayOf(
        PropTypes.shape({
          __typename: PropTypes.string,
          categoryId: PropTypes.number,
          id: PropTypes.string,
          likes: PropTypes.number,
          src: PropTypes.string,
          userId: PropTypes.string,
        })
      ),
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.object
}

const ListOfFavsQuery = GraphqlContainer(ListOfFavs, GET_FAVS, {})

export { ListOfFavsQuery };
