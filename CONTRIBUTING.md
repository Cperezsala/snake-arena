# Contributing Guide

This document describes the development workflow, commit strategy, and best practices for contributing to **Snake Arena**.

---

## 🌿 Branching Strategy

Main branches:

- `main` → stable, production-ready code
- `dev` → active development

Feature branches:

`feat/`

Examples:
- `feat/local-engine`
- `feat/canvas-renderer`
- `feat/keyboard-input`

### Workflow
`dev → feature → dev → main`

---

## 🧱 Commit Strategy

We follow the **Conventional Commits** specification.

### Commit format

`(optional-scope): short description`

### Types

- `feat` — new feature
- `fix` — bug fix
- `refactor` — code refactor (no behavior change)
- `chore` — tooling, config, cleanup
- `docs` — documentation
- `test` — tests

### Scopes (recommended)

- `engine`
- `renderer`
- `game`
- `input`
- `ws`
- `server`
- `lobby`

### Examples

- feat(engine): implement snake movement logic
- feat(renderer): render grid and snake on canvas
- feat(input): add keyboard controller
- fix(engine): prevent reverse direction bug
- docs: update project roadmap

---

## ✅ Commit Rules

- Keep commits **small and atomic**
- Each commit must:
  - Compile
  - Be runnable
  - Represent a single logical change

---

## 🧠 Development Principles

- Clean architecture
- Decoupled game engine
- Server-authoritative multiplayer design
- Small, incremental improvements

---

## 🔍 Code Quality

- Prefer readability over cleverness
- Use clear naming
- Keep functions small
- Avoid premature optimization