import React, { useMemo, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";

export function GraphqlContainer(WrappedComponent, query, variables) {
    return function GraphqlContainerWithQuery() {
        
        let paramsFromQuery = {};
        const search = useLocation();
        const paramQuery = useMemo(
            () => new URLSearchParams(search.search),
            [search]
        );
        const id = paramQuery.get("details");
        if (id) paramsFromQuery = { id };

        const params = useParams();
        const useQueryResult = useQuery(query, {
            variables: {
                ...variables,
                ...paramsFromQuery,
                ...params
            }
        });

        useQueryResult.refetch();

        return (
            <>
                <WrappedComponent {...useQueryResult} />
            </>
        );
    };
}
