import Box from '@mui/material/Box';
import { ThemeButton } from '../../component/ThemeButton';
import { useState } from 'react';


export function Mainpage() {
 
    const [active, setActive] = useState(0);

    const Catgory=[{
        question:'¿Ahora, en que compañía de telefonía estas?',
        answer:[
            {
                count:'A',
                desc: 'Vodafone/Lowi/Fi Network',
            },
            {
                count:'B',
                desc: 'Movistar/O2/Digi',
            },
            {
                count:'C',
                desc: 'Yoigo/Masmovil',
            },
            {
                count:'D',
                desc: 'Orange/Jazzte/Simyo',
            }
        ]
    },
    {
        question:'¿Tienes permanencia en tu actual compañía?',
        answer:[
            {
                count:'A',
                desc: 'Si, y me queda mas de 3 meses',
            },
            {
                count:'B',
                desc: 'Si,pero ya me queda menos de 3 meses',
            },
            {
                count:'C',
                desc: 'No',
            },
           
        ]
    },
    {
        question:'¿Qué te interesa?',
        answer:[
            {
                count:'A',
                desc: 'Solo movil',
            },
            {
                count:'B',
                desc: 'Solo fibra',
            },
            {
                count:'C',
                desc: 'Fibra y movil',
            },
            {
                count:'D',
                desc: 'Fibra,movil y tele',
            }
        ]
    },
    {
        question:'Rellena el formulario y nos pondremos en contacto contigo',
        answer:[
            {
                count:'A',
                desc: 'Vodafone/Lowi/Fi Network',
            },
            {
                count:'A',
                desc: 'Movistar/O2/Digi',
            },
            {
                count:'A',
                desc: 'Yoigo/Masmovil',
            },
            {
                count:'A',
                desc: 'Orange/Jazzte/Simyo',
            }
        ]
    }]

   const clickNow = (item, index) =>{
    
    console.log('clicked')
    
    setActive(index + 1)
   }
 
    return (
        <>
            <Box sx={{
                position: " relative",
                overflow: 'hidden',
                width: '100%',
                height: '100vh',
                position: 'relative'

            }}>
                <video id="bg" width="100%" autoplay>
                    <source autoplay={true} src="https://s3-eu-west-1.amazonaws.com/storage-playfilm-public/media/3/users/19048/resources/2231109/clips/city6_qua_standar.mp4" type="video/mp4" />
                    <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
                </video>

                <Box id="fg">
                    <video width="100%" height="100%" style={{ objectFit: "cover", position: "absolute", maxWidth: "683px" }} autoplay muted>
                    
                    <div style={{background:'#39d6fd',width:'100%',height:'40px',position:'absolute',zIndex:3}}>jhkhk</div>
                        <source autoplay={true} src="https://s3-eu-west-1.amazonaws.com/storage-playfilm-public/media/3/users/19048/resources/2231109/clips/city6_qua_standar.mp4" type="video/mp4" />
                        <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
                        
                    </video>
                    
                    
                   {
                   
                   Catgory.map(function(item,index){
                    return(
                        <>
                        {index === active ? 
                    <Box  key ={index} sx={{ minWidth:'395px', maxWidth: "650px", height: "auto",position:'absolute',bottom:'0px',padding:5, display:'flex', alignItems:'flex-end' }} zIndex={99}>
                        <Box sx={{ backgroundColor: "white",height:'100%',overflow:'hidden',borderRadius:'12px'}}>
                       <header style={{width:'100%',padding:'16px',background:'##37d4fd',fontWeightRegular:500,textAlign:'center',fontSize:'19px',color:'#ffff'}}>
                       {item.question}
                       </header>

                     <Box sx={{ px:3,paddingTop:'17px'}}>
                     {item.answer.map((ans,index1) => (
                     <ThemeButton key={index} onClick={() => clickNow(item,index)} sx={{mb:3}} iconIndex={ans.count}>{ans.desc}</ThemeButton>
                     ))}
                     </Box>
                        </Box>
                    </Box>
                    :<></>}
                    </>
                    )
                   })

                   }
                    
                   
                   
         


                </Box>
            </Box>





        </>
    )
}