// import { useState, useEffect } from 'react';

// export default function Carousel() {
//     const slide_image = [
//         "https://w0.peakpx.com/wallpaper/286/242/HD-wallpaper-food-cocktail-drink-thumbnail.jpg",
//         "https://i.pinimg.com/736x/8e/28/57/8e2857f2882190b1fdf0d40ba2c8d85e.jpg",
//         "https://c1.wallpaperflare.com/preview/338/571/673/cocktail-bar-nightlife-icee.jpg",
//         "https://static.vecteezy.com/system/resources/thumbnails/050/157/585/small_2x/a-refreshing-splash-of-summer-in-a-glass-bottle-photo.jpeg",
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Handle image switching (next and previous)
//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slide_image.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + slide_image.length) % slide_image.length);
//     };

//     // Auto slide change every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(nextSlide, 3000);
//         return () => clearInterval(interval); // Clean up the interval on component unmount
//     }, []);

//     return (
//         <main className="Slide">
//             <div className="max-w-lg mx-auto">
//                 <div className="relative overflow-hidden">
//                     {/* Image Wrapper */}
//                     <div
//                         className="flex transition-transform duration-1000 ease-in-out"
//                         style={{
//                             transform: `translateX(-${currentIndex * 100}%)`, // Change the slide with horizontal scroll
//                         }}
//                     >
//                         {slide_image.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image}
//                                 alt={`slide-${index}`}
//                                 className="w-full h-[400px] object-cover rounded-md"
//                             />
//                         ))}
//                     </div>

//                     {/* Next and Previous Buttons */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
//                     >
//                         Prev
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full"
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </main>
//     );
// }
