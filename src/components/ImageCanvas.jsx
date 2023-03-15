import React from 'react'
import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
import { useRef } from "react";
import { Button, Modal } from 'react-bootstrap';

const ImageCanvas = ({ selectedImage, handleClose, onSaveChanges }) => {
    const imageEditorRef = useRef(null)

    const handleDownload = () => {
        const dataURL = imageEditorRef.current.getInstance().toDataURL();
        return dataURL;
    };

    const handleSaveChanges = () => {
        const editedImageUrl = handleDownload();
        onSaveChanges(editedImageUrl);
        handleClose();
    }

    return (
        <div>
            <ImageEditor
                ref={imageEditorRef}
                includeUI={{
                    loadImage: {
                        path: selectedImage,
                        name: "sample-image",
                    },
                    menu: [
                        "crop",
                        "flip",
                        "rotate",
                        "draw",
                        "text",
                    ],
                    initMenu: "draw",
                    uiSize: {
                        height: `calc(120vh - 250px)`,
                    },
                    menuBarPosition: "bottom",
                }}
                cssMaxHeight={450}
                cssMaxWidth={450}
                selectionStyle={{
                    cornerSize: 20,
                    rotatingPointOffset: 70,
                }}
                usageStatistics={false}
            />
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { handleClose(); handleSaveChanges(); }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </div>
    )
}

export default ImageCanvas