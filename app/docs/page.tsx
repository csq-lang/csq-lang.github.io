import type { Metadata } from "next";
import ExternalRedirect from "../components/ExternalRedirect";

export const metadata: Metadata = {
  title: "Docs · C² Language",
  description: "C² language documentation source repository.",
};

export default function DocsPage() {
  return (
    <ExternalRedirect
      to="https://github.com/csq-lang/docu"
      label="C² Documentation"
    />
  );
}
