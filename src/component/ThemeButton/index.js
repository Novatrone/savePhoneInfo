 
 
 import { Button } from "@mui/material"
export function ThemeButton({children,iconIndex,sx,onClick}) {

    
    return (
        <>
            <Button onClick={onClick} variant="contained" sx={{ width: '100%', borderRadius: '20px',  border: '1px solid black', background: '#ffff', color: "black", ":hover": { backgroundColor: "#fff", color: 'black' },...sx }}>
                <div style={{alignItems:'center', width: '100%',  display: 'flex',  }}>
                    <div style={{ width: '30px',  background: '#ffff', borderRadius: '50px', border: "2px solid #49defc", }}>{iconIndex}
                    </div>
                    <div style={{ paddingLeft:'10px', textTransform: 'none', fontSize: "14px", width: '100%', background: '#ffff', borderRadius: '20px', textAlign:'left' }}>
                        {children}
                    </div>
                </div>
            </Button>
        </>
    )
}