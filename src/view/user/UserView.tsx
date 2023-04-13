import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";

const UserView:FC = () => {
    return (
        <Paper variant="outlined" sx={{padding:2,background: grey[50]}}>
            User情報を表示
        </Paper>
    )
}

export default UserView;