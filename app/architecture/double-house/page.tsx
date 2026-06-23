import Masonry from "../../../components/ui/masonry/Masonry";
import { Box } from "@chakra-ui/react";
import * as db from "../../data";

export default function DoubleHouse() {
  const architecture = db.architecture;
  const thisProject = architecture.find(
    (p) => p.link === "/architecture/double-house",
  );

  return (
    <Box pb="50px" pt="62px" px={{ base: "10", md: "30px" }}>
      <Masonry
        db={thisProject?.gallery ?? []}
        folder="architecture"
        projectInfo={thisProject}
      />
    </Box>
  );
}
