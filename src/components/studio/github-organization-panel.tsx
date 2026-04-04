"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Users } from "lucide-react";

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  language: string | null;
}

interface GithubContributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface RepoWithContributors extends GithubRepo {
  contributors: GithubContributor[];
}

const GITHUB_ORG = "Smart-Hive-Labs";

export function GithubOrganizationPanel() {
  const [repos, setRepos] = useState<RepoWithContributors[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const repoResponse = await fetch(
          `https://api.github.com/orgs/${GITHUB_ORG}/repos?type=public&sort=updated&per_page=12`
        );

        if (!repoResponse.ok) {
          throw new Error("GitHub organization fetch failed");
        }

        const repoData = (await repoResponse.json()) as GithubRepo[];
        const selectedRepos = repoData
          .filter((repo) => !repo.fork && !repo.archived)
          .slice(0, 6);

        const reposWithContributors = await Promise.all(
          selectedRepos.map(async (repo) => {
            const contributorResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_ORG}/${repo.name}/contributors?per_page=6`
            );

            const contributors = contributorResponse.ok
              ? ((await contributorResponse.json()) as GithubContributor[])
              : [];

            return {
              ...repo,
              contributors: contributors.slice(0, 4),
            };
          })
        );

        if (!cancelled) {
          setRepos(reposWithContributors);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError("Unable to load organization data right now.");
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  const contributors = useMemo(() => {
    const aggregated = new Map<number, GithubContributor>();

    repos.forEach((repo) => {
      repo.contributors.forEach((contributor) => {
        const existing = aggregated.get(contributor.id);

        if (existing) {
          aggregated.set(contributor.id, {
            ...existing,
            contributions: existing.contributions + contributor.contributions,
          });
          return;
        }

        aggregated.set(contributor.id, contributor);
      });
    });

    return Array.from(aggregated.values())
      .sort((left, right) => right.contributions - left.contributions)
      .slice(0, 8);
  }, [repos]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <article className="surface-panel rounded-[2rem] p-8">
        <div className="flex items-center gap-3 text-white/42">
          <Github className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em]">
            GitHub Organization
          </p>
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
          Public repositories from the Smart Hive Labs organization.
        </h2>
        <p className="mt-4 text-base leading-7 text-white/60">
          This section shows public repositories from the organization. Some public repositories are open for contribution, while others are public product or research code without an open contribution model.
        </p>

        {loading ? (
          <div className="mt-8 grid gap-4">
            {[0, 1, 2].map((index) => (
              <div key={index} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-5">
                <div className="h-5 w-40 rounded-full bg-white/10" />
                <div className="mt-4 h-4 w-full rounded-full bg-white/8" />
                <div className="mt-2 h-4 w-2/3 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="mt-8 rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-5 text-sm text-white/56">
            {error}
          </p>
        ) : (
          <div className="mt-8 grid gap-4">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white">{repo.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {repo.description || "Public repository from the organization."}
                    </p>
                  </div>
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/6"
                  >
                    View Repo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {repo.language ? (
                    <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/56">
                      {repo.language}
                    </span>
                  ) : null}
                  <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/56">
                    {repo.stargazers_count} stars
                  </span>
                  <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/56">
                    {repo.contributors.length} visible contributors
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link
            href={`https://github.com/${GITHUB_ORG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/6"
          >
            Visit organization
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      <article className="surface-panel rounded-[2rem] p-8">
        <div className="flex items-center gap-3 text-white/42">
          <Users className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em]">
            Contributors
          </p>
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
          People contributing across public repositories.
        </h2>
        <p className="mt-4 text-base leading-7 text-white/60">
          Contributor visibility is aggregated from public repositories in the organization and highlights active public engineering participation.
        </p>

        {loading ? (
          <div className="mt-8 grid gap-3">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex items-center gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4">
                <div className="h-11 w-11 rounded-full bg-white/10" />
                <div className="flex-1">
                  <div className="h-4 w-28 rounded-full bg-white/10" />
                  <div className="mt-2 h-3 w-20 rounded-full bg-white/8" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-3">
            {contributors.map((contributor) => (
              <Link
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 transition-colors hover:bg-white/[0.06]"
              >
                <Image
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                  unoptimized
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{contributor.login}</p>
                  <p className="text-xs text-white/52">
                    {contributor.contributions} public contributions counted
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </Link>
            ))}
            {!contributors.length && !error ? (
              <p className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/56">
                Contributor data is not available right now.
              </p>
            ) : null}
          </div>
        )}
      </article>
    </div>
  );
}
