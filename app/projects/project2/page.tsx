import Link from "next/link";
import Card from "@/app/components/card";

export default function Project2() {
    
  return (
      <Card title="Days until date">           
          <p> This is another one of my projects. This one is rather simple and was one I made because I was exited for the new hunger games movie to come out.
              so the primary function of this project is simply to show the time until a given date, or how many days have passed if the date is in the past.
          </p>
          <Link 
          href="https://days-until-date.vercel.app/" 
          target="_blank"
          className="flex flex-row gap-1 items-center rounded-md p-4 bg-gradient-to-br from-blue-400 to-green-400 hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-400"
          > Go to project </Link>
      </Card>
  );
}
