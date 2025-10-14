---
sidebar_position: 1
title: My WriteTech Accelerator Portfolio
---

## Seyitan's WriteTech Accelerator Portfolio

Welcome! This repository contains all my project work and deliverables from the **WriteTech Accelerator Program**.

Over the course of the bootcamp, I completed technical writing projects across various domains — including API documentation, AI, DevOps, automation, and Web3 — using modern documentation workflows and tools.

## 👩🏽‍💻 About Me

I'm a technical writer with a background in cloud engineering and a passion for clear, user-focused documentation. This portfolio highlights the practical skills I’ve built during the WriteTech Accelerator.

## 📁 Project Modules

| Module | Final Deliverables |
|--------|---------------------|
| [Documentation Tooling & Static Site Generators](/docs/documentation-tooling/intro) | How-to guide for setting up a docs-as-code workflow using Docusaurus |
|[API Documentation & OpenAPI](./docs/api-documentation/) | Improved documentation for selected endpoints from a real or public API |
| Documentation Automation | Automated checks (style, links, builds) using tools like Vale, Spectral, and GitHub Actions |
|[AI for Documentation](./docs/ai-documentation/) |Comparison of AI tools or prompt-based documentation using your own examples |
|[DevOps & Cloud Documentation](./docs/devops-cloud-documentation/)| Step-by-step guide for a DevOps/cloud tool or process (e.g., CI/CD, deployment) |
|[Technical Writing in Web3](./docs/web3-documentation/) |  Whitepaper draft for a Web3 platform |

## 🔗 Additional Links

- [LinkedIn](https://www.linkedin.com/in/seyitan-oluwaseitan-83ab93251)
- [WriteTech Portfolio Website](https://writetech-accelerator-portfolio-sey-three.vercel.app/m)

Thanks for checking out my work!

## Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
