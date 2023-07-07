import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { tokens } from "../../theme";

import ProgressCircle from "../../components/ProgressCircle";
const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
        title="Pie Chart"
        subtitle="Chart That shows Number of cases Resolved"
      />
      <Box display="flex" flexDirection="column" alignItems="center" mt="50px">
        <ProgressCircle size="550" />
        <Typography
          variant="h1"
          color={colors.greenAccent[500]}
          sx={{ mt: "15px" }}
        >
          216 Cases Resolved
        </Typography>
        {/* <Typography>Includes extra misc expenditures and costs</Typography> */}
      </Box>
    </Box>
  );
};

export default Pie;
