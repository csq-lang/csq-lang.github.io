import type { Metadata } from "next";
import ExternalRedirect from "../components/ExternalRedirect";

export const metadata: Metadata = {
  title: "Spec · C² Language",
  description: "C² language specification source repository.",
};

export default function SpecPage() {
  return (
    <ExternalRedirect to="https://github.com/csq-lang/spec" label="C² Spec" />
  );
}
