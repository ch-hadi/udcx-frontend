import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import CIcon from "../CIcon/CIcon";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const [hover, setIsHovered] = React.useState(false);
  const handleRowMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleRowMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="start">Created</TableCell>
            <TableCell align="start" style={{ width: "150px" }}>
              By
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { background: "#F1F3F5", cursor: "pointer" },
              }}
              onMouseEnter={() => handleRowMouseEnter(index)}
              onMouseLeave={handleRowMouseLeave}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="start">April 17, 2023</TableCell>
              <TableCell
                align="start"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "30px" }}>
                  <img
                    style={{ height: 24, borderRadius: 15 }}
                    src="./assets/images/user.png"
                  />
                </div>
                {hover === index && (
                  <div style={{ width: "30px" }}>
                    <CIcon icon={<EllipsisHorizontalIcon />} />
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
