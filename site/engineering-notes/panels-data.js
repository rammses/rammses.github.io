window.PORTFOLIO_PANELS = [
  {
    "slug": "encrypted-overlays",
    "title": "Resilient encrypted data-center overlays",
    "category": "Network engineering",
    "evidence": "Implementation notes",
    "technologies": [
      "VyOS",
      "VXLAN",
      "BGP",
      "WireGuard",
      "IPsec"
    ],
    "summary": "Combining Layer 2 extension, routing policy, and encrypted transport—with troubleshooting that reaches below the tunnel interface.",
    "challenge": "Extend connectivity across private and encrypted paths while accounting for failover behavior and encapsulation overhead.",
    "approach": [
      "Documented VXLAN transport with BGP path preferences and gateway redundancy.",
      "Compared encrypted transport options as performance limitations emerged.",
      "Investigated application failures that persisted despite successful synthetic throughput tests, tracing the behavior through MTU and fragmentation."
    ],
    "complexity": "Overlay, encryption, and underlay behavior interact. A passing bandwidth test alone does not establish that real application traffic works.",
    "result": "Configuration and troubleshooting notes record an MTU adjustment resolving the observed browsing symptom. This is a documented case, without a generalized throughput or availability claim."
  },
  {
    "slug": "dependency-graph",
    "title": "An application-centric dependency graph",
    "category": "Automation & integration",
    "evidence": "Lab prototype",
    "technologies": [
      "Ansible",
      "NetBox",
      "PostgreSQL",
      "Apache AGE"
    ],
    "summary": "Turning host connections and application logs into a graph that explains how services depend on one another.",
    "challenge": "Infrastructure inventory identifies machines; recovery and impact analysis also need application identities, network relationships, and dependencies.",
    "approach": [
      "Collected connection information and application logs with Ansible.",
      "Enriched observations with NetBox metadata and modeled applications separately from their host machines.",
      "Represented hosting, binding, routing, and connection relationships in a PostgreSQL graph, with tree and mesh views."
    ],
    "complexity": "Observed traffic must be reconciled with inventory and stable application identities. Routing and firewall relationships add meaning beyond a simple host-to-host map.",
    "result": "A lab environment and working collection, graph, and visualization components are documented. Fleet-wide coverage and production accuracy are not established."
  },
  {
    "slug": "cloud-routing",
    "title": "Cloud path resilience through routing separation",
    "category": "Network engineering",
    "evidence": "Implementation notes",
    "technologies": [
      "AWS Direct Connect",
      "BGP",
      "IPsec",
      "Ansible"
    ],
    "summary": "Documented routing and automation work for cloud connectivity with primary, secondary, and encrypted backup paths.",
    "challenge": "Keep cloud reachability predictable as upstream paths change, while managing the interaction with stateful firewalls.",
    "approach": [
      "Defined BGP preferences across dedicated and encrypted connectivity.",
      "Separated path-selection responsibilities from the firewall layer in the documented design.",
      "Recorded deployment automation and versioned inventory, alongside platform limitations found during evaluation."
    ],
    "complexity": "Path selection, asymmetric traffic, firewall state, and platform capabilities must be considered together.",
    "result": "Routing design, implementation notes, and automation are documented. End-to-end lossless failover or a measured convergence target is not demonstrated in the reviewed material."
  },
  {
    "slug": "wireless-observability",
    "title": "Wireless experience across RF, WAN, and applications",
    "category": "Observability",
    "evidence": "Dashboard demonstration",
    "technologies": [
      "Prometheus",
      "Grafana",
      "Controller APIs",
      "Containers"
    ],
    "summary": "A diagnostic view that connects radio conditions and client behavior to the services people actually use.",
    "challenge": "An apparently healthy wireless link can still produce a poor experience because of retries, roaming, upstream delays, or application failures.",
    "approach": [
      "Combined controller telemetry with metrics collection and a containerized dashboard stack.",
      "Distinguished useful data transfer from raw throughput and examined signal quality, retries, and disconnections.",
      "Included external service availability, latency, and certificate visibility in the diagnostic narrative."
    ],
    "complexity": "The useful boundary of a wireless investigation extends from radio conditions through the network to application reachability.",
    "result": "The notes describe a dashboard demonstration and diagnostic workflow. They do not establish a completed estate-wide optimization or measured service improvement."
  },
  {
    "slug": "recovery-playbooks",
    "title": "Recovery playbooks from routing to applications",
    "category": "Cloud & resilience",
    "evidence": "Recovery plan",
    "technologies": [
      "BGP",
      "VMware",
      "Replication",
      "SQL",
      "Runbooks"
    ],
    "summary": "A recovery planning approach built around dependencies, operational ownership, and repeatable validation.",
    "challenge": "Recovering infrastructure alone does not restore a business service; identity, data, routing, and application readiness must align.",
    "approach": [
      "Mapped critical services and their dependencies to recovery priorities and targets.",
      "Outlined recovery sequencing, routing considerations, application validation, and failback.",
      "Defined full, partial, and isolated recovery exercises with evidence capture and playbook maintenance."
    ],
    "complexity": "Recovery crosses technical and organizational boundaries. Different failure scenarios require different triggers, owners, and validation steps.",
    "result": "The source material provides plans and checklists. Recovery time and data-loss objectives are planning targets, not measured achievements."
  },
  {
    "slug": "hybrid-cloud",
    "title": "Hybrid cloud architecture and failure domains",
    "category": "Cloud & resilience",
    "evidence": "Architecture study",
    "technologies": [
      "OpenStack",
      "VMware",
      "Ceph",
      "EVPN",
      "Terraform",
      "Ansible"
    ],
    "summary": "A structured evaluation connecting platform choices to provisioning, tenancy, resilience, and day-to-day operations.",
    "challenge": "Compare cloud platform approaches against operational requirements while making integration work and failure assumptions visible.",
    "approach": [
      "Compared virtualization and cloud-management approaches against a shared requirements set.",
      "Considered network fabric, storage, service catalog, automation, observability, and recovery together.",
      "Outlined failure scenarios and phased delivery needs rather than treating redundancy as a single feature."
    ],
    "complexity": "Control-plane, storage, network, and workload failures have different consequences. Product feature lists alone do not establish an operable architecture.",
    "result": "A documented architecture evaluation and contribution to shared design material. The summaries do not certify vendor capabilities or claim a completed platform deployment."
  },
  {
    "slug": "edge-security",
    "title": "Cloud edge security as code",
    "category": "Security",
    "evidence": "Rollout design",
    "technologies": [
      "Terraform",
      "Cloudflare",
      "WAF",
      "n8n"
    ],
    "summary": "Versioned edge policy with staged enforcement and operational feedback built into the rollout design.",
    "challenge": "Introduce protective controls without obscuring their effect on legitimate application traffic.",
    "approach": [
      "Organized edge policy in Terraform and differentiated application endpoint classes.",
      "Considered DNS and TLS prerequisites alongside WAF and rate-limiting configuration.",
      "Separated observation, activation, and alerting steps so policy changes can be reviewed incrementally."
    ],
    "complexity": "Policy correctness depends on application behavior and rollout state. A configured rule and an enforced rule are different operational states.",
    "result": "Configuration specifications and rollout notes are available. Pending apply and monitoring steps mean the material does not prove a fully enforced production deployment."
  },
  {
    "slug": "service-integration",
    "title": "Bidirectional service-management integration",
    "category": "Automation & integration",
    "evidence": "Integration design",
    "technologies": [
      "n8n",
      "REST APIs",
      "Webhooks",
      "Jira",
      "ConnectWise"
    ],
    "summary": "Integration planning that addresses synchronization loops, record identity, and conflicting updates.",
    "challenge": "Keep service records aligned across systems whose statuses, ownership rules, and event models differ.",
    "approach": [
      "Mapped cross-system record identifiers and lifecycle transitions.",
      "Outlined loop prevention, update ownership, retries, and audit visibility.",
      "Extended validation beyond ticket creation to notes, attachments, time entries, and update behavior."
    ],
    "complexity": "Bidirectional synchronization is a state-management problem. Retries, partial failures, and concurrent edits can otherwise create duplicate or misleading records.",
    "result": "Design notes and integration test checklists are documented. Some validation items remain unresolved; a fully verified end-to-end integration is not claimed."
  },
  {
    "slug": "sdwan-modernization",
    "title": "A phased SD-WAN operations roadmap",
    "category": "Observability",
    "evidence": "Modernization roadmap",
    "technologies": [
      "SD-WAN",
      "Prometheus",
      "Grafana",
      "Loki",
      "Incident workflows"
    ],
    "summary": "An operations roadmap combining telemetry, service workflows, and controlled evaluation of automated incident analysis.",
    "challenge": "Evolve monitoring and incident handling while maintaining continuity during the transition.",
    "approach": [
      "Planned parallel operation and phased migration with acceptance and rollback gates.",
      "Connected metric and log collection to service-management workflows.",
      "Proposed evaluating incident correlation in observation mode with human comparison before operational reliance."
    ],
    "complexity": "Changing tools also changes signal quality, ownership, and response behavior. Migration needs evidence of operational readiness at each stage.",
    "result": "The source is a roadmap. Savings, automation accuracy, uninterrupted migration, and production completion are not established."
  },
  {
    "slug": "distributed-detection",
    "title": "Distributed detection and response architecture",
    "category": "Security",
    "evidence": "Architecture study",
    "technologies": [
      "Zeek",
      "Wazuh",
      "Shuffle",
      "Network telemetry"
    ],
    "summary": "A security architecture linking local network analysis, host signals, centralized detection, and response orchestration.",
    "challenge": "Collect useful security evidence across locations without assuming that all packet traffic can be transported centrally.",
    "approach": [
      "Proposed local network sensors and a central detection and retention layer.",
      "Connected network observations with host security signals.",
      "Outlined response orchestration and a phased validation approach."
    ],
    "complexity": "Collection placement, data volume, correlation, and response authority must be designed together.",
    "result": "An architecture proposal is documented. Detection effectiveness, response accuracy, and deployment coverage have not been demonstrated by the reviewed entry."
  },
  {
    "slug": "multimodal-ingestion",
    "title": "Private multimodal ingestion architecture",
    "category": "Automation & integration",
    "evidence": "Architecture study",
    "technologies": [
      "n8n",
      "Dify",
      "LangGraph",
      "vLLM",
      "Whisper",
      "Milvus"
    ],
    "summary": "A proposed ingestion pipeline that routes documents, audio, and video through specialized processing services.",
    "challenge": "Process heterogeneous content while separating orchestration, compute-intensive inference, and retrieval storage.",
    "approach": [
      "Outlined content-specific routing and preprocessing for documents and media.",
      "Separated orchestration APIs from local inference services.",
      "Connected extracted content to semantic indexing for downstream retrieval."
    ],
    "complexity": "Media types have different processing requirements and resource profiles. Clear service boundaries make the proposed workflow easier to operate and evolve.",
    "result": "The entry describes a design. Model quality, inference speed, hardware sizing, and production implementation are not validated here."
  },
  {
    "slug": "network-migration",
    "title": "Network platform migration with explicit rollback",
    "category": "Network engineering",
    "evidence": "Migration plan",
    "technologies": [
      "Cumulus Linux",
      "MLAG",
      "Switching",
      "Change planning"
    ],
    "summary": "A network migration study that makes software compatibility and physical rollback part of the change strategy.",
    "challenge": "Plan a major switching-platform upgrade where installation methods, configuration behavior, and downgrade constraints affect recovery options.",
    "approach": [
      "Examined release-transition and MLAG configuration differences.",
      "Compared an in-place migration with a pre-staged replacement approach.",
      "Included physical restoration options where software downgrade alone would not provide a dependable rollback."
    ],
    "complexity": "A rollback plan must remain executable after the platform changes. Software, hardware compatibility, and cabling all constrain the available choices.",
    "result": "A migration analysis and operational approach are documented. The source does not establish completion of the proposed upgrade."
  }
];
