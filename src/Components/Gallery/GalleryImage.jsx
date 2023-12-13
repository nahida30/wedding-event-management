import GalleryImageCard from "./GalleryImageCard";


const GalleryImage = ({images}) => {
    console.log(images);
    return (
        <div>
            {
                images ?.map(image => <GalleryImageCard key={image.id} image={image}></GalleryImageCard>)
            }
        </div>
    );
};

export default GalleryImage;