import React, { useMemo } from "react";
import { useMutation } from "@apollo/client";

export function GraphqlMutationContainer(WrappedComponent, query) {
    return function GraphqlContainerWithQuery(props) {

        const [mutateAction, manager] = useMutation(query);
        
        return (
            <>
                <WrappedComponent mutateAction={mutateAction} manager={manager} {...props}/>
            </>
        );
    };
}
