"use client";

import { Box, Container } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import paperPlane from "../../public/paper_plane.svg";

export default function Header() {
  return (
    <header>
      <Box bg={"white"} w={"100vw"}>
        <Container maxW={["20em", "40em", "40em", "80em"]}>
          <Box py={4}>
            <Link href="/">
              <Image
                src={paperPlane}
                height={40}
                alt="Picture of the author"
                priority
              />
            </Link>
          </Box>
        </Container>
      </Box>
    </header>
  );
}
