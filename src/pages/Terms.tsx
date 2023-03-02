import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
type Props = {};

const Terms = (props: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 1.5 } }}
      exit={{ opacity: 0, transition: { delay: 0.05, duration: 1 } }}
      className="px-32"
    >
      <h1 className="text-5xl uppercase tracking-wide font-bold mt-10">
        Terms and Conditions
      </h1>
      <div className="mt-5">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <p className="text-xl font-semibold">Privacy Policy</p>
          </AccordionSummary>
          <AccordionDetails>
            <ol className="list-decimal p-4 terms">
              <li> You must be 13 years or older to use this Service. </li>
              <li>
                You must be a human. Accounts registered by "bots" or other
                automated methods are not permitted.{" "}
              </li>
              <li>
                You must provide your name, a valid email address, and any other
                information requested in order to complete the registration
                process.{" "}
              </li>
              <li>
                Your login may only be used by one person - i.e., a single login
                may not be shared by multiple people - except that a machine
                user's actions may be directed by multiple people.{" "}
              </li>
              <li>
                You are responsible for maintaining the security of your account
                and password. Font Awesome cannot and will not be liable for any
                loss or damage from your failure to comply with this security
                obligation.
              </li>
              <li>
                You are responsible for all activity that occurs under your
                account.{" "}
              </li>
              <li>
                One person or legal entity may not maintain more than one free
                account, and one machine user account that is used exclusively
                for performing automated tasks.
              </li>
              <li>
                You may not use the Service for any illegal or unauthorized
                purpose. You must not, in the use of the Service, violate any
                laws in your jurisdiction (including but not limited to
                copyright or trademark laws).{" "}
              </li>
            </ol>
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
            <p className="text-xl font-semibold">Data Protection</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </p>
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
            <p className="text-xl font-semibold">Data used in Web Server</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </p>
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
            <p className="text-xl font-semibold">Age Restriction</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </motion.div>
  );
};

export default Terms;
