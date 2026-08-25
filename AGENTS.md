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

Venue: One Thousand Museum, Miami

Access: Invite only, limited capacity

## Scope

The event is invite only, so the site must not sell tickets. Priorities in order: the announcement itself, an RSVP or invite flow, lineup and venue details, and email capture for future sessions. Anything resembling public ticket checkout is out of scope.

## Brand direction

Taken from the event flyer. Warm off-white paper background with visible grain and texture. Ochre gold as the single accent. Near-black charcoal for the silhouette and for headline type. Halftone dot fields and a faint gold line drawing of the Miami skyline along the bottom. Type pairs a condensed uppercase sans for names and labels with a rough handwritten script for the I Love Afro House lockup. The feel is a printed riso poster or zine, not a glossy club flyer. Keep it restrained: paper, gold, charcoal, and nothing else.

## Status

Early planning. No stack has been chosen yet. Ask before scaffolding a framework or adding build tooling.

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

To be filled in once the stack exists: install, dev, build, test.
