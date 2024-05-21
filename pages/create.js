// pages/create.js
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Form from "../components/Form";
import { StyledLink } from "../components/StyledLink";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePage() {
  const router = useRouter();

  async function addPlace(place) {
    try {
      const response = await fetch("/api/places", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(place),
      });

      if (response.ok) {
        console.log("Place added successfully");
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("Error adding place:", errorData.error);
      }
    } catch (error) {
      console.error("Error adding place:", error);
    }
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
