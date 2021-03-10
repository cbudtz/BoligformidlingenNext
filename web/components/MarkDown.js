import React from "react";
import ReactMarkdown from "react-markdown";
import {getStrapiURL} from "../lib/api";


export default function MarkDown({children}) {
    const markdown = children.replaceAll && children.replaceAll("(/uploads/", "("+ getStrapiURL() + "uploads/");
    return(
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
    );
}