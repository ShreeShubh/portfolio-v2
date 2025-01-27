import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"

export const CustomButton = styled(Button)(() => ({
  backgroundColor: "#03FF9A", // Primary color
  color: "#001B39", // Text color
  padding: "8px 20px",
  borderRadius: "8px",
  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#02E089", // Hover color
    transform: "scale(0.95)", // Slight press effect on hover
  },
  "&:active": {
    transform: "scale(0.90)", // Strong press effect on click
  },
}))
