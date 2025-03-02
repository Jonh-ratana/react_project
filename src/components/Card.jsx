export default function Card(){
    const image = [
        {
            title : "",
            image : "img/drink1.png",
        },
        {
            title : "",
            image : "img/drink2.png",
        },
        {
            title : "",
            image : "img/drink3.png",
        },
        {
            title : "",
            image : "img/drink1.png",
        },
        {
            title : "",
            image : "img/drink1.png",
        },
        {
            title : "",
            image : "img/drink1.png",
        },
        {
            title : "",
            image : "img/drink2.png",
        },
        {
            title : "",
            image : "img/drink3.png",
        },
        {
            title : "",
            image : "img/drink1.png",
        },
        {
            title : "",
            image : "img/drink1.png",
        },
    ]
    return(
        <>
            <div className="contain w-[99%] m-auto ">
            <div className="all-card flex w-full flex-wrap">
                {image.map((item)=>(
                    <>
                        
                            <div className="card w-[100%] h-[450px] xl:w-[300px] xl:h-[420px] md:w-[31.5%] md:h-[400px] bg-white p-3 shadow-xl m-2 rounded-xl ">
                                <img src={item.image} alt="" className="w-full h-[70%] rounded-xl"/>
                                <div className="text w-full h-[30%] pt-2 relative">
                                    
                                    <button className="absolute bottom-[10px] right-[10px] bg-blue-600 text-2xl text-white px-5 py-2 rounded-xl">Buy</button>
                                </div>
                            </div>
                       
                    </>
                ))}
                 </div>
            </div>
        </>
    )
}