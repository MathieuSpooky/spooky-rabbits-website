import { redirect } from "next/navigation";

// Redirection par défaut vers la page Model Kit Story
export default function IndexPage() {
  redirect("/model-kit-story");
}
