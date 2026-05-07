/**
 * CMS fetch helpers for smarthivelabs.dev
 *
 * Base URL is driven by NEXT_PUBLIC_CMS_API_URL (set at build / runtime).
 * All fetches revalidate every 60 seconds via Next.js ISR.
 * Every function returns the static fallback data on error so the site
 * never hard-crashes if the CMS is unreachable.
 */

import {
  serviceOffers,
  caseStudies,
  developerProfiles,
  vacancies,
  careerTracks,
  openSourceEntries,
  type ServiceOffer,
  type CaseStudy,
  type DeveloperProfile,
  type Vacancy,
  type CareerTrack,
  type OpenSourceEntry,
  type ProjectMetric,
} from "@/data/siteContent";

const BASE_URL =
  process.env.NEXT_PUBLIC_CMS_API_URL ?? "http://localhost:4100";

const REVALIDATE = { next: { revalidate: 60 } } as const;

// ---------------------------------------------------------------------------
// Low-level fetch wrapper
// ---------------------------------------------------------------------------

async function apiFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE_URL}${path}`, REVALIDATE);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Raw API shapes (snake_case from the backend)
// ---------------------------------------------------------------------------

interface ApiServiceOffer {
  title: string;
  category: string;
  positioning: string;
  business_value: string;
  deliverables: string[];
  technologies: string[];
  use_cases?: string[];
}

interface ApiProjectMetric {
  label: string;
  value: string;
}

interface ApiProject {
  slug: string;
  title: string;
  type: string;
  visibility: string;
  status: string;
  summary: string;
  description: string;
  capabilities: string[];
  tags: string[];
  metrics?: ApiProjectMetric[];
  links?: { href: string; label: string }[];
  confidentiality_note?: string;
}

interface ApiDeveloper {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  specialties: string[];
  image: string;
  links?: { href: string; label: string }[];
  show_on_dev?: boolean;
}

interface ApiVacancy {
  title: string;
  team: string;
  level: string;
  location: string;
  status: string;
  summary: string;
  requirements: string[];
  apply_url?: string;
}

interface ApiCareerTrack {
  title: string;
  audience: string;
  summary: string;
  highlights: string[];
}

interface ApiOpenSource {
  title: string;
  summary: string;
  focus: string;
  stack: string[];
  repository: string;
  contribution_url?: string;
  issues_url?: string;
}

// ---------------------------------------------------------------------------
// Normalizers — snake_case → camelCase matching component interfaces
// ---------------------------------------------------------------------------

function normalizeService(raw: ApiServiceOffer): ServiceOffer {
  return {
    title: raw.title,
    category: raw.category as ServiceOffer["category"],
    positioning: raw.positioning,
    businessValue: raw.business_value,
    deliverables: raw.deliverables ?? [],
    technologies: raw.technologies ?? [],
    useCases: raw.use_cases,
  };
}

function normalizeProject(raw: ApiProject): CaseStudy {
  return {
    slug: raw.slug,
    title: raw.title,
    type: raw.type as CaseStudy["type"],
    visibility: raw.visibility as CaseStudy["visibility"],
    status: raw.status as CaseStudy["status"],
    summary: raw.summary,
    description: raw.description,
    capabilities: raw.capabilities ?? [],
    tags: raw.tags ?? [],
    metrics: raw.metrics as ProjectMetric[] | undefined,
    links: raw.links,
    confidentialityNote: raw.confidentiality_note,
  };
}

function normalizeDeveloper(raw: ApiDeveloper): DeveloperProfile {
  return {
    name: raw.name,
    role: raw.role,
    discipline: raw.discipline,
    bio: raw.bio,
    specialties: raw.specialties ?? [],
    image: raw.image,
    links: raw.links,
  };
}

function normalizeVacancy(raw: ApiVacancy): Vacancy {
  return {
    title: raw.title,
    team: raw.team,
    level: raw.level,
    location: raw.location,
    status: raw.status as Vacancy["status"],
    summary: raw.summary,
    requirements: raw.requirements ?? [],
    applyUrl: raw.apply_url,
  };
}

function normalizeCareerTrack(raw: ApiCareerTrack): CareerTrack {
  return {
    title: raw.title,
    audience: raw.audience,
    summary: raw.summary,
    highlights: raw.highlights ?? [],
  };
}

function normalizeOpenSource(raw: ApiOpenSource): OpenSourceEntry {
  return {
    title: raw.title,
    summary: raw.summary,
    focus: raw.focus,
    stack: raw.stack ?? [],
    repository: raw.repository,
    contributionUrl: raw.contribution_url,
    issuesUrl: raw.issues_url,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function getServiceOffers(): Promise<ServiceOffer[]> {
  const data = await apiFetch<ApiServiceOffer[]>("/engineering/services");
  if (!data) return serviceOffers;
  return data.map(normalizeService);
}

export async function getProjects(): Promise<CaseStudy[]> {
  const data = await apiFetch<ApiProject[]>("/engineering/projects");
  if (!data) return caseStudies;
  return data.map(normalizeProject);
}

export async function getProject(slug: string): Promise<CaseStudy | null> {
  const data = await apiFetch<ApiProject>(`/engineering/projects/${slug}`);
  if (!data) {
    return caseStudies.find((p) => p.slug === slug) ?? null;
  }
  return normalizeProject(data);
}

export async function getDeveloperTeam(): Promise<DeveloperProfile[]> {
  const data = await apiFetch<ApiDeveloper[]>("/engineering/team");
  if (!data) return developerProfiles;
  return data.map(normalizeDeveloper);
}

export async function getVacancies(): Promise<Vacancy[]> {
  const data = await apiFetch<ApiVacancy[]>("/engineering/vacancies");
  if (!data) return vacancies;
  return data.map(normalizeVacancy);
}

export async function getCareerTracks(): Promise<CareerTrack[]> {
  const data = await apiFetch<ApiCareerTrack[]>("/engineering/career-tracks");
  if (!data) return careerTracks;
  return data.map(normalizeCareerTrack);
}

export async function getOpenSource(): Promise<OpenSourceEntry[]> {
  const data = await apiFetch<ApiOpenSource[]>("/engineering/open-source");
  if (!data) return openSourceEntries;
  return data.map(normalizeOpenSource);
}
