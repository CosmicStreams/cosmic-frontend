# Cosmic Streams Frontend

An immersive, real-time dashboard for managing and visualizing asset streams on the Stellar network.

## Features

- **Immersive Visualizations**: See your assets flow in real-time with our custom streaming visualizer.
- **Wallet Connect**: Integrated with **Freighter** for secure transaction signing.
- **Stream Management**: Easily create, update, and redirect streams with a few clicks.
- **Cosmic Theme**: A sleek, dark-mode first design optimized for high-performance streaming data.

## Tech Stack

- **Framework**: React 18+ (Vite)
- **Language**: TypeScript / JSX
- **Styling**: Tailwind CSS / Custom Modules
- **Stellar Interaction**: @stellar/freighter-api, stellar-sdk

## Getting Started

### Prerequisites

- Node.js 20+
- [Freighter Extension](https://www.freighter.app/)

### Installation

1. **Clone & Install**:
   ```bash
   npm install
   ```
2. **Environment**:
   ```bash
   cp .env.example .env.local
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```

## Component Structure

- `src/components/Visualizer.jsx`: The core real-time flow visualization engine.
- `src/components/StreamCard.jsx`: Individual stream status and action component.
- `src/utils/stellar.js`: Wrapper for Horizon and Soroban RPC interactions.

## License

MIT License.
