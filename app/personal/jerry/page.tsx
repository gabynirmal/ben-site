import Masonry from "../../../components/ui/masonry/Masonry";
import { Box } from "@chakra-ui/react";
import * as db from "../../data";

export default function Jerry() {
  const personal = db.personal;
  const thisProject = personal.find((p) => p.link === "/personal/jerry");

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
