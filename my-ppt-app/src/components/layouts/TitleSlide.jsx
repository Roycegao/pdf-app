const TitleSlide = ({ content }) => (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-800">{content.trim()}</h1>
    </div>
  );
  export default TitleSlide;