# SocialDesk — AI Social Media Handler

A full-featured social media management app for marketing teams, powered by Claude AI.

## Features

- **Compose** — Multi-platform post editor (Twitter/X, Instagram, LinkedIn, Facebook) with AI writing tools (Improve, Shorter, Expand, Add Hook, Hashtags, CTA, Repurpose for all platforms)
- **Idea Generator** — Topic-based AI post idea generation with platform-specific optimisation
- **Content Queue** — Schedule, draft, and approval workflow with team reviewer assignment
- **Reply Manager** — AI-suggested responses to comments, with one-click regeneration
- **Analytics** — Engagement dashboard with per-platform breakdown and top post rankings

## Getting Started

### Prerequisites
- Node.js 16+ and npm installed
- An [Anthropic API key](https://console.anthropic.com/keys)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

This creates an optimised production build in the `build/` folder.

## Usage

1. Open the app and enter your Anthropic API key in the banner at the top.
2. Navigate using the sidebar:
   - **Compose** → write a post, pick a tone, use AI tools to refine it, schedule it.
   - **Idea Generator** → enter a topic or click a quick prompt, Claude generates 4 platform-specific ideas. Click any idea to load it in Compose.
   - **Queue** → view all scheduled/draft/review posts. Approve, edit, or delete.
   - **Replies** → review AI-suggested responses to comments, edit inline, and send.
   - **Analytics** → see reach, engagement, follower growth, and top posts.

## Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — utility-first styling
- **Claude API** (claude-sonnet-4-20250514) — AI writing, idea generation, reply suggestions

## Project Structure

```
src/
  components/
    Sidebar.jsx        — Navigation sidebar with team avatars
    ApiKeyBanner.jsx   — API key input and status
    Compose.jsx        — Post editor with AI tools
    IdeaGenerator.jsx  — Topic-based idea generation
    Queue.jsx          — Content scheduling queue
    Replies.jsx        — Comment reply manager
    Analytics.jsx      — Performance dashboard
  hooks/
    useApiKey.js       — API key state and Claude API calls
  App.jsx              — Main shell and routing
  index.js             — Entry point
  index.css            — Global styles + Tailwind directives
```
