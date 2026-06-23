import Masonry from "../../../components/ui/masonry/Masonry";
import { Box } from "@chakra-ui/react";
import * as db from "../../data";

export default function CloudCrochet() {
  const personal = db.personal;
  const thisProject = personal.find(
    (p) => p.link === "/personal/cloud-crochet",
  );

  return (
    <Box pb="50px" pt="62px" px={{ base: "10", md: "30px" }}>
      <Masonry
        db={thisProject?.gallery ?? []}
        folder="personal"
        projectInfo={thisProject}
      />
    </Box>
  );
}
