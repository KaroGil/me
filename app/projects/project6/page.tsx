import Link from "next/link";
import Card from "@/app/components/card";
import LinkButton from "@/app/components/linkButton";

export default function Project2() {
  return (
    <Card title="echo - linjeforeningen for informatikk">
      <p>
        This is the page for echo - linjeforeningen for informatikk. Which is
        created by the subgroup of the student organization. I am a member of
        the subgroup and have been involved in the development of this project.
      </p>
      <LinkButton href="https://echo.uib.no/" text="Go to project" />
    </Card>
  );
}
