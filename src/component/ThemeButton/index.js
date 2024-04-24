

import { Box, Button } from "@mui/material"
export function ThemeButton({ children, iconIndex, sx, onClick }) {


    return (
        <>
            <Box
                onClick={onClick}
                sx={{
                    width: '100%',
                    borderRadius: '25px',
                    border: '1px solid black',
                    background: '#ffff',
                    color: "black",
                    cursor: "pointer",
                    ...sx
                }}>
                <Box sx={{ p: 1, display: "flex" }}>
                    <Box sx={{ width: "35px" }}>
                        <Box sx={{
                            width: '30px',
                            height: "30px",
                            borderRadius: '100%',
                            border: "2px solid #49defc",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: 0
                        }}>
                            {iconIndex}
                        </Box>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            paddingLeft: '10px',
                            textTransform: 'none',
                            fontSize: "14px",
                            width: '100%',
                            textAlign: 'left',
                        }}>
                            {children}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}