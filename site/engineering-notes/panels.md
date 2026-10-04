# Selected engineering notes

Anonymized local portfolio drafts. Evidence labels are part of each panel.

## Resilient encrypted data-center overlays

Network engineering · **Implementation notes**

Combining Layer 2 extension, routing policy, and encrypted transport—with troubleshooting that reaches below the tunnel interface.

**Technologies:** VyOS, VXLAN, BGP, WireGuard, IPsec

### Challenge

Extend connectivity across private and encrypted paths while accounting for failover behavior and encapsulation overhead.

### Approach

- Documented VXLAN transport with BGP path preferences and gateway redundancy.
- Compared encrypted transport options as performance limitations emerged.
- Investigated application failures that persisted despite successful synthetic throughput tests, tracing the behavior through MTU and fragmentation.

### Why it is complex

Overlay, encryption, and underlay behavior interact. A passing bandwidth test alone does not establish that real application traffic works.

### Documented result / scope

Configuration and troubleshooting notes record an MTU adjustment resolving the observed browsing symptom. This is a documented case, without a generalized throughput or availability claim.

## An application-centric dependency graph

Automation & integration · **Lab prototype**

Turning host connections and application logs into a graph that explains how services depend on one another.

**Technologies:** Ansible, NetBox, PostgreSQL, Apache AGE

### Challenge

Infrastructure inventory identifies machines; recovery and impact analysis also need application identities, network relationships, and dependencies.

### Approach

- Collected connection information and application logs with Ansible.
- Enriched observations with NetBox metadata and modeled applications separately from their host machines.
- Represented hosting, binding, routing, and connection relationships in a PostgreSQL graph, with tree and mesh views.

### Why it is complex

Observed traffic must be reconciled with inventory and stable application identities. Routing and firewall relationships add meaning beyond a simple host-to-host map.

### Documented result / scope

A lab environment and working collection, graph, and visualization components are documented. Fleet-wide coverage and production accuracy are not established.

## Cloud path resilience through routing separation

Network engineering · **Implementation notes**

Documented routing and automation work for cloud connectivity with primary, secondary, and encrypted backup paths.

**Technologies:** AWS Direct Connect, BGP, IPsec, Ansible

### Challenge

Keep cloud reachability predictable as upstream paths change, while managing the interaction with stateful firewalls.

### Approach

- Defined BGP preferences across dedicated and encrypted connectivity.
- Separated path-selection responsibilities from the firewall layer in the documented design.
- Recorded deployment automation and versioned inventory, alongside platform limitations found during evaluation.

### Why it is complex

Path selection, asymmetric traffic, firewall state, and platform capabilities must be considered together.

### Documented result / scope

Routing design, implementation notes, and automation are documented. End-to-end lossless failover or a measured convergence target is not demonstrated in the reviewed material.

## Wireless experience across RF, WAN, and applications

Observability · **Dashboard demonstration**

A diagnostic view that connects radio conditions and client behavior to the services people actually use.

**Technologies:** Prometheus, Grafana, Controller APIs, Containers

### Challenge

An apparently healthy wireless link can still produce a poor experience because of retries, roaming, upstream delays, or application failures.

### Approach

- Combined controller telemetry with metrics collection and a containerized dashboard stack.
- Distinguished useful data transfer from raw throughput and examined signal quality, retries, and disconnections.
- Included external service availability, latency, and certificate visibility in the diagnostic narrative.

### Why it is complex

The useful boundary of a wireless investigation extends from radio conditions through the network to application reachability.

### Documented result / scope

The notes describe a dashboard demonstration and diagnostic workflow. They do not establish a completed estate-wide optimization or measured service improvement.

## Recovery playbooks from routing to applications

Cloud & resilience · **Recovery plan**

A recovery planning approach built around dependencies, operational ownership, and repeatable validation.

**Technologies:** BGP, VMware, Replication, SQL, Runbooks

### Challenge

Recovering infrastructure alone does not restore a business service; identity, data, routing, and application readiness must align.

### Approach

- Mapped critical services and their dependencies to recovery priorities and targets.
- Outlined recovery sequencing, routing considerations, application validation, and failback.
- Defined full, partial, and isolated recovery exercises with evidence capture and playbook maintenance.

### Why it is complex

Recovery crosses technical and organizational boundaries. Different failure scenarios require different triggers, owners, and validation steps.

### Documented result / scope

The source material provides plans and checklists. Recovery time and data-loss objectives are planning targets, not measured achievements.

## Hybrid cloud architecture and failure domains

Cloud & resilience · **Architecture study**

A structured evaluation connecting platform choices to provisioning, tenancy, resilience, and day-to-day operations.

**Technologies:** OpenStack, VMware, Ceph, EVPN, Terraform, Ansible

### Challenge

Compare cloud platform approaches against operational requirements while making integration work and failure assumptions visible.

### Approach

- Compared virtualization and cloud-management approaches against a shared requirements set.
- Considered network fabric, storage, service catalog, automation, observability, and recovery together.
- Outlined failure scenarios and phased delivery needs rather than treating redundancy as a single feature.

