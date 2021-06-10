import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from "../Header/Header";
import Background from "../../images/condo1.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",

    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(35),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Details() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Header />
      <img
        style={{
          height: "320px",
          width: "70%",
          paddingLeft: "260px",
          paddingTop: "10px",
        }}
        src={Background}
        alt="background"
      />

      <div className={classes.root}>
        <Typography
          style={{
            paddingLeft: "85px",
            paddingBottom: "20px",
            fontWeight: 600,
          }}
        >
          PROPERTY DETAILS OF 205 RICHDALE AVENUE, UNIT A-20
        </Typography>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              PROPERTY DETAILS
            </Typography>
            {/* <Typography className={classes.secondaryHeading}>
              I am an accordion
            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography style={{ fontWeight: 600 }}>
                {" "}
                Basic Information:
              </Typography>
              Property Type: Condo <br />
              MLS Number: 72841060 <br />
              Virtual Tour: Website <br />
              <Typography style={{ fontWeight: 600 }}> Building:</Typography>
              Square Feet: 925 <br />
              Year Built: 1988 <br />
              Zoning:IA1 <br />
              Condo Fee:$420 <br />
              Rooms: 4 <br />
              <Typography style={{ fontWeight: 600 }}> Location:</Typography>
              Town: Cambridge <br />
              County: Middlesex <br />
              State: MA <br />
              Zip: 02140
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>
              INTERIOR FEATURES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography style={{ fontWeight: 600 }}> Bedrooms</Typography>
              Bedrooms: 2 <br />
              <Typography style={{ fontWeight: 600 }}> Basement</Typography>
              Basement: Yes <br />
              <Typography style={{ fontWeight: 600 }}> Kitchen</Typography>
              Kitchen Level: Fourth Floor <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              EXTERIOR FEATURES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography style={{ fontWeight: 600 }}> Features</Typography>
              Parking Description: Guest <br />
              Exterior: Clapboard
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              UTILITIES AND APPLIANCES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography style={{ fontWeight: 600 }}>
                {" "}
                Utilities and Appliances
              </Typography>
              Appliances: Range, Dishwasher, Microwave, Refrigerator <br />
              Cooling: Central Air <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
