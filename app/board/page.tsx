import { getArcanumForUser } from "@/domain/services/getArcanumForUser";
import CardBoard from "../components/CardBoard";

type Props = {
  searchParams: Promise<{ userId?: string }>;
};

export default async function Board({ searchParams }: Props) {
  const { userId } = await searchParams;

  const todaysArcanum = getArcanumForUser(userId);

  return <CardBoard arcanum={todaysArcanum} />;
}
