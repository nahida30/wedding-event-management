import { useLoaderData } from "react-router-dom";
import GalleryImage from "./GalleryImage";


const Gallery = () => {

    const images = useLoaderData()

    return (
        <div>
            <GalleryImage images ={images} ></GalleryImage>
            
        </div>
    );
};

export default Gallery;