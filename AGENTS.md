# AGENTS.md

Instructions for AI agents working in this repository.

## Project

I Love Afro House, Private Session 002. A one-night Afro house event at One Thousand Museum in Miami. This repo holds the event site and supporting material.

## Event details

Name: I Love Afro House

Session: Private Session 002

Headliner: Shimza

Support: Gilo, styled GILO with a macron over the o

Date: Friday, September 18, 2026

Time: 9:00 pm

Venue: One Thousand Museum, Miami Beach, Apt 4802

Access: Invite only, limited capacity

## Scope

The event is invite only, so the site must not sell tickets. Priorities in order: the announcement itself, an RSVP or invite flow, lineup and venue details, and email capture for future sessions. Anything resembling public ticket checkout is out of scope.

## Brand direction

Dark luxury. Chosen direction for Session 002.

Deep near-black charcoal ground with subtle film grain. Ochre gold as the single accent — type, halftone highlights, skyline line art, and frame details. Near-black silhouettes with gold halftone shading. Type pairs a condensed uppercase sans for names and labels with a handwritten script for the I Love Afro House lockup. Faint gold Miami skyline along the bottom. Thin gold corner brackets where framing is needed.

The feel is exclusive and editorial — Shimza-level premium, not glossy club flyer. Keep it restrained: black, gold, charcoal, and soft off-white for secondary type only.

Reference assets live in `assets/` and `site/assets/`. Paper/riso variant exists but is not the default.

## Status

Static HTML/CSS site preview in `site/`. No framework or build tooling yet. Ask before adding either.

## Ground rules

Keep changes small and reviewable, one concern per commit.

Do not add dependencies without explaining why in the commit message.

Never commit secrets, API keys, or guest data. The guest list is private.

If something is ambiguous, leave a TODO comment rather than guessing.

Do not reformat unrelated files.

## Conventions

Branch names: feat/ for features, fix/ for bugs, chore/ for maintenance.

Commit messages: imperative present tense. Example: Add lineup section.

## Open questions

Domain and hosting.

Whether RSVP is a form, an invite code check, or a link to an external guest list tool.

Whether Session 001 and future sessions get an archive page.

Who owns the flyer artwork and whether it can be used on the site.

Exact venue address and any door or arrival instructions.

## Commands

Preview the site from `site/`:

```bash
cd site && python3 -m http.server 8080
```

Then open http://localhost:8080/
