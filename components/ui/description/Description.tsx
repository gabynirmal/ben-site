import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaMapPin } from "react-icons/fa";

export default function Description({
  db,
  location,
}: {
  db: any;
  location?: any;
}) {
  return (
    <>
      <Flex justifyContent="space-between" pb="15px">
        <Heading size="2xl" letterSpacing="wide" fontWeight="500">
          {db.title}
        </Heading>
        <Text as="p" textStyle="2xl" fontStyle="italic">
          {db.year} | {db.concept}
        </Text>
      </Flex>
      {location && (
        <Link href={location.link} target="_blank">
          <Flex
            gap="6px"
            pb="15px"
            alignItems="center"
            color="var(--foreground)"
            _hover={{ color: "var(--link-hover)" }}
          >
            <FaMapPin />
            <Text
              as="p"
              textStyle="xl"
              textDecoration="underline"
              textDecorationThickness="1px"
            >
              {location.title}
            </Text>
          </Flex>
        </Link>
      )}

      <Text as="p" textStyle="md">
        {db.description?.p1}
        <br />
        <br />
        {db.description?.p2}
        <br />
        <br />
        {db.description?.p3}
      </Text>
    </>
  );
}
