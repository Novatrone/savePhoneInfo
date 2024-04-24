import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ThemeButton } from '../ThemeButton'

export default function CardComponent({ item, clickNow, index, setValue, value }) {

    const [disable, setDisable] = useState(false)

    return (
        <Box sx={{ width: "100%", height: "auto", position: 'absolute', bottom: '0px', display: 'flex', alignItems: 'flex-end' }} zIndex={99}>
            <Box sx={{ width: "100%", p: { md: 3, xs: 2 } }}>
                <Box sx={{ backgroundColor: "white", height: '100%', overflow: 'hidden', borderRadius: '12px' }}>
                    <header style={{ padding: '16px', backgroundColor: '#37d4fd', fontWeightRegular: 500, textAlign: 'center', fontSize: '19px', color: '#ffff' }}>
                        {item.question}
                    </header>
                    {item.type === 'question' ?
                        <Box sx={{
                            display: 'flex',
                            flexDirection: "column",
                            rowGap: 2,
                            p: 3
                        }}>
                            {item.answer.map((ans, index1) => (
                                <ThemeButton key={index1} onClick={() => clickNow(ans, index)} iconIndex={ans.count}>{ans.desc}</ThemeButton>
                            ))}
                        </Box>
                        :
                        <></>
                    }

                    {item.type === 'query' ?
                        <Box sx={{
                            display: 'flex',
                            flexDirection: "column",
                            rowGap: 2,
                            p: 2,
                        }}>
                            <Box sx={{ px: 2 }}>
                                <Typography sx={{ textAlign: "center" }}>Los datos personales que nos facilites serán tratados por COODELEX SL, con la finalidad de atender su solicitud de información. El resto descrito en la política de privacidad</Typography>
                            </Box>
                            {item.valueFor === "name" &&
                                <>
                                    <TextField
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                borderRadius: "10px"
                                            }
                                        }}
                                        onChange={(e) => setValue({ ...value, name: e.target.value })}
                                        label="Nombre" />
                                    <Button
                                        size='large'
                                        onClick={(e) => clickNow(value.name, index)}
                                        sx={{
                                            backgroundColor: "#079fad",
                                            "&:hover": {
                                                backgroundColor: "#079fad" /* Keep the same background color on hover */
                                            }
                                        }}
                                        variant='contained'>
                                        SIGUIENTE
                                    </Button>
                                </>
                            }

                            {item.valueFor === "email" &&
                                <>
                                    <TextField
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                borderRadius: "10px"
                                            }
                                        }}
                                        onChange={(e) => setValue({ ...value, email: e.target.value })} label="Email" />
                                    <Button
                                        size='large'
                                        onClick={() => clickNow(value.email, index)}
                                        sx={{
                                            backgroundColor: "#079fad",
                                            "&:hover": {
                                                backgroundColor: "#079fad" /* Keep the same background color on hover */
                                            }
                                        }}
                                        variant='contained'>
                                        SIGUIENTE
                                    </Button>
                                </>
                            }

                            {item.valueFor === "phone" &&
                                <>
                                    <TextField
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                borderRadius: "10px"
                                            }
                                        }}
                                        onChange={(e) => setValue({ ...value, phone: e.target.value })} label="Teléfono" />
                                    <Button
                                        size='large'
                                        onClick={() => clickNow(value.phone, index)}
                                        sx={{
                                            backgroundColor: "#079fad",
                                            "&:hover": {
                                                backgroundColor: "#079fad" /* Keep the same background color on hover */
                                            }
                                        }}
                                        variant='contained'>
                                        SIGUIENTE
                                    </Button>
                                </>
                            }

                            {item.valueFor === "call_time" &&
                                <>
                                    <TextField
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                borderRadius: "10px"
                                            }
                                        }}
                                        onChange={(e) => setValue({ ...value, call_time: e.target.value })} label="Elige horario de llamada" />
                                    <FormControlLabel control={<Checkbox onChange={(e) => setDisable(e.target.checked)} />} label="Acepto la política de privacidad" />
                                    <Button
                                        size='large'
                                        disabled={!disable}
                                        onClick={() => clickNow(value.call_time, index)}
                                        sx={{
                                            backgroundColor: "#079fad",
                                            "&:hover": {
                                                backgroundColor: "#079fad" /* Keep the same background color on hover */
                                            }
                                        }}
                                        variant='contained'>
                                        ME INTERESA
                                    </Button>
                                </>
                            }

                        </Box>
                        :
                        <></>
                    }
                </Box>
            </Box>
        </Box>
    )
}
