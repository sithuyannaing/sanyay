import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  IconButton,
 } from "@mui/material";
 import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
 } from "@mui/icons-material";
 import { green } from "@mui/material/colors";
import { ItemProps } from "../types/types";
import { formatRelative } from "date-fns";


export default function Item({item,remove}:ItemProps) {
  return(
     <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}><TimeIcon fontSize="10" color="success" />
            <Typography
              variant="caption"
              sx={{ color: green[500] }}>
              {formatRelative(item.created, new Date())}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={() => remove(item.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton></Box>

          <Typography sx={{ my: 3 }}>{item.content}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
          <UserIcon
            fontSize="12"
            color="info"
          />
          <Typography variant="caption">{item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}