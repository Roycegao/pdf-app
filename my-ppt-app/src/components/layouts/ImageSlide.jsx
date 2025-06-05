const ImageSlide = ({ content }) => (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <img src={content.trim()} alt="slide" className="max-h-[80vh] object-contain" />
    </div>
  );
  export default ImageSlide;