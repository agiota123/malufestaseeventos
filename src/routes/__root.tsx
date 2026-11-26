import { useMatches as useImportedMatches } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <meta name="robots" content="noindex,follow" />
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          MALU Festas e Eventos
        </p>
        <h1 className="mt-2 text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Esta página não foi encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço pode ter mudado. Volte ao início ou navegue pelas informações do salão e do
          buffet.
        </p>
        <nav aria-label="Links úteis" className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <a href="/#salao" className="underline underline-offset-4">
            Conhecer o salão
          </a>
          <a href="/#brinquedos" className="underline underline-offset-4">
            Ver brinquedos
          </a>
          <a href="/#buffet" className="underline underline-offset-4">
            Conhecer o buffet
          </a>
          <a href="/#contato" className="underline underline-offset-4">
            Falar com a MALU
          </a>
        </nav>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-for...[truncated]