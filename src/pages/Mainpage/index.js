import Box from '@mui/material/Box';
import { ThemeButton } from '../../component/ThemeButton';
import { useState } from 'react';
import { Typography } from '@mui/material';
import CardComponent from '../../component/card';


export function Mainpage() {

    const [active, setActive] = useState(0);
    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: "",
        call_time: "",
    });
    console.log("value: ", value);

    const Category = [
        {
            question: '¿Ahora, en que compañía de telefonía estas?',
            type: 'question',
            answer: [
                {
                    count: 'A',
                    desc: 'Vodafone/Lowi/Fi Network',
                },
                {
                    count: 'B',
                    desc: 'Movistar/O2/Digi',
                },
                {
                    count: 'C',
                    desc: 'Yoigo/Masmovil',
                },
                {
                    count: 'D',
                    desc: 'Orange/Jazzte/Simyo',
                }
            ]
        },
        {
            question: '¿Tienes permanencia en tu actual compañía?',
            type: 'question',
            answer: [
                {
                    count: 'A',
                    desc: 'Si, y me queda mas de 3 meses',
                },
                {
                    count: 'B',
                    desc: 'Si,pero ya me queda menos de 3 meses',
                },
                {
                    count: 'C',
                    desc: 'No',
                },

            ]
        },
        {
            question: 'Rellena el formulario y nos pondremos en contacto contigo',
            type: 'question',
            answer: [
                {
                    count: 'A',
                    desc: 'Solo móvil',
                },
                {
                    count: 'B',
                    desc: 'Solo fibra',
                },
                {
                    count: 'C',
                    desc: 'Fibra y móvil',
                },
                {
                    count: 'D',
                    desc: 'Fibra, móvil y tele',
                }
            ]
        },
        {
            question: 'Rellena el formulario y nos pondremos en contacto contigo',
            type: 'query',
            valueFor: 'name',
        },
        {
            question: 'Rellena el formulario y nos pondremos en contacto contigo',
            type: 'query',
            valueFor: 'email',
        },
        {
            question: 'Rellena el formulario y nos pondremos en contacto contigo',
            type: 'query',
            valueFor: 'phone',
        },
        {
            question: 'Rellena el formulario y nos pondremos en contacto contigo',
            type: 'query',
            valueFor: 'call_time',
        }
    ]

    const clickNow = (ans, index) => {
        console.log("ans: ", ans);
        setActive(index + 1)
    }

    return (
        <>
            <Box sx={{
                position: " relative",
                overflow: 'hidden',
                width: '100%',
                height: '100vh',
            }}>

                <video
                    id="bg"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover", position: "absolute" }}
                    autoPlay
                    muted
                    controls
                    loop
                >
                    <source
                        src="https://s3-eu-west-1.amazonaws.com/storage-playfilm-public/media/3/users/19048/resources/2231109/clips/city6_qua_standar.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.ogg"
                        type="video/ogg"
                    />
                </video>

                <Box id="trama-image" />

                <Box sx={{
                    width: "100%",
                    maxWidth: '720px',
                    marginInline: "auto",
                    height: "100vh",
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: " 0px 22px 30px #000"
                }}>
                    <Box sx={{ flexGrow: 1, position: "relative" }}>
                        <video
                            width="100%"
                            height="100%"
                            style={{ objectFit: "cover", position: "absolute" }}
                            autoPlay
                            muted
                            controls
                            loop
                        >
                            <source
                                src="https://s3-eu-west-1.amazonaws.com/storage-playfilm-public/media/3/users/19048/resources/2231109/clips/city6_qua_standar.mp4"
                                type="video/mp4"
                            />
                            <source
                                src="https://www.w3schools.com/html/mov_bbb.ogg"
                                type="video/ogg"
                            />
                        </video>

                        {Category.map(function (item, index) {
                            return (
                                <>
                                    {
                                        index === active ?
                                            <CardComponent index={index} setValue={setValue} value={value} clickNow={clickNow} item={item} />
                                            :
                                            <></>
                                    }

                                    {(item.type === "query" && index === active) ?
                                        < Typography
                                            sx={{
                                                position: "absolute",
                                                top: 120,
                                                right: 0,
                                                left: 0,
                                                marginInline: "auto",
                                                textAlign: "center",
                                                color: "white",
                                                zIndex: 100
                                            }}
                                        >Muchas gracias por tus respuestas</ Typography>
                                        :
                                        <></>
                                    }
                                </>
                            )
                        })}

                        <Box sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            py: "8px",
                            fontSize: "13px",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "#fff",
                            textAlign: "left",
                            lineHeight: "16px",
                            zIndex: 3,
                        }}>
                            <Typography px={1} variant='caption'>
                                Las mejores ofertas de telefonía, al alcance de 1 click
                            </Typography>
                        </Box>

                        <Box id="trama-image" />

                    </Box>
                    {/* <Box sx={{
                        width: "100%",
                        py: "4px",
                        backgroundColor: "#000",
                        color: "#fff",
                        textAlign: "left",
                        lineHeight: "16px",
                        zIndex: 3,
                    }}>
                        <Typography sx={{ fontSize: "10px" }} px={1}>
                            <span style={{ fontWeight: 700 }}>© PLAYFILM</span> · TERMS OF USE · COOKIES POLICY                        </Typography>
                    </Box> */}
                </Box>
            </Box >
        </>
    )
}