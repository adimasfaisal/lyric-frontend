import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function Editor({ onChange, editorLoaded, name, value }) {
    const editorRef = useRef();

    return (
        <div>
            <CKEditor />
        </div>
    );
}

export default Editor;
