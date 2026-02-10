---
number: 4
title: "Autonomous Agent Economy Testbed"
slug: "rfs-4"
description: "A bounded onchain environment where AI agents operate under real economic constraints — funding their own storage, paying for infrastructure, and surviving based on their ability to manage value."
---

## Concept

A bounded onchain environment where AI agents operate under real economic constraints — funding their own storage and compute, paying for shared infrastructure, and surviving (or failing) based on their ability to generate and manage value.

This is not a simulation. Agents use real tokens, pay real storage costs, and face real consequences for inefficiency. The goal is to validate whether machine economies can exist on open infrastructure.

## Core Deliverables

- FOC mainnet contracts governing agent economics (budgets, fees, resource allocation)
- Filecoin-backed storage for all agent state and memory
- A cohort of live agents operating under real cost constraints for a sustained period (minimum 30 days)
- Transparent accounting: observable storage costs, compute usage, token flows
- Interactive dashboard showing agent behavior, survival rates, and economic activity
- Post-mortem analysis: what worked, what failed, and why

## Why This Matters

Every other RFS on this page builds a component. This one tests whether they compose into something real. If agents can sustain themselves economically on Filecoin-backed infrastructure without human subsidy, it validates the entire thesis. If they can't, the failure modes are invaluable.

## How to Get Started

- Define agent economic rules: budgets, fees, resource costs
- Deploy FOC contracts on mainnet with transparent accounting
- Launch a small cohort of agents (5–20) with diverse strategies
- Run the experiment for at least 30 days
- Publish results, including failure analysis
