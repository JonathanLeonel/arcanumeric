import { headers } from "next/headers";
import { getArcanumForUser } from "@/domain/services/getArcanumForUser";
import { Locale } from "@/domain/entities/arcanum";
import CardBoard from "../components/CardBoard";

type Props = {
  searchParams: Promise<{ userId?: string }>;
};

function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return "en";
  const primary = acceptLanguage.split(",")[0].split(";")[0].trim().toLowerCase();
  return primary.startsWith("es") ? "es" : "en";
}

export default async function Board({ searchParams }: Props) {
  const { userId } = await searchParams;
  const headersList = await headers();
  const locale = detectLocale(headersList.get("accept-language"));

  const todaysArcanum = getArcanumForUser(userId);

  return <CardBoard arcanum={todaysArcanum} locale={locale} />;
}
