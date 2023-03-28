import {Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {dashboardConfig} from "../../router/router.jsx";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <Drawer variant={"permanent"}>
            {
                dashboardConfig.children.map((item, i) => (
                    <List key={item.path + i}>
                        <ListItem>
                            <ListItemButton component={Link} to={`/dashboard/${item.path}`}>
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                ))
            }
        </Drawer>
    )
}
export default Sidebar