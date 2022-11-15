import React from "react";
import { Anchor, Image } from "./styles";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpeg";

function Category({ cover = DEFAULT_IMAGE, path, emoji = "?", id }) {
    return (
        <>
            <Anchor
                to={{
                    pathname: `/pet/${id}`,
                }}
            >
                <Image src={cover} />
            </Anchor>
            {emoji}
        </>
    );
}

export { Category };