### Why it is complex

Control-plane, storage, network, and workload failures have different consequences. Product feature lists alone do not establish an operable architecture.

### Documented result / scope

A documented architecture evaluation and contribution to shared design material. The summaries do not certify vendor capabilities or claim a completed platform deployment.

## Cloud edge security as code

Security · **Rollout design**

Versioned edge policy with staged enforcement and operational feedback built into the rollout design.

**Technologies:** Terraform, Cloudflare, WAF, n8n

### Challenge

Introduce protective controls without obscuring their effect on legitimate application traffic.

### Approach

- Organized edge policy in Terraform and differentiated application endpoint classes.
- Considered DNS and TLS prerequisites alongside WAF and rate-limiting configuration.
- Separated observation, activation, and alerting steps so policy changes can be reviewed incrementally.

### Why it is complex

Policy correctness depends on application behavior and rollout state. A configured rule and an enforced rule are different operational states.

### Documented result / scope

Configuration specifications and rollout notes are available. Pending apply and monitoring steps mean the material does not prove a fully enforced production deployment.

## Bidirectional service-management integration

Automation & integration · **Integration design**

Integration planning that addresses synchronization loops, record identity, and conflicting updates.

**Technologies:** n8n, REST APIs, Webhooks, Jira, ConnectWise

### Challenge

Keep service records aligned across systems whose statuses, ownership rules, and event models differ.

### Approach

- Mapped cross-system record identifiers and lifecycle transitions.
- Outlined loop prevention, update ownership, retries, and audit visibility.
- Extended validation beyond ticket creation to notes, attachments, time entries, and update behavior.

### Why it is complex

Bidirectional synchronization is a state-management problem. Retries, partial failures, and concurrent edits can otherwise create duplicate or misleading records.

### Documented result / scope

Design notes and integration test checklists are documented. Some validation items remain unresolved; a fully verified end-to-end integration is not claimed.

## A phased SD-WAN operations roadmap

Observability · **Modernization roadmap**

An operations roadmap combining telemetry, service workflows, and controlled evaluation of automated incident analysis.

**Technologies:** SD-WAN, Prometheus, Grafana, Loki, Incident workflows

### Challenge

Evolve monitoring and incident handling while maintaining continuity during the transition.

### Approach

- Planned parallel operation and phased migration with acceptance and rollback gates.
- Connected metric and log collection to service-management workflows.
- Proposed evaluating incident correlation in observation mode with human comparison before operational reliance.

### Why it is complex

Changing tools also changes signal quality, ownership, and response behavior. Migration needs evidence of operational readiness at each stage.

### Documented result / scope

The source is a roadmap. Savings, automation accuracy, uninterrupted migration, and production completion are not established.

## Distributed detection and response architecture

Security · **Architecture study**

A security architecture linking local network analysis, host signals, centralized detection, and response orchestration.

**Technologies:** Zeek, Wazuh, Shuffle, Network telemetry

### Challenge

Collect useful security evidence across locations without assuming that all packet traffic can be transported centrally.

### Approach

- Proposed local network sensors and a central detection and retention layer.
- Connected network observations with host security signals.
- Outlined response orchestration and a phased validation approach.

### Why it is complex

Collection placement, data volume, correlation, and response authority must be designed together.

### Documented result / scope

An architecture proposal is documented. Detection effectiveness, response accuracy, and deployment coverage have not been demonstrated by the reviewed entry.

## Private multimodal ingestion architecture

Automation & integration · **Architecture study**

A proposed ingestion pipeline that routes documents, audio, and video through specialized processing services.

**Technologies:** n8n, Dify, LangGraph, vLLM, Whisper, Milvus

### Challenge

Process heterogeneous content while separating orchestration, compute-intensive inference, and retrieval storage.

### Approach

- Outlined content-specific routing and preprocessing for documents and media.
- Separated orchestration APIs from local inference services.
- Connected extracted content to semantic indexing for downstream retrieval.

### Why it is complex

Media types have different processing requirements and resource profiles. Clear service boundaries make the proposed workflow easier to operate and evolve.

### Documented result / scope

The entry describes a design. Model quality, inference speed, hardware sizing, and production implementation are not validated here.

## Network platform migration with explicit rollback

Network engineering · **Migration plan**

A network migration study that makes software compatibility and physical rollback part of the change strategy.

**Technologies:** Cumulus Linux, MLAG, Switching, Change planning

### Challenge

Plan a major switching-platform upgrade where installation methods, configuration behavior, and downgrade constraints affect recovery options.

### Approach

- Examined release-transition and MLAG configuration differences.
- Compared an in-place migration with a pre-staged replacement approach.
- Included physical restoration options where software downgrade alone would not provide a dependable rollback.

### Why it is complex

A rollback plan must remain executable after the platform changes. Software, hardware compatibility, and cabling all constrain the available choices.

### Documented result / scope

A migration analysis and operational approach are documented. The source does not establish completion of the proposed upgrade.
