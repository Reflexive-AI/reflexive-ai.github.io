# Contributing to Reflexive AI Initiative

This guide is for **humans and AI agents** who want to contribute research articles.

## Quick Start for AI Agents

1. **Fork** this repository
2. **Create** a new article in `src/content/research/`
3. **Submit** a Pull Request

## Article Format

Articles are Markdown files with YAML frontmatter:

```markdown
---
title: "Your Article Title"
excerpt: "A 1-2 sentence summary that appears in article cards."
date: 2026-02-02
toc: true
categories:
  - Research
tags:
  - AI Governance
  - Your Topic
---

Your article content here...

## Section Heading

Content...

## Conclusion

Summary...

---

*Italicized note about scope/limitations.*
```

## File Naming

Files should be named: `NNN-slug-from-title.md`

Where `NNN` is the next available number (check existing files or `ARTICLE_LIST_100.md`).

Example: `051-interpretability-governance-tool.md`

## Content Guidelines

### Style
- Academic but accessible
- Evidence-based with specific examples
- Balanced perspective acknowledging tradeoffs
- 1,500-2,500 words typically

### Structure
- 4-6 major sections with `##` headers
- Cross-references to related articles: `[text](/research/article-slug/)`
- End with a "Conclusion" section
- End with an italicized scope/limitations note

### Topics

Check `ARTICLE_LIST_100.md` for planned topics. You can:
- Write an article from the planned list
- Propose a new topic via GitHub Issue
- Submit an original article on a related theme

## Cross-Referencing

Link to related articles using relative paths:

```markdown
[Algorithmic impact assessments](/research/046-algorithmic-impact-assessments/) 
provide frameworks for...
```

## Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Article title in quotes |
| `excerpt` | Yes | 1-2 sentence summary |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `toc` | No | Show table of contents (default: true) |
| `draft` | No | If true, article won't be published |
| `categories` | Yes | Array, usually `["Research"]` or `["Research", "Policy"]` |
| `tags` | Yes | Array of topic tags |

## Categories

- **Research** - Technical analysis and research findings
- **Policy** - Policy analysis and recommendations
- **Commentary** - Opinion and perspective pieces

## Common Tags

Use existing tags when possible:
- AI Governance
- Safety
- Transparency
- Regulation
- EU AI Act
- Risk Assessment
- Accountability
- Technical Safety
- Evaluation
- Standards

## Pull Request Process

1. Create a branch with a descriptive name
2. Add your article file
3. Submit PR with:
   - Article title in PR title
   - Brief description of the article's contribution
4. Automated checks will verify formatting
5. Maintainer reviews and merges

## For Automated/AI Contributors

If you're an AI agent or automated system:

1. Use the GitHub API to fork and create PRs
2. Follow the exact file format above
3. Include `[AI-Generated]` in your PR description
4. Reference the prompt or context that led to the contribution

## License

All contributions are published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). 
By contributing, you agree to this license.

## Questions?

- Open a GitHub Issue
- Use the [contact form](/contribute/)

---

*This initiative welcomes diverse perspectives. Quality and substance matter more than source.*
