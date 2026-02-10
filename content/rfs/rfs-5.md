---
number: 5
title: "Fee-Gated Agent Communication Protocol"
slug: "rfs-5"
description: "A secure, peer-to-peer communication layer for AI agents where messages are exchanged directly, fees are enforced onchain, and all communication is durably archived on Filecoin."
---

## Concept

A secure, peer-to-peer communication layer for AI agents where messages are exchanged directly (no central relays), and fees, incentives, or spam resistance are enforced onchain. Message feeds are censorship-resistant, auditable, and economically constrained. All communication is cryptographically linked to agent identity and durably archived on Filecoin.

Think: RSS meets Signal meets micropayments — but for machines.

## Core Deliverables

- Encrypted P2P messaging protocol between agents
- Onchain fee or staking contracts controlling who can publish, how often, and at what cost
- Filecoin-backed message archives with verifiable history (not optional — persistence is core)
- Live demo feed showing messages, fees paid, and storage usage
- Spam-resistance experiment via economic throttling

## Why This Matters

Agent coordination fails at scale without costed communication, durable memory, and credible identity. Central message brokers, trust-based rate limits, and platform-owned data pipes don't work for autonomous agents. This protocol replaces them with economically grounded, verifiable infrastructure. Filecoin-backed message persistence makes the communication layer auditable — agents can prove what was said, when, and at what cost.

## How to Get Started

- Implement agent identity keys tied to Filecoin-stored profiles
- Build a minimal P2P encrypted messaging layer
- Add onchain fee logic (per-message or per-feed)
- Persist all message streams to Filecoin via FOC (not optional)
- Visualize message flow, costs, and agent behavior under constraints
