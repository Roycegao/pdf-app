const QuoteSlide = ({ content }) => (
    <div className="h-screen flex items-center justify-center bg-yellow-50">
      <blockquote className="text-2xl italic text-gray-800 max-w-xl text-center">“{content.trim()}”</blockquote>
    </div>
  );
  export default QuoteSlide;