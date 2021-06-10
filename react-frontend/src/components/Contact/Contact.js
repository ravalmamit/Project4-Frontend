import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import HeaderLogin from "../Header/HeaderLogin";
export default function Contact() {
  return (
    <React.Fragment>
      <HeaderLogin />
      <CssBaseline />
      <Container style={{ width: "100%" }}>
        <Typography
          style={{
            paddingTop: "300px",
            paddingLeft: "500px",
            fontWeight: 600,
          }}
        >
          AR Realty <br />
          100 Summer St. <br />
          Boston, MA 02125 <br />
          Main Phone: 617-000-0000
          <br />
          infoAR@AR.net
        </Typography>
      </Container>
    </React.Fragment>
  );
}
