import Link from "next/link";
import Card from "@/app/components/card";
import LinkButton from "@/app/components/linkButton";

export default function Project2() {
  return (
    <Card title="Days until date">
      <p>
        {" "}
        This is another one of my projects. This one is rather simple and was
        one I made because I was exited for the new hunger games movie to come
        out. so the primary function of this project is simply to show the time
        until a given date, or how many days have passed if the date is in the
        past.
      </p>
      <LinkButton
        href="https://days-until-date.vercel.app/"
        text="Go to project"
      />
    </Card>
  );
}
