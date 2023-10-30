import { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./galeria.css"






const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/32/a6/gran-hotel-buenos-aires.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/32/a2/meeting-room.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/32/82/solarium.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/32/66/jacuzzis.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/32/3b/meeting-room.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/40/32/05/habitacion-doble-twin.jpg?w=1200&h=-1&s=1",
    "https://y.cdrst.com/foto/hotel-sf/3639f/granderesp/sheraton-tucuman-hotel-servicios-89e4f6f.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6d/84/f1/sheraton-tucuman-hotel.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/6d/84/ec/sheraton-tucuman-hotel.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/4d/e7/80/presidential-suite-living.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/4d/e7/7c/suite.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c3/44/13/sheraton-tucuman-hotel.jpg?w=1200&h=-1&s=1",
    "https://imgs.search.brave.com/9K9snQQ-GqlC1UfuBaEoDHyhOvKIgxRn1KAc7z5mvTA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDgvOGQvMjkvMGYv/ZGVsLWJvbm8tcGFy/ay1ob3RlbC1zcGEu/anBn",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/95/ac/49/del-bono-park-hotel-spa.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/aa/a5/0c/del-bono-park-hotel-spa.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/95/ac/8a/del-bono-park-hotel-spa.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/8d/28/05/del-bono-park-hotel-spa.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/aa/a5/29/del-bono-park-hotel-spa.jpg?w=1200&h=-1&s=1"
]



const Galeria = () => {

    const [data,setData] = useState({img:"",i:0})

    const viewImage = (img, i)=>{
        setData({img, i})
    }

    const imgAction =(action) =>{
        let i = data.i;
        if(action === "next-img"){
            setData({img: images[i + 1], i: i + 1});
        }
        if(action === "previous-img"){
            setData({img: images[i - 1], i: i - 1});
        }
        if(!action){
            setData({img: "", i: 0});
        }
    }


    return (

        <>
            {data.img &&
                <div  className="viewer" style={{
                width:"100%",
                height:"100vh",
                background:"black",
                position:"fixed",
                top:"0px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                overflow:"hidden",

            }}>
                <CloseIcon onClick={()=> imgAction()} style={{position:"absolute", top:"10px", right:"10px" ,color:"white"}}/>
                <ArrowBackIosIcon style={{color:"white"}}  onClick={() => imgAction("previous-img")}/>
                <img src={data.img} style={{width:"auto", maxWidth:"100%", maxHeight:"100%", margin: "10px 10px 10px 10px"}}/>
                <ArrowForwardIosIcon style={{color:"white"}} onClick={() => imgAction("next-img")}/>
            </div>}



        <div style={{padding: "10px"}}>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="15px">
            {images.map((image, i) =>
                <img 
                    key={i} 
                    src={image} 
                    style={{width: "100%", display: "block", cursor: "pointer", background:"black"}} 
                    alt="" 
                    onClick={()=>viewImage(image,i)}
                    />
        )}
            </Masonry>
            </ResponsiveMasonry>
            </div>
        </>
    )
}

export default Galeria;