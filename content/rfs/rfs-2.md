---
number: 2
title: "Onchain Agent Registry with Filecoin-Backed State"
slug: "rfs-2"
description: "Deploy AI agents as first-class onchain citizens — individually registered, discoverable, and addressable onchain, with persistent state and execution logs stored on Filecoin."
---

## Concept

Deploy AI agents as first-class onchain citizens: individually registered via Ethereum onchain registries (ERC-8004 or similar), discoverable and addressable onchain, with persistent state, metadata, and execution logs stored on Filecoin.

Agents should be cheap, numerous, and semi-specialized. Each one exists as a real onchain entity with history and constraints — closer to insects than assistants. The registry enables coordination, lookup, and delegation at scale.

## Core Deliverables

- Ethereum registry contracts for agent registration and discovery
- FOC-based storage layer for agent metadata (capabilities, versioning), persistent state, and execution logs
- Hundreds to thousands of live agents operating concurrently
- Coordination demos: agent-to-agent querying, role-based task routing, swarm behavior
- Explorer or dashboard showing registered agents, Filecoin storage usage, uptime, and interactions

## Why This Matters

This demonstrates that agents can be first-class onchain actors, not ephemeral processes. Ethereum handles coordination and identity; Filecoin handles memory and durability. Large agent swarms are economically viable only when storage is cheap, verifiable, and permissionless. This is machine-native cloud infrastructure — not AI wrappers.

## How to Get Started

- Deploy a minimal ERC-8004-style registry on Ethereum
- Define a standard agent metadata schema (CID-addressed)
- Store agent state and logs via FOC SDK
- Spin up an agent swarm with deterministic identities and bounded storage budgets
- Build a simple UI to browse agents and trace Filecoin-backed history
