import React from "react";
import ReactMarkdown from "react-markdown";
import {getStrapiURL} from "../lib/api";


export default function MarkDown({children}) {
    if (!children) {children=""}
    console.log(children)
    const markdown = children.replaceAll && children.replaceAll("(/uploads/", "("+ getStrapiURL() + "uploads/");
    const renderer =  {
        image: ({alt, src, title,
        }) => (
            <img
                alt={alt}
                src={src}
                title={title}
                style={{ maxWidth: "100%" }}  />
        ),
    };
    return(
        <ReactMarkdown renderers={renderer} allowDangerousHtml>
            {markdown}
        </ReactMarkdown>
    )
}