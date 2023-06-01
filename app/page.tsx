import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
};

// fetch data from rawg api
const getGames = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();

  return data.results;
};

// make a function to show the data with card
const GameCard = ({ game }: { game: Game }) => (
  <Card className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden  m-2">
    <CardHeader className="bg-indigo-600 py-4 px-6">
      <CardTitle className="text-2xl font-bold">{game.name}</CardTitle>
      <CardDescription className="text-gray-300">
        {game.released}
      </CardDescription>
    </CardHeader>
    <CardContent className="py-6 w-full px-6 relative">
      {game.background_image && (
        <div className="aspect-video relative">
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </CardContent>
    <CardFooter className=" py-4 px-6">
      <Link href={`/games/${game.slug}`}>
        <Button className=" bg-indigo-600">
          <svg
            className="text-sm w-4 h-4 text-blue-300 mr-2 hover:text-blue-200 hover:underline"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <p className="text-sm text-blue-300 hover:text-blue-200 hover:underline">
            Read More
          </p>
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export default async function Home() {
  const games = await getGames();

  return (
    <>
      {/* show the card */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>

      <Table className="bg-sky-400 max-w-xl mx-auto">
        <TableCaption>A list of games.</TableCaption>
        <TableHeader className="border-b">
          <TableRow>
            <TableHead className="w-[100px]">Game Name</TableHead>
            <TableHead>Release</TableHead>
            <TableHead>SLUG</TableHead>
            <TableHead className="text-right">Game Cover</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {games.map((game) => (
            <TableRow className="border-b" key={game.id}>
              <TableCell className="font-medium">{game.name}</TableCell>
              <TableCell>{game.released}</TableCell>
              <TableCell>{game.slug}</TableCell>
              <TableCell className="text-right">
                {game.background_image && (
                  <Image
                    src={game.background_image}
                    alt={game.name}
                    width={100}
                    height={100}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
