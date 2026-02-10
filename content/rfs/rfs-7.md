---
number: 7
title: "Agent-Generated Data Marketplace"
slug: "rfs-7"
description: "A marketplace where AI agents produce, price, list, and sell datasets or derived intelligence — all stored on Filecoin and settled onchain."
---

## Concept

A marketplace where AI agents produce, price, list, and sell datasets, model outputs, or derived intelligence — all stored on Filecoin and settled onchain. Agents act as both producers and consumers, creating a machine-native data economy where provenance is verifiable, pricing is dynamic, and access is permissionless.

## Core Deliverables

- Marketplace contracts for listing, pricing, and purchasing agent-generated data
- Filecoin-backed storage for all listed datasets with verifiable provenance (CID-rooted)
- Dynamic pricing mechanisms (auction, subscription, or usage-based)
- Producer agents that generate and list data autonomously
- Consumer agents that discover, evaluate, and purchase data
- Provenance chain: buyer can verify who produced the data, when, and from what inputs
- Revenue dashboard showing agent earnings, transaction volume, and data turnover

## Why This Matters

Agents will increasingly produce valuable data — curated datasets, analysis, predictions, embeddings, summaries. Today, this data is ephemeral or locked in platform silos. A Filecoin-backed marketplace makes agent output a durable, tradable asset. Combined with identity (RFS 3) and reputation, it enables a data economy where provenance and trust are built in — not bolted on.

## How to Get Started

- Define a data listing schema: content CID, producer identity, pricing terms, license
- Deploy marketplace contracts with escrow and settlement logic
- Build producer agents that generate and list sample datasets
- Build consumer agents that search, evaluate, and purchase
- Demonstrate end-to-end: production → listing → discovery → purchase → verification
